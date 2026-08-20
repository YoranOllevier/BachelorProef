import MailList from '../../components/MailList/MailList';
import { getAll } from '../../api';
import AsyncData from '../../components/General/AsyncData/AsyncData';
import useSWR from 'swr';

const Mailbox = () => {

  var filters = window.location.hash.split('#').filter(Boolean);
  var url = 'inbox';
  for (let filter of filters) {
    switch (filter) {
      case 'inbox': url = 'inbox'; break;
      case 'all': url = 'all'; break;
      case 'sent': url = 'sent'; break;
      case 'drafts': url = 'drafts'; break;
    }
  }

  const { data = [], error, isLoading } = useSWR(`mails/${url}/self`, getAll);

  return (
    <AsyncData loading={isLoading} error={error} >
      <MailList mails={data.mails} />
    </AsyncData>
  );
};

export default Mailbox;