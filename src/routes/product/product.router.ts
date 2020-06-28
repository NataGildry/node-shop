
import {Router} from 'express';

import {productController} from '../../controllers';
import {checkAccessTokenMiddleware} from '../../middlewares';

const router = Router();

router.post('/',
  checkAccessTokenMiddleware,
  // newProductValidationMiddleware,
  productController.createProduct);

export const productRouter = router;
