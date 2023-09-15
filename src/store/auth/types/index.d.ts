import { AuthorData } from '../../../components/PostCard/types';

interface RequestUser {
  email: string,
  password: string,
}

interface AuthUser {
  accessToken: string,
  user: AuthorInterface,
}

interface VerifyUser extends AuthorData {
  rating: number;
}

interface AuthState {
  isAuthLoading: boolean,
  authUser: AuthUser | VerifyUser | RefreshUser | null,
  authError: string,
  isSuccessRefresh: boolean
}

interface RefreshUser {
  email?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  file?: File | null
}

interface RequestRefreshUser {
  id: number,
  refreshUser: RefreshUser
}

