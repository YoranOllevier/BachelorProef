import { useState } from 'react';
import ImgButton from '../../General/ImgButton/ImgButton';
import { useNavigate } from 'react-router';

const Mail = ({ id, from, subject, body, sentOn, read, starred, labels = [] }) => {
  const formatMailDate = (date) => {
    const mailDate = new Date(date);
    const now = new Date();

    const sameDay =
      mailDate.getFullYear() === now.getFullYear() &&
      mailDate.getMonth() === now.getMonth() &&
      mailDate.getDate() === now.getDate();

    if (sameDay) {
      return mailDate.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
      });
    }

    const sameYear =
      mailDate.getFullYear() === now.getFullYear();

    if (sameYear) {
      return mailDate.toLocaleDateString([], {
        month: 'short',
        day: 'numeric',
      });
    }

    return mailDate.toLocaleDateString([], {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };
  const [isStarred, setIsStarred] = useState(starred);
  const [isImportant, setIsImportant] = useState(labels.some((l) => l.name == 'important'));
  const [isSnoozed, setIsSnoozed] = useState(labels.some((l) => l.name == 'important'));
  const [isRead, setIsRead] = useState(read);

  const navigate = useNavigate();

  return <div className={`mail ${isRead ? 'read' : 'unread'}`} onClick={() => {
    navigate(`/${id}`);
  }}>
    <ImgButton
      svg={'/select.png'}
      alt={'select'} />
    <ImgButton
      svg={`/star${isStarred ? '-selected' : ''}.png`}
      alt={isStarred ? 'Starred' : 'Not Starred'}
      onClick={() => setIsStarred(!isStarred)} />
    <ImgButton
      svg={`/important${isImportant ? '-selected' : ''}.png`}
      alt={isImportant ? 'Mark Important' : 'Unmark Important'}
      onClick={() => setIsImportant(!isImportant)}
      className='important' />
    <div className='from'>{from?.name}</div>
    <div className='preview'><span><span className='subject'>{subject}</span> - {body}</span></div>
    <div className='actions'>
      <ImgButton
        svg={'/delete.png'}
        alt={'Delete'} />
      <ImgButton
        svg={`/mail-${isRead ? 'un' : ''}read.png`}
        onClick={() => setIsRead(!isRead)} />
      <ImgButton
        svg={`/snoozed${isSnoozed ? '-selected' : ''}.png`}
        onClick={() => setIsSnoozed(!isSnoozed)} />
    </div>
    <div className='date'>{formatMailDate(sentOn)}</div>
  </div>;
};

export default Mail;