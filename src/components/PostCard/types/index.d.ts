interface AuthorInterface {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  avatarPath: string | null,
  createdAt: string,
  updatedAt: string,
};

interface TagsInterface {
  id: number,
  value: string,
  createdAt: string,
  updatedAt: string
};

export interface NewsInterface {
  id: number,
  title: string,
  text: string,
  coverPath: string,
  authorId: number,
  createdAt: string,
  updatedAt: string,
  rating: number,
  commentsCount: number,
  author: AuthorInterface,
  tags: TagsInterface[],
};

interface PostCardProps {
  post: NewsInterface;
}

