interface AuthorData {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  avatarPath: string | null,
  createdAt: string,
  updatedAt: string,
}

interface TagsData {
  id: number,
  value: string,
  createdAt: string,
  updatedAt: string
}

export interface NewsData {
  id: number,
  title: string,
  text: string,
  coverPath: string,
  authorId: number,
  createdAt: string,
  updatedAt: string,
  rating: number,
  commentsCount: number,
  author: AuthorData,
  tags: TagsData[],
}

interface PostCardProps {
  post: NewsData;
}

