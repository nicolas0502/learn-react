import { useState, createContext, useContext, useEffect } from 'react';

const CarrinhoContext = createContext();

const CarrinhoProvider = ({children}) => {

	const [idItens, setIdItens] = useState([]);

	useEffect(() => {
		const carrinhodata = localStorage.getItem('carrinhoItens')
		const carrinho = JSON.parse(carrinhodata)
		if(carrinho){
			setIdItens(carrinho)
		}
	},[idItens])
	
	return (
		<CarrinhoContext.Provider value={[
			idItens,
            setIdItens
		]}>
			{children}
		</CarrinhoContext.Provider>
	)
}

export const saveCarrinhoLocalStorage = (idItens) => {
	localStorage.setItem('carrinhoItens', JSON.stringify(idItens))
}

export const useCarrinho = () => {
   const [idItens, setIdItens] = useContext(CarrinhoContext)
   return {idItens, setIdItens}
}

export default CarrinhoProvider