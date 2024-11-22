import { createBankIdQrDataFunc } from '../index';

const qrStartToken = '67df3917-fa0d-44e5-b327-edcc928297f8';
const qrStartSecret = 'd28db9a7-4cde-429e-a983-359be676944c';
const orderTime = Math.floor(Date.now() / 1000);

test('createBankIdQrDataFunc for time=0', () => {
    const orderTimeInSeconds = orderTime;
    expect(createBankIdQrDataFunc({orderTimeInSeconds, qrStartToken, qrStartSecret})()).toBe('bankid.67df3917-fa0d-44e5-b327-edcc928297f8.0.dc69358e712458a66a7525beef148ae8526b1c71610eff2c16cdffb4cdac9bf8');
});

test('createBankIdQrDataFunc for time=1', () => {
    const orderTimeInSeconds = orderTime - 1;
    expect(createBankIdQrDataFunc({orderTimeInSeconds, qrStartToken, qrStartSecret})()).toBe('bankid.67df3917-fa0d-44e5-b327-edcc928297f8.1.949d559bf23403952a94d103e67743126381eda00f0b3cbddbf7c96b1adcbce2');
});

test('createBankIdQrDataFunc for time=2', () => {
    const orderTimeInSeconds = orderTime - 2;
    expect(createBankIdQrDataFunc({orderTimeInSeconds, qrStartToken, qrStartSecret})()).toBe('bankid.67df3917-fa0d-44e5-b327-edcc928297f8.2.a9e5ec59cb4eee4ef4117150abc58fad7a85439a6a96ccbecc3668b41795b3f3');
});