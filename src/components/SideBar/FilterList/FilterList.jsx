import Filter from './Filter/Filter';

const FilterList = ({ isExpanded, setIsExpanded }) => {

  return <div className='filterlist'>
    <Filter svg={'../../../../../inbox.png'} titel={'Inbox'} count={'5'} />
    <Filter svg={'../../../../../star.png'} titel={'Starred'} />
    <Filter svg={'../../../../../snoozed.png'} titel={'Snoozed'} />
    <Filter svg={'../../../../../sent.png'} titel={'Sent'} />
    <Filter svg={'../../../../../drafts.png'} titel={'Drafts'} />
    <Filter svg={`../../../../../chevron-${isExpanded ? 'up' : 'down'}.png`}
      titel={isExpanded ? 'Less' : 'More'} onClick={() => setIsExpanded(!isExpanded)} />
    {isExpanded && <>
      <Filter svg={'../../../../../important.png'} titel={'Important'} />
      <Filter svg={'../../../../../scheduled.png'} titel={'Scheduled'} />
      <Filter svg={'../../../../../all-mail.png'} titel={'All Mail'} />
      <Filter svg={'../../../../../spam.png'} titel={'Spam'} />
      <Filter svg={'../../../../../delete.png'} titel={'Bin'} />
    </>}
  </div>;
};

export default FilterList;