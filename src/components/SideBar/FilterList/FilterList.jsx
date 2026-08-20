import Filter from './Filter/Filter';
import { useNavigate } from 'react-router-dom';

const FilterList = ({ isExpanded, setIsExpanded }) => {
  const navigate = useNavigate();

  var setFilter = (filter) => {
    navigate('/');
    window.location.hash = `#${filter}`;
    window.location.reload();
  };

  return <div className='filterlist'>
    <Filter svg={'/inbox.png'} titel={'Inbox'} count={'5'} onClick={() => setFilter('inbox')} />
    <Filter svg={'/star.png'} titel={'Starred'} onClick={() => setFilter('starred')} />
    <Filter svg={'/snoozed.png'} titel={'Snoozed'} onClick={() => setFilter('snoozed')} />
    <Filter svg={'/sent.png'} titel={'Sent'} onClick={() => setFilter('sent')} />
    <Filter svg={'/drafts.png'} titel={'Drafts'} onClick={() => setFilter('drafts')} />
    <Filter svg={`/chevron-${isExpanded ? 'up' : 'down'}.png`} titel={isExpanded ? 'Less' : 'More'}
      onClick={() => setIsExpanded(!isExpanded)} />
    {isExpanded && <>
      <Filter svg={'/important.png'} titel={'Important'} onClick={() => setFilter('important')} />
      <Filter svg={'/scheduled.png'} titel={'Scheduled'} onClick={() => setFilter('scheduled')} />
      <Filter svg={'/all-mail.png'} titel={'All Mail'} onClick={() => setFilter('all')} />
      <Filter svg={'/spam.png'} titel={'Spam'} onClick={() => setFilter('spam')} />
      <Filter svg={'/delete.png'} titel={'Bin'} onClick={() => setFilter('trash')} />
    </>}
  </div>;
};

export default FilterList;