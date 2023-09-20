interface UserNewsState {
  isUserNewsLoading: boolean,
  userNewsError: string,
}

interface RequestEditNewsData {
  id: number,
  userNews: EditNewsData,
}

interface AddNewsData {
  title: string,
  text: string,
  file: File,
  tags: string[],
}

interface EditNewsData {
  title: string,
  text: string,
  file?: File | null,
}

interface InitialAddNewsState {
  title: string,
  text: string,
  file: File | null,
  tags: string,
}

