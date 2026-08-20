import Mail from './Mail/Mail';

const MailList = ({ mails }) => {
  return <div className="maillist">
    {mails.map((m) => <Mail {...m} />)}
  </div>;
};

export default MailList;