import { NewsData } from '../components/PostCard/types';

export const getFilterArray = (
  arrayNews: NewsData[],
  searchText: string,
  filterType: string
): NewsData[] => {
  const formattedSearchText = searchText.toLowerCase();
  const searchArray = arrayNews.filter((element) => {
    switch (filterType) {
      case 'title':
        return element.title.toLowerCase().includes(formattedSearchText);
      case 'author':
        return element.author.email.toLowerCase().includes(formattedSearchText);
      case 'text':
        return element.text.toLowerCase().includes(formattedSearchText);
      case 'tags': {
        const searchTags = element.tags
          .filter((tag) => tag.value.toLowerCase().includes(formattedSearchText));
        if (searchTags.length > 0) return true;
        break;
      }
      default:
        if (
          element.title.toLowerCase().includes(formattedSearchText) ||
          element.author.email.toLowerCase().includes(formattedSearchText) ||
          element.text.toLowerCase().includes(formattedSearchText)
        ) return true;
        else {
          const searchTags = element.tags
            .filter((tag) => tag.value.toLowerCase().includes(formattedSearchText));
          if (searchTags.length > 0) return true;
        }
    }
  });
  return searchArray;
};

