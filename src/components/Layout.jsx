import { Outlet } from 'react-router-dom';
import Copyright from './Copyright';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col gap-20 min-h-screen font-Jua bg-brand-blue">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Copyright />
    </div>
  );
};

export default Layout;
