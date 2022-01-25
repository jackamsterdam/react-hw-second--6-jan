import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";

import PageNotFound from '../PageNotFound/PageNotFound'
import ProductList from '../../ProductsArea/ProductList/ProductList'
import SuccessStories from '../../SuccessStoriesArea/SuccessStories/SuccessStories'
import About from '../../AboutArea/About/About'
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import UpdateProduct from "../../ProductsArea/UpdateProduct/UpdateProduct";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EmployeeDetails from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import AddEmployee from "../../EmployeesArea/AddEmployee/AddEmployee";
import UpdateEmployee from "../../EmployeesArea/UpdateEmployee/UpdateEmployee";
import ShoeOrder from '../../OrdersArea/ShoeOrder/ShoeOrder'

function Routing(): JSX.Element {
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/products" element={<ProductList/>} />

          <Route path="/products/details/:id" element={<ProductDetails/>} />
          <Route path="/employees/details/:id" element={<EmployeeDetails />} />


{/* pay attention not to write update but edit !!  */}
          <Route path="/employees/edit/:id" element={<UpdateEmployee />} />

          {/* Creating a route that will render the UpdateProduct component when the path is
          products/edit/:id. */}
          <Route path="/products/edit/:id" element={<UpdateProduct/>} />


          <Route path="/products/new" element={<AddProduct/>} />
          {/* Creating a route that will render the AddEmployee component when the path is
          /employees/new.  */}
          <Route path="/employees/new" element={<AddEmployee />} />

          <Route path="/shoeOrder" element ={<ShoeOrder/>} />

          <Route path="/success-stories" element={<SuccessStories/>} />
          <Route path="/about" element={<About/>} />
          
          <Route path="/employees" element={<EmployeesList/>} />

          <Route path="/" element={<Navigate to="/home"/>}  />

          <Route path="*" element={<PageNotFound/>} />

        </Routes>
    );
}

export default Routing;
