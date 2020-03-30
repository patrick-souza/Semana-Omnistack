export type IOngState = {
  readonly storeIsLoading: boolean;
};

export type Ong = {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
};

export const OngActionsTypes = {
  STORE: '@@ong/STORE',
  STORE_SUCCESS: '@@ong/STORE_SUCCESS',
  STORE_ERROR: '@@ong/STORE_ERROR',
};

export const INITIAL_STATE: IOngState = {
  storeIsLoading: false,
};
