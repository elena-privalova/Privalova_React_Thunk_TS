import { NewsData } from '../../../components/PostCard/types';
import { VerifyUser } from '../../auth/types';

interface UserState {
  isUserLoading: boolean,
  currentUser: VerifyUser | null,
  usersPosts: NewsData[],
  userError: string,
}

