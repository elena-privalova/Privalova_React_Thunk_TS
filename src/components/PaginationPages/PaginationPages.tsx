import { type FC, MouseEvent } from 'react';

import { StyledPaginationButton } from './styles';

const PaginationPages: FC<PaginationPagesProps> = ({ countPages, currentPage, changePageNumber }) => {
  const handleClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    changePageNumber(Number(event.currentTarget.outerText));
  };

  return (
    <div className="post__pagination pagination">
      {Array.from({ length: countPages }).map((page, index) => {
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
