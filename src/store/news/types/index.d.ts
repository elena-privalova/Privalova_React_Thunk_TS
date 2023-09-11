interface AddNewsInterface {
  title: string,
  text: string,
  file: File,
  tags: string[]
}

interface NewsState {
  isLoading: boolean,
  news: AddNewsInterface | null,
  error: string,
}

