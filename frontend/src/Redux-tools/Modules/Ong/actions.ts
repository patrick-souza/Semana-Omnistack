import FactoryAction from 'Util/FactoryAction';
import { OngActionsTypes, Ong } from './types';

export function StoreOng(newOng: Ong) {
  return FactoryAction(OngActionsTypes.STORE, newOng);
}
export function StoreOngSuccess() {
  return FactoryAction(OngActionsTypes.STORE_SUCCESS);
}
export function StoreOngError() {
  return FactoryAction(OngActionsTypes.STORE_ERROR);
}
