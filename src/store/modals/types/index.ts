export const CURRENT_TYPE_VALUES = {
  signup: 'signup',
  login: 'login',
};

export interface ModalState {
  isOpen: boolean,
  currentType: keyof typeof CURRENT_TYPE_VALUES,
};

export interface VisibilityInterface {
  isOvertly: boolean,
  kind: keyof typeof CURRENT_TYPE_VALUES,
};

