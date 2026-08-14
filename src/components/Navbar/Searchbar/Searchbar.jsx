import ImgButton from '../../General/ImgButton/ImgButton';

const Searchbar = () => {
  return <div>
    <ImgButton svg={'../../../../search.svg'} alt="search" />
    <input type="text" placeholder="Search mail" />
    <ImgButton svg={'../../../../tune.svg'} alt="show search options" />

  </div>;
};

export default Searchbar;