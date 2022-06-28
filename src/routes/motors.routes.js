import {Router} from 'express'
const router = Router();
import * as motorsControllers from '../controllers/motors.controllers'

router.get('/', motorsControllers.getMotors);
router.get('/:motorId', motorsControllers.getMotorById);
router.post('/', motorsControllers.createMotors);
router.put('/:motorId', motorsControllers.updateMotorsById);
router.delete('/:motorId',  motorsControllers.deleteMotorsById);

export default router;