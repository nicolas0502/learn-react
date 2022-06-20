import { useAuth } from "./AuthProvider"
import { useState, useEffect, useContext, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const {userLogged, isLogged} = useAuth();
    const [userDados, setUserDados] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        if(isLogged){
            fetch("http://localhost/LP2/api/"+userLogged.tipo+"/select-by-id/?id="+userLogged.id)
            .then((response) => response.json())
            .then((data) => { 
                setUserDados(data)
                setIsLoading(false)
            })
        }
    
    }, [userLogged.tipo, userLogged.id, isLogged])

    return (
		<UserContext.Provider value={[
			userDados,
            setUserDados,
            isLoading
		]}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserDados = () => {
    const [userDados, setUserDados, isLoading] = useContext(UserContext)
    return {userDados, setUserDados, isLoading}
 }

export default UserProvider