
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/shared/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import ReqireAuth from './Pages/Login/RequireAuth/ReqireAuth';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import AddItems from './Pages/AddItems/AddItems';

function App() {
  return (
    <div className="main-app">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/items' element={<Products></Products>}></Route>
       <Route path='/itemsDetails/:itemsId' element={<ItemDetails></ItemDetails>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/checkout' element={
         <ReqireAuth>
           <CheckOut></CheckOut>
         </ReqireAuth>
       }></Route>
       <Route path='/additems' element={
         <ReqireAuth>
           <AddItems></AddItems>
         </ReqireAuth>
       }></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
