interface AddNewsData {
  title: string,
  text: string,
  file: File,
  tags: string[]
}

interface AddNewsState {
  isAddNewsLoading: boolean,
  news: AddNewsData | null,
  addNewsError: string,
}

