import { useContext } from "react";
import AuthContext from '../context/AuthContext'

const useUseAuth = ()=>  useContext(AuthContext)

export default useUseAuth