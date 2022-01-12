import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";

import PageNotFound from '../PageNotFound/PageNotFound'
import ProductList from '../../ProductsArea/ProductList/ProductList'
import SuccessStories from '../../SuccessStoriesArea/SuccessStories/SuccessStories'
import About from '../../AboutArea/About/About'
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";

function Routing(): JSX.Element {
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/products" element={<ProductList/>} />
          <Route path="/success-stories" element={<SuccessStories/>} />
          <Route path="/about" element={<About/>} />
          
          <Route path="/employees" element={<EmployeesList/>} />

          <Route path="/" element={<Navigate to="/home"/>}  />

          <Route path="*" element={<PageNotFound/>} />

        </Routes>
    );
}

export default Routing;
