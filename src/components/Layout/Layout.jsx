import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { NavLink } from 'react-router-dom';
import {Spiner} from 'components/Spiner';

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
         <Suspense fallback={<Spiner/>}>
        <Outlet />
      </Suspense>
            </div>
)
};

export default Layout;