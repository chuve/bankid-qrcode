import { createHmac } from 'node:crypto';

export function createBankIdQrDataFunc({orderTimeInSeconds, qrStartToken, qrStartSecret} : {orderTimeInSeconds: number, qrStartToken: string, qrStartSecret: string}): Function {
    return () => {
        const currentTime = Math.floor(Date.now() / 1000);
        const qrTime = (currentTime - orderTimeInSeconds).toString();
        const hmac = createHmac('sha256', qrStartSecret);
        hmac.update(qrTime.toString());
        const qrAuthCode = hmac.digest('hex');
        return `bankid.${qrStartToken}.${qrTime}.${qrAuthCode}`;
    }
}

export default createBankIdQrDataFunc;