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

// function createInstance(
//   number: string,
//   callback: (qrCode: string) => void,
// ): Promise<Whatsapp> {
//   return create({
//     session: number,
//     catchQR: callback,
//   });
// }

class CreateInstance {
  private qrCode = '';

  createVenomInstance(): void {
    console.log('Iniciando');
    create({
      session: 'Qualquer',
      catchQR: this.setQrCode,
    });
  }

  setQrCode(qrCode: string): void {
    console.log('Aqui');
    console.log(qrCode);
    this.qrCode = qrCode;
  }

  getQrCode(): string {
    return this.qrCode;
  }
}

export { CreateInstance };
