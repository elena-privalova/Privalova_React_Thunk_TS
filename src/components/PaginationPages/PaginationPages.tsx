import { type FC, MouseEvent } from 'react';

import { StyledPaginationButton } from './styles';

const PaginationPages: FC<PaginationPagesProps> = ({ countPages, currentPage, changePageNumber }) => {
  const handleClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      changePageNumber(Number(event.target.outerText));
    }
  };

  return (
    <div className="post__pagination pagination">
      {Array(countPages).fill(0).map((page, index) => {
        return <StyledPaginationButton
          key={`${page}-${index}`}
          variant="contained"
          className={currentPage === index + 1 ? 'pagination__select' : ''}
          onClick={handleClickPage}
        >
          {index + 1}
        </StyledPaginationButton>;
      })}
    </div>
  );
};

export default PaginationPages;
