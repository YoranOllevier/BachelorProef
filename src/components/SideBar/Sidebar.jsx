import { useState } from 'react';
import ImgButton from '../General/ImgButton/ImgButton';
import FilterList from './FilterList/FilterList';
import LabelList from './LabelList/LabelList';

const Sidebar = ({ isOpen }) => {
  const [isHover, setIsHover] = useState(false);
  const [fltrIsExp, setFltrIsExp] = useState(false);

  return <div className={`sidebar ${isHover || isOpen ? '' : 'collapsed'}`}
    onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
    <ImgButton svg='../../../../compose.png' className='compose' alt='compose'>
      <div className='text'>Compose</div>
    </ImgButton>
    <FilterList isExpanded={fltrIsExp} setIsExpanded={setFltrIsExp} />
    <div>
      <div className='labeltitle'>
        <div>Labels</div>
        <ImgButton svg={'../../../../add.png'} />
      </div>
      <LabelList />
    </div>
  </div>;

};

export default Sidebar;