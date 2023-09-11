import { AuthorInterface } from '../../../components/PostCard/types';

interface RequestUser {
  email: string,
  password: string,
}

interface AuthUser {
  accessToken: string,
  user: AuthorInterface,
}

interface VerifyUser extends AuthorInterface {
  rating: number;
}

interface AuthState {
  isLoading: boolean,
  authUser: AuthUser | VerifyUser | null,
  error: string,
}

