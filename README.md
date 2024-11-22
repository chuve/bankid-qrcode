# bankid-qrcode

[![NPM](https://nodei.co/npm/bankid-qrcode.png?stars&downloads)](https://nodei.co/npm/bankid-qrcode/)  

A straightforward function for creating strings used in animated QR Codes for the Swedish BankID service.

String pattern: `bankid.qrStartToken.time.qrAuthCode`

[BankID official documentation](https://developers.bankid.com/getting-started/frontend/qr-code)  

## Installation

    npm install bankid-qrcode

## Usage

### JavaScript
```JavaScript
const createBankIdQrDataFunc = require('bankid-qrcode');

const getBankIdQrDataString = createBankIdQrDataFunc({
    orderTimeInSeconds: 1732308860,
    qrStartToken: '67df3917-fa0d-44e5-b327-edcc928297f8',
    qrStartSecret: 'd28db9a7-4cde-429e-a983-359be676944c'
})

let qrDataString = getBankIdQrDataString() // bankid.67df3917-fa0d-44e5-b327-edcc928297f8.0.dc69358e712458a66a7525beef148ae8526b1c71610eff2c16cdffb4cdac9bf8 
```

### TypeScript 
```TypeScript
import { createBankIdQrDataFunc } from 'bankid-qrcode';

const getBankIdQrDataString = createBankIdQrDataFunc({
    orderTimeInSeconds: 1732308860,
    qrStartToken: '67df3917-fa0d-44e5-b327-edcc928297f8',
    qrStartSecret: 'd28db9a7-4cde-429e-a983-359be676944c'
})

let qrDataString = getBankIdQrDataString() // bankid.67df3917-fa0d-44e5-b327-edcc928297f8.0.dc69358e712458a66a7525beef148ae8526b1c71610eff2c16cdffb4cdac9bf8 
```

## License
The project is released under the [MIT license](https://opensource.org/license/mit/).