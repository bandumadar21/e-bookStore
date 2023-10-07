import { Navigate } from "react-router-dom";

const ProtectedCart = ({children}) => {
    const token=(sessionStorage.getItem("token"));
  return token? children:<Navigate to="/login"/>
}  
    export default ProtectedCart
