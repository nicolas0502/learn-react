import { useState, createContext, useContext, useEffect } from 'react';

const CarrinhoContext = createContext();

const CarrinhoProvider = ({children}) => {

	const [numItens, setNumItens] = useState(0);
    const array = [12,65]
	const [idItens, setIdItens] = useState(array);

	useEffect(() => {
		const carrinhodata = localStorage.getItem('carrinhoItens')
		let carrinho = JSON.parse(carrinhodata)
		if(carrinho){
			setIdItens(carrinho)
			setNumItens(carrinho.lenght)
		}
	},[])
	
	return (
		<CarrinhoContext.Provider value={[
			numItens,
			setNumItens,
			idItens,
            setIdItens
		]}>
			{children}
		</CarrinhoContext.Provider>
	)
}

export const useCarrinho = () => {
   const [numItens, setNumItens, idItens, setIdItens] = useContext(CarrinhoContext)
   return {numItens, setNumItens, idItens, setIdItens}
}

export default CarrinhoProvider