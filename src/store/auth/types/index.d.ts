import { AuthorData } from '../../../components/PostCard/types';
import { RefreshUser } from '../../user/types';

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
  authError: string
}

