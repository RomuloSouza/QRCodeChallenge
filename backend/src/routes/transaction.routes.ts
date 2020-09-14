import { Router } from 'express';
import TransactionController from '../controllers/transactionController';

const transactionRouter = Router();
const transactionController = new TransactionController();

transactionRouter.post('/transactions', (request, response) => {
  console.log('New transaction received!');
  console.log('Body: ', request.body);
  return transactionController.handle(request, response);
});

transactionRouter.get('/', async (request, response) => {
  return response.status(200).json({ msg: 'Sucess!' });
});

export default transactionRouter;
