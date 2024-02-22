import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

         if(loading){
            return <div>Loading...</div>
          }
          if(user){
            return children;
          }
          return <Navigate to="/login" />

        };

  export default PrivateRoutes;

  PrivateRoutes.propTypes = { // for props type .
    children: PropTypes.node 
  }
    