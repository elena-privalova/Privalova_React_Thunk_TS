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
import { CURRENT_NEWS_TYPE_VALUES } from '../../store/modals/types';
import { clearNews } from '../../store/news/slicesNews';
import { addNews, editNews } from '../../store/news';
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
  const { isNewsVisible, kind, userNewsId } = useSelector((state: RootState) => state.newsModal);
  const { isUserNewsLoading, userNewsError } = useSelector((state: RootState) => state.news);
  const { isSuccessUserNews } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  const actionNewsType = kind === CURRENT_NEWS_TYPE_VALUES.edit ? editNews : addNews;

  const { id } = useParams();

  const handleClose = () => {
    dispatch(clearNews());
    dispatch(changeNewsVisibility({
      isNewsVisible: !isNewsVisible,
      kind
    }));
  };

  let initialNews: InitialAddNewsState | EditNewsData;
  if (actionNewsType === addNews) {
    initialNews = {
      title: '',
      text: '',
      file: null,
      tags: ''
    };
  }
  else {
    initialNews = {
      title: '',
      text: '',
      file: null
    };
  }

  const [news, setNews] = useState(initialNews);

  const handleChangeNewsInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setNews({ ...news, [event.target.name]: event.target.value });
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      setNews({ ...news, [event.target.name]: event.target.files[0] });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (actionNewsType === addNews) {
      if ('tags' in news) {
        const formattedTags = news.tags.split(', ');
        if (news.file != null) {
          dispatch(addNews({
            title: news.title,
            text: news.text,
            file: news.file,
            tags: formattedTags
          }));
        }
      }
    }
    else {
      dispatch(editNews({
        id: userNewsId,
        userNews: news
      }));
    }
  };

  const isDisable = kind === CURRENT_NEWS_TYPE_VALUES.add
    ? news.title === '' || news.text === '' || ('tags' in news && news.tags.length === 0) || news.file == null
    : news.title === '' || news.text === '';

  useEffect(() => {
    if (!isNewsVisible) setNews(initialNews);
    if (isSuccessUserNews) dispatch(getUsersPosts(Number(id)));
  }, [isNewsVisible, isSuccessUserNews]);

  return (
    <Modal
      open={isNewsVisible}
      onClose={handleClose}
    >
      <>
        <StyledForm className="news-form" onSubmit={handleSubmit}>
          {isUserNewsLoading && (
            <StyledLoader color="inherit" />
          )}
          {!isUserNewsLoading && (
            <>
              <StyledTypography>NEWS</StyledTypography>
              <StyledTextField
                name="title"
                variant="outlined"
                label="Title"
                value={news.title}
                onChange={handleChangeNewsInfo}
              />
              <StyledTextField
                name="text"
                variant="outlined"
                label="Text"
                value={news.text}
                onChange={handleChangeNewsInfo}
              />
              {kind === CURRENT_NEWS_TYPE_VALUES.add && 'tags' in news && (
                <StyledTextField
                  name="tags"
                  variant="outlined"
                  label="Tags"
                  value={news.tags}
                  onChange={handleChangeNewsInfo}
                />
              )}
              <label className="news-form__file-group">
                <input
                  name="file"
                  type="file"
                  onChange={handleChangeFile}
                />
                <span className="file-group__text">Choose file</span>
                {news.file != null && (
                  <span className="file-group__file-name">{news.file.name}</span>
                )}
              </label>
              <StyledButton
                variant="contained"
                disabled={isDisable}
                type="submit"
              >
                {kind}
              </StyledButton>
            </>
          )}
        </StyledForm>
        {userNewsError !== '' && (
          <div className="modal__alert">
            <WarningAlert text="Некорректно введенные данные" type="error" />
          </div>
        )}
      </>
    </Modal>
  );
};

export default NewsModal;

