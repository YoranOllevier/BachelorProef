import ImgButton from '../../General/ImgButton/ImgButton';

const Mail = ({ starred, important, isRead, isSnoozed, sender, titel, body, date }) => {
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

  return <div className={`mail ${isRead ? 'read' : 'unread'}`}>
    <ImgButton svg={'../../../../select.png'} alt={'select'} />
    <ImgButton svg={`../../../../star${starred ? '-selected' : ''}.png`}
      alt={starred ? 'Starred' : 'Not Starred'} />
    <ImgButton svg={`../../../../important${important ? '-selected' : ''}.png`}
      alt={important ? 'Mark Important' : 'Unmark Important'} />
    <div>{sender?.name}</div>
    <div className="preview">{titel} - {body}</div>
    <div className='actions'>
      <ImgButton svg={'../../../../delete.png'} alt={'Delete'} />
      <ImgButton svg={`../../../../mail-${isRead ? 'un' : ''}read.png`} />
      <ImgButton svg={`../../../../snoozed${isSnoozed ? '-selected' : ''}.png`} />
    </div>
    <div className='date'>{formatMailDate(date)}</div>
  </div>;
};

export default Mail;