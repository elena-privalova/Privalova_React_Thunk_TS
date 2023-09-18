export const CURRENT_AUTH_TYPE_VALUES = {
  signup: 'signup',
  login: 'login'
};

export interface AuthModalVisibility {
  isAuthVisible: boolean,
  currentType: keyof typeof CURRENT_AUTH_TYPE_VALUES,
}

export interface NewsModalVisibility {
  isNewsVisible: boolean,
}

export interface RefreshUserModalVisibility {
  isRefreshVisible: boolean;
}

