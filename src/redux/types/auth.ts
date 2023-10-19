import {IAction} from './action';
import { UserModel } from '../../models';

export type GetSignUpRequestAction = IAction & {
  userInfo: UserModel
}