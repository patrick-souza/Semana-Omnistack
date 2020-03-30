import FactoryAction from 'Util/FactoryAction';
import { AuthActionsTypes } from './types';

export function StoreSession(ongId: string) {
  return FactoryAction(AuthActionsTypes.STORE, ongId);
}
export function StoreSessionSuccess(ongName: string) {
  return FactoryAction(AuthActionsTypes.STORE_SUCCESS, ongName);
}
export function StoreSessionError() {
  return FactoryAction(AuthActionsTypes.STORE_ERROR);
}
export function Signout() {
  return FactoryAction(AuthActionsTypes.SIGNOUT);
}
export function ReloadSession() {
  return FactoryAction(AuthActionsTypes.RELOAD);
}
