import { NewsData } from '../../../components/PostCard/types';
import { VerifyUser } from '../../auth/types';

interface UserState {
  isUserLoading: boolean,
  currentUser: VerifyUser | null,
  currentUserPost: NewsData | null,
  usersPosts: NewsData[],
  userError: string,
  isSuccessUserNews: boolean
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

