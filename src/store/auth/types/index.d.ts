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
  authUser: AuthUser | VerifyUser | null,
  authError: string,
}

