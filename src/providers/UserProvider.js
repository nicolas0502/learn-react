import { useAuth } from "./AuthProvider"
import { useState, useEffect, useContext, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const {userLogged} = useAuth();
    const [userDados, setUserDados] = useState({})

    useEffect(() =>{
        fetch("http://localhost/LP2/api/"+userLogged.tipo+"/select-by-id/?id="+userLogged.id)
        .then((response) => response.json())
        .then((data) => setUserDados(data))
    
    }, [userLogged.id, userLogged.tipo, userDados])

    return (
		<UserContext.Provider value={[
			userDados,
            setUserDados
		]}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserDados = () => {
    const [userDados, setUserDados] = useContext(UserContext)
    return {userDados, setUserDados}
 }

export default UserProvider