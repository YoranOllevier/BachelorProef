import { useState } from 'react';
import ImgButton from '../../General/ImgButton/ImgButton';

const Mail = ({ from, to, subject, body, sentOn, read, starred, labels = [] }) => {

  const [isStarred, setIsStarred] = useState(starred);
  const [isImportant, setIsImportant] = useState(labels.some((l) => l.name == 'important'));

  const formatMailDate = (date) => {
    const mailDate = new Date(date);

    return mailDate.toLocaleString([], {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  return (
    <div className="mail-body">
      <div className="mail-header">
        <h2>{subject}</h2>
        <ImgButton
          svg={`/important${isImportant ? '-selected' : ''}.png`}
          alt={isImportant ? 'Mark Important' : 'Unmark Important'}
          onClick={() => setIsImportant(!isImportant)}
          className='important' />
      </div>
      <div className='mail-info'>
        <div className='sender-row'>
          <div className='sender-details'>
            <h3 className='name'>{from.name}</h3>
            <div className='email'>{`<${from.email}>`}</div>
          </div>
          <div className='mail-actions'>
            {formatMailDate(sentOn)}
            <ImgButton
              svg={`/star${isStarred ? '-selected' : ''}.png`}
              alt={isStarred ? 'Starred' : 'Not Starred'}
              onClick={() => setIsStarred(!isStarred)} />
            <ImgButton
              svg={'/reply.png'}
              alt={'Reply'}
              onClick={() => { }} />
          </div>
        </div>
        <div className='recipients'>{to.map((a) => <div>{a.name}</div>)}</div>
      </div>
      <div className='mail-content'>
        {body}
      </div>
    </div>
  );
};

export default Mail;