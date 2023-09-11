export const CURRENT_TYPE_VALUES = {
  signup: 'signup',
  login: 'login'
};

export interface AuthModalState {
  isOpen: boolean,
  currentType: keyof typeof CURRENT_TYPE_VALUES,
}

export interface OpenessInterface {
  isOvertly: boolean,
  kind: keyof typeof CURRENT_TYPE_VALUES,
}

export interface NewsModalState {
  isVisible: boolean,
}

export interface VisibilityInterface {
  isOvertly: boolean
}

