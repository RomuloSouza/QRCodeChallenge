import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

interface TransactionInterface {
  payerIdentifier: string;
  value: string;
  recieverIdentifier: string;
}

class TransactionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const params: TransactionInterface = request.body;

    try {
      const salt = bcrypt.genSaltSync(10);
      const qrCodeString = bcrypt.hashSync(JSON.stringify(params), salt);

      console.log('returning qrcode: ', qrCodeString);

      return response.status(200).json({ params, qrCodeString });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default TransactionController;
