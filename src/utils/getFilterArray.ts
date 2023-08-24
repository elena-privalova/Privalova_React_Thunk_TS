import { NewsInterface } from "../components/PostCard/types";

export const getFilterArray = (arrayNews: NewsInterface[], searchText: string, filterType: string): NewsInterface[] => {
  const searchArray = arrayNews.filter((element) => {
    switch (filterType) {
      case 'title':
        return element.title.includes(searchText);
      case 'author':
        return element.author.email.includes(searchText);
      case 'text':
        return element.text.includes(searchText);
      case 'tags':
        let searchTags = element.tags
            .filter((tag) => tag.value.includes(searchText));
        if (searchTags.length > 0) return true;
        break;
      default:
        if (
          element.title.includes(searchText) ||
          element.author.email.includes(searchText) ||
          element.text.includes(searchText)
        ) return true;
        else {
          let searchTags = element.tags
            .filter((tag) => tag.value.includes(searchText));
          if (searchTags.length > 0) return true;
        }
    }
  });
  return searchArray;
}