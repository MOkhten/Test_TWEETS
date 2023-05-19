import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { NavLink } from 'react-router-dom';
// import Loader from 'components/Loader/Loader.js';

const Layout = () => {

    return (
      <div>
        <header>
     <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
                
          </nav>
        </header>
         <Suspense >
        <Outlet />
      </Suspense>
            </div>
)
};

export default Layout;