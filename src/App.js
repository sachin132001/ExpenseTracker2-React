import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './pages/index'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from"./pages/Home";
import Category from "./pages/Category";
import Vendor from "./pages/Vendor";
import Payment from "./pages/Payment";
import Transaction from "./pages/Transaction";
import Report from "./pages/Report";
import AddCategory from "./pages/AddCategory";
import UpdateCategory from "./pages/UpdateCategory";
import AddVendor from "./pages/AddVendor";
import UpdateVendor from "./pages/UpdateVendor";
import AddPayment from "./pages/AddPayment";
import UpdatePayment from "./pages/UpdatePayment"
import AddTransaction from "./pages/AddTransaction";
import UpdateTransaction from "./pages/UpdateTransaction"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/map-register" element={<Register/>}/>
        <Route path="/map-login" element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/map-view' element={<Category/>}/>
        <Route path='/map-Vview' element={<Vendor/>}/>
        <Route path='/map-Pview' element={<Payment/>}/>
        <Route path='/map-Tview' element={<Transaction/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/map-addCategory' element={<AddCategory/>}/>
        <Route path='/edit/:id' element={<UpdateCategory/>}/>
        <Route path='map-addVendor' element={<AddVendor/>}/>
        <Route path='/Vedit/:id' element={<UpdateVendor/>}/>
        <Route path='map-addPayment' element={<AddPayment/>}/>
        <Route path='/Pedit/:id' element={<UpdatePayment/>}/>
        <Route path='map-addTransaction' element={<AddTransaction/>}/>
        <Route path='/Tedit/:id' element={<UpdateTransaction/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
