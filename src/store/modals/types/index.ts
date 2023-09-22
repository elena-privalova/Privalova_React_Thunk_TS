export const CURRENT_AUTH_TYPE_VALUES = {
  signup: 'signup',
  login: 'login'
};

export const CURRENT_NEWS_TYPE_VALUES = {
  add: 'add',
  edit: 'edit'
};

export interface AuthModalVisibility {
  isAuthVisible: boolean,
  currentType: keyof typeof CURRENT_AUTH_TYPE_VALUES,
}

export interface NewsModalVisibility {
  isNewsVisible: boolean,
  kind: keyof typeof CURRENT_NEWS_TYPE_VALUES,
  newsId?: number,
}

export interface RefreshUserModalVisibility {
  isRefreshVisible: boolean,
}

export interface CommentModalVisibility {
  isCommentVisible: boolean,
}

