import MailList from '../../components/MailList/MailList';
import { getAll } from '../../api';
import AsyncData from '../../components/General/AsyncData/AsyncData';
import useSWR from 'swr';
import { useParams } from 'react-router';
import Footer from '../../components/Mail/Footer/Footer';
import Mail from '../../components/Mail/Mail/Mail';
import Navbar from '../../components/Mail/Navbar/Navbar';

const MailDetailed = () => {

  const { id } = useParams();
  const { data = {}, error, isLoading } = useSWR(`mails/${id}/self`, getAll);

  return (
    <AsyncData loading={isLoading} error={error} >
      <div className='mail-detailed'>
        <Navbar />
        <Mail {...data} />
        <Footer />
      </div>
    </AsyncData>
  );
};

export default MailDetailed;