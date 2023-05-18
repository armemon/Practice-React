import { Outlet, NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate=useNavigate()
    const goToBlog = () => {
        navigate("/Contact")
    }
    const goToBack = () => {
     navigate(-1)   
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={() => goToBlog()}>Go to COntact</button>
      <button onClick={goToBack}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Front</button>
      <Outlet />{" "}
      {/*to Shared layout, for parent route, adding link to "/" will also add child component 
       otherwise nothing will show inside parent route*/}
    </>
  );
};

export default Layout;
