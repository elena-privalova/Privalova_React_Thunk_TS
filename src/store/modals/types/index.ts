export const CURRENT_AUTH_TYPE_VALUES = {
  signup: 'signup',
  login: 'login'
};

export interface AuthModalState {
  isAuthVisible: boolean,
  currentType: keyof typeof CURRENT_AUTH_TYPE_VALUES,
}

export interface AuthVisibilityState {
  isVisible: boolean,
  kind: keyof typeof CURRENT_AUTH_TYPE_VALUES,
}

export interface NewsModalState {
  isNewsVisible: boolean,
}

export interface NewsVisibilityState {
  isVisible: boolean
}

