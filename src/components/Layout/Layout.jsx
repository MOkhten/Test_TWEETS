import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { NavLink } from 'react-router-dom';
import { Spiner } from 'components/Spiner';
import ButtonAppBar from '../AppBar';

const Layout = () => {

    return (
      <div>
        <ButtonAppBar>
     
        </ButtonAppBar>
         <Suspense fallback={<Spiner/>}>
        <Outlet />
      </Suspense>
            </div>
)
};

export default Layout;