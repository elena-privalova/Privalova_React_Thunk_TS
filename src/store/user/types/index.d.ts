import { NewsInterface } from '../../../components/PostCard/types';
import { VerifyUser } from '../../auth/types';

interface UserState {
  isLoading: boolean,
  currentUser: VerifyUser | null,
  usersPosts: NewsInterface[],
  error: string,
}

