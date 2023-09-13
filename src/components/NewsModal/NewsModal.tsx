import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Modal } from '@mui/material';

import { AppDispatch, RootState } from '../../pages/Main/types';
import { changeNewsVisibility } from '../../store/modals/slicesNewsModal';
import { clearNews } from '../../store/news/slicesNews';
import { addNews } from '../../store/news';
import { getPosts } from '../../store/posts';
import { getUsersPosts } from '../../store/user';
import WarningAlert from '../Error/WarningAlert';
import {
  StyledButton,
  StyledForm,
  StyledLoader,
  StyledTextField,
  StyledTypography
} from '../AuthModal/styles';

import './newsModal.css';

const NewsModal = () => {
  const { isNewsVisible } = useSelector((state: RootState) => state.newsModal);
  const { isAddNewsLoading, news, addNewsError } = useSelector((state: RootState) => state.news);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { authUser } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const handleClose = () => {
    dispatch(clearNews());
    dispatch(changeNewsVisibility({ isVisible: !isNewsVisible }));
    setTitle('');
    setText('');
    setTags('');
    setFile(null);
    if (id != null && currentUser.id === authUser.id) dispatch(getUsersPosts(Number(id)));
    else if (news != null) dispatch(getPosts());
  };

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleChangeTags = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) setFile(event.target.files[0]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formattedTags = tags.split(', ');
    if (file != null) {
      dispatch(addNews({
        title: title,
        text: text,
        file: file,
        tags: formattedTags
      }));
    }
  };

  const isDisable = title === '' || text === '' || tags.length === 0 || file == null;

  useEffect(() => {
    if (news != null) handleClose();
  }, [news]);

  return (
    <Modal
      open={isNewsVisible}
      onClose={handleClose}
    >
      <>
        <StyledForm className="news-form" onSubmit={handleSubmit}>
          {isAddNewsLoading && (
            <StyledLoader color="inherit" />
          )}
          {!isAddNewsLoading && (
            <>
              <StyledTypography>NEWS</StyledTypography>
              <StyledTextField
                variant="outlined"
                label="Title"
                value={title}
                onChange={handleChangeTitle}
              />
              <StyledTextField
                variant="outlined"
                label="Text"
                value={text}
                onChange={handleChangeText}
              />
              <StyledTextField
                variant="outlined"
                label="Tags"
                value={tags}
                onChange={handleChangeTags}
              />
              <label className="news-form__file-group">
                <input
                  name="Picture"
                  type="file"
                  onChange={handleChangeFile}
                />
                <span className="file-group__text">Choose file</span>
                { file != null && (
                  <span className="file-group__file-name">{file.name}</span>
                )}
              </label>
              <StyledButton
                variant="contained"
                disabled={isDisable}
                type="submit"
              >
                ADD
              </StyledButton>
            </>
          )}
        </StyledForm>
        {addNewsError !== '' && (
          <div className="modal__alert">
            <WarningAlert text="Некорректно введенные данные" type="error" />
          </div>
        )}
      </>
    </Modal>
  );
};

export default NewsModal;

