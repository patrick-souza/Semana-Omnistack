export type IAuthState = {
  readonly isLoading: boolean;
  readonly ongName: string;
  readonly ongId: string;
  readonly isAuthenticated: boolean;
};

export const AuthActionsTypes = {
  STORE: '@@auth/STORE',
  STORE_SUCCESS: '@@auth/STORE_SUCCESS',
  STORE_ERROR: '@@auth/STORE_ERROR',
  RELOAD: '@auth/RELOAD',
  SIGNOUT: '@@auth/SIGNOUT',
};

export const INITIAL_STATE = {
  isLoading: false,
  ongName: '',
  ongId: '',
  isAuthenticated: false,
};
