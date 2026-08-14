import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/SideBar/Sidebar';
import { useState } from 'react';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggleIsOpen={toggleIsOpen} />
      <Sidebar isOpen={isOpen} />
      <div className="content-general"><Outlet /></div>
      <ScrollRestoration />
    </div>
  );
};

export default Layout;