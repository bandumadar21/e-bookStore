import { Link } from "react-router-dom";
import { useEffect , useState} from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const DropDownLogin = ({setDropdown}) => {
   
    const navigate=useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        const token=sessionStorage.getItem("token");
        const cbid=sessionStorage.getItem("cbid");
        async function getDetails()
        {
            try{
                const requestOptions = {
                    method: "GET",
                    headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
                }
                const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, requestOptions);
                if(!response.ok){
                    throw { message: response.statusText, status: response.status }; //eslint-disable-line
                }
                const data = await response.json();
               
                data.email ? setUser(data) : handleLogout();
            } catch(error){
                toast.error(error.message, { closeButton: true, position: "bottom-center" });
            }            
        }
        getDetails(); 
      
    }, []); //eslint-disable-line
    function handleLogout()
    {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("cbid");
        setDropdown(false);
        navigate("/");
    }
  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout}  className="btn cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
};

export default DropDownLogin
