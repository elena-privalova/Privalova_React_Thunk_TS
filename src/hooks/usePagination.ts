import { Dispatch, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CommentData } from '../store/comments/types';
import { RootState } from '../pages/Main/types';

const COUNT_COMMENTS_ON_PAGE = 5;

const usePagination = (setSliceComments: Dispatch<React.SetStateAction<CommentData[]>>): PaginationReturnData => {
  const { comment, commentsList } = useSelector((state: RootState) => state.comments);

  const [countPages, setCountPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const end = currentPage * COUNT_COMMENTS_ON_PAGE;
    const start = end - COUNT_COMMENTS_ON_PAGE;
    setCountPages(Math.ceil(commentsList.length / COUNT_COMMENTS_ON_PAGE));
    setSliceComments(commentsList.slice(start, end));
  }, [currentPage, commentsList]);

  useEffect(() => {
    if (comment != null) setCurrentPage(1);
  }, [comment]);

  const changePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    changePageNumber,
    countPages
  };
};

export default usePagination;

