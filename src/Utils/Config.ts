//Development and Production Configuration
//? Here I will add my backend server url: 
class Config {
      // public supportPhone = "031234567";
}

class DevelopmentConfig extends Config {
  productsUrl =  'http://localhost:3030/api/products/'
  productsImageUrl = 'http://localhost:3030/api/products/images/'
  employeeUrl = 'http://localhost:3030/api/employees/'
  employeeImageUrl = 'http://localhost:3030/api/employees/images/'

  registerUrl = 'http://localhost:3030/api/auth/register/'
  loginUrl = 'http://localhost:3030/api/auth/login/'
}

class ProductionConfig extends Config {

  // this is fake demo: 
    // productsUrl = 'http://www.northwind.com/api/products/'
    // productsImageUrl = 'http://www.northwind.com/api/products/images/'
    // employeeUrl = 'http://www.northwind.com/api/employees/'
    // employeeImageUrl = 'http://www.northwind.com/api/employees/images/'

    // registerUrl = 'http://www.northwind.com/api/auth/register/'
    // loginUrl = 'http://www.northwind.com/api/auth/login/'

    productsUrl =  'http://localhost:3030/api/products/'
    productsImageUrl = 'http://localhost:3030/api/products/images/'
    employeeUrl = 'http://localhost:3030/api/employees/'
    employeeImageUrl = 'http://localhost:3030/api/employees/images/'
  
    registerUrl = 'http://localhost:3030/api/auth/register/'
    loginUrl = 'http://localhost:3030/api/auth/login/'
}


// so i  either build an object of type delopment config ro productgion config : 
// node env holds your environment! so if you work locally on compouter it knows you arein dvelpment but if you put this program in clous a server it knows you in production...  
const config = process.env.NODE_ENV === 'development' ? new DevelopmentConfig() : new ProductionConfig()
// const config = process.env.NODE_ENV === 

export default config

// // dont forget to end it with a / 
//// dont forget to do = instead of : 
