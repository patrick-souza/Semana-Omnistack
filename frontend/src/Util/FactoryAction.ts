import { IReducerAction } from 'Redux-tools/Modules';

export default function FactoryAction<T = any>(
  type: string,
  payload = {} as T
): IReducerAction<T> {
  return { type, payload };
}
