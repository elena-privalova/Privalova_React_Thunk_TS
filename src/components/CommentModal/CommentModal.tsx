import {
  ChangeEvent,
  FormEvent,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Modal } from '@mui/material';

import { AppDispatch, RootState } from '../../pages/Main/types';
import { changeCommentVisibility } from '../../store/modals/slicesCommentModal';
import { clearComment } from '../../store/comments/slicesComments';
import { addComment } from '../../store/comments';
import WarningAlert from '../Error/WarningAlert';
import {
  StyledButton,
  StyledForm,
  StyledLoader,
  StyledTypography
} from '../AuthModal/styles';

import { StyledTextArea } from './styles';
import './commentModal.css';

const CommentModal = () => {
  const { isCommentsLoading, commentsError } = useSelector((state: RootState) => state.comments);
  const { isCommentVisible } = useSelector((state: RootState) => state.commentModal);

  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const handleClose = () => {
    dispatch(changeCommentVisibility({ isCommentVisible: !isCommentVisible }));
    dispatch(clearComment());
  };

  const [text, setText] = useState('');

  const hadleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addComment({
      text,
      postId: Number(id)
    }));
  };

  return (
    <Modal
      open={isCommentVisible}
      onClose={handleClose}
    >
      <>
        <StyledForm className="comment-modal" onSubmit={handleSubmit}>
          {isCommentsLoading
            ?
            <StyledLoader color="inherit" />
            :
            <>
              <StyledTypography>COMMENT</StyledTypography>
              <StyledTextArea
                placeholder="Text"
                maxRows={10}
                onChange={hadleChangeText}
              />
              <StyledButton
                className="comment-modal__button"
                variant="contained"
                type="submit"
                disabled={text === ''}
              >
                add
              </StyledButton>
            </>
          }
        </StyledForm>
        {commentsError !== '' && (
          <div className="modal__alert">
            <WarningAlert text="Некорректно введенные данные" type="error" />
          </div>
        )}
      </>
    </Modal>
  );
};

export default CommentModal;

