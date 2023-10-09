import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Search from './Search';
import DropDownLogin from './DropDownLogin';
import DropDownLogout from './DropDownLogout';
import { useCart } from '../context/CartContext';
const Header = () => {
  const[darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const[searchName,setSearchName]=useState(false);
  const[dropdown,setDropdown]=useState(false);
  const navigate=useNavigate();
  const{cartList}=useCart();
  const t=(sessionStorage.getItem("token"));
  useEffect(()=>{
    localStorage.setItem("darkMode",JSON.stringify(darkMode));
            if(darkMode)
            {
              
                document.documentElement.classList.add("dark");
            }
            else{
                document.documentElement.classList.remove("dark");
            }
  },[darkMode])
    return (
    <div className="header" style={{height:'80px',borderBottomWidth:'3px'}}>
        
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center">
            <img src={logo} className="h-9 mr-3" alt="E-BookStore Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BookStore</span>
        </Link>
        <div lassName="flex items-center relative">
            <span type="button" onClick={()=>setDarkMode(!darkMode)}  className='btn bi bi-gear-wide-connected me-4 hover:cursor-pointer'></span>
            <span onClick={()=>setSearchName(!searchName)} className='btn bi bi-search me-4 hover:cursor-pointer'></span>
            <span onClick={()=>navigate("/CartPage")} className=' btn cursor-pointer bi bi-cart-fill me-4 relative fill-blue-500' >
            <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -right-2 dark:border-gray-900">{cartList.length}</span>
            </span>
            <span onClick={()=>setDropdown(!dropdown)} className='btn bi bi-person-circle me-'></span>
           { dropdown &&(t?<DropDownLogin setDropdown={setDropdown}/>:<DropDownLogout setDropdown={setDropdown}/>)}
        </div>
    </div>
</nav>

   { searchName && <Search setSearchName={setSearchName}/>}
    </div>
  )
};

export default Header
