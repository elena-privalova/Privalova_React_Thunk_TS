import { NewsInterface } from '../components/PostCard/types';

export const getFilterArray = (
  arrayNews: NewsInterface[], 
  searchText: string, 
  filterType: string
  ): NewsInterface[] => {
  const searchArray = arrayNews.filter((element) => {
    const formattedSearchText = searchText.toLowerCase();
    switch (filterType) {
      case 'title':
        return element.title.includes(formattedSearchText);
      case 'author':
        return element.author.email.includes(formattedSearchText);
      case 'text':
        return element.text.includes(formattedSearchText);
      case 'tags':
        let searchTags = element.tags
            .filter((tag) => tag.value.includes(formattedSearchText));
        if (searchTags.length > 0) return true;
        break;
      default:
        if (
          element.title.includes(formattedSearchText) ||
          element.author.email.includes(formattedSearchText) ||
          element.text.includes(formattedSearchText)
        ) return true;
        else {
          let searchTags = element.tags
            .filter((tag) => tag.value.includes(formattedSearchText));
          if (searchTags.length > 0) return true;
        }
    }
  });
  return searchArray;
}
