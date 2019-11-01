/* jshint esversion:8 */

const checkCreditCard = (()=>{

    const _flags = {
        ELO: /^(5067|509[0-9]|6277|6363|650[0-9]|651[67]|6550)[0-9]{12}$/,
        JCB: /^35\d{14}$/,
        AMEX: /^3[47][0-9]{13}$/,
        VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
        DINERS: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        MASTER: /^5[1-5][0-9]{14}$/,
        VOYAGER: /^8699\d{12}$/,
        ENROUTE: /^(2014|2149)\d{12}$/,
        DISCOVER: /^6011\d{12}$/,
        UNIONPAY: /^(622305|622698|621483|622202)\d{10}$/,
        HIPERCARD: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
    };

    const luhn = (cardNumber) => {

        let flag = false;

        if(cardNumber.match(/^[0-9]+$/)) {

            let oddOrEven = cardNumber.length & 1;

            let sum = 0;

            cardNumber.split("").forEach( (charAt,count) => {

                let digit = charAt - "0";

                if (((count & 1) ^ oddOrEven) == 0) { // not
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }
                sum += digit;
            });

            flag = (sum == 0) ? false : (sum % 10 == 0);
        }
        return flag;
    };
    
    const fromCreditCard = (cardNumber) => {

        let flag = {
            valid: false
        };

        if(luhn(cardNumber)) {
            for( let key in _flags) {
                if(cardNumber.match(_flags[key])) {
                    flag.valid = true;
                    flag.flag = key;
                }
            }
        }

        return flag;
    };

    return {
        check: fromCreditCard
    };
})();

module.exports = checkCreditCard;