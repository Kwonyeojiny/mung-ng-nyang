import Copyright from './Copyright';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#306FA4]">{children}</main>
      <Copyright />
    </div>
  );
};

export default Layout;
