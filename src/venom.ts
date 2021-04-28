import { create, Whatsapp } from 'venom-bot';

const qrCodes: {
  code: any;
} = {
  code: undefined,
};

function getQrCode(qrCode: string) {
  console.log(qrCode);
  qrCodes.code = qrCode;
  console.log(qrCodes.code);
}

function createInstance(
  number: string,
  callback: (qrCode: string) => void,
): Promise<Whatsapp> {
  return create({
    session: number,
    catchQR: callback,
  });
}

export { createInstance };
