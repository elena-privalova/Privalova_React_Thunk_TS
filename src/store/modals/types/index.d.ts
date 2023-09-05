const CURRENT_TYPE_VALUES = {
  signup: 'sign up',
  login: 'log in',
};

interface ModalState {
  isOpen: boolean,
  currentType: keyof typeof CURRENT_TYPE_VALUES,
};

interface VisibilityInterface {
  isOvertly: boolean,
  kind: keyof typeof CURRENT_TYPE_VALUES,
};

