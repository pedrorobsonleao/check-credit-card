# check-credit-card

a creditcard number validator

## how to

### install

```bash
yarn add check_credit_card
```

### test

to run unity test

```bash
yarn test
yarn run v1.19.1
$ mocha


  test check_credit_card
    ✓ invalid card
    ✓ hipercard
    ✓ amex
    ✓ visa
    ✓ master
    ✓ diners
    ✓ elo
    ✓ unionpay
    ✓ discover


  9 passing (20ms)

Done in 0.35s.
```

## use sample

```nodejs
> const checkCrediCard = require("../index");
> assert.equal(true, checkCrediCard.check("6062826266979137).valid;
> assert.equal("HIPERCARD", checkCrediCard.check("6062826266979137").flag);

```

read test file to more sample.

## contacts

pedro.leao@gmail.com