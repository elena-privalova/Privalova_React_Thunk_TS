interface AuthorInterface {
  id: number,
  email: string,
  avatarPath?: string,
  createdAt?: Date,
  updatedAt?: Date
}

interface TagsInterface {
  id: number,
  value: string,
  createdAt?: Date,
  updatedAt?: Date
}

interface NewsInterface {
  id: number,
  title: string,
  text: string,
  coverPath: string,
  author: AuthorInterface,
  tags: TagsInterface[],
  rating: number,
  commentsCount: number,
  createdAt: Date,
  updatedAt?: Date
}