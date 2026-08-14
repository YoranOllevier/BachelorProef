import Mail from './Mail/Mail';

const MailList = () => {
  return <div className="maillist">
    <Mail starred={false} important={false} date={Date.now()} />
  </div>;
};

export default MailList;