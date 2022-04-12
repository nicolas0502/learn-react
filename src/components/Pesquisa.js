import "./Pesquisa.css"
import search from "../assets/icons/search.svg"

const Pesquisa = () => {
    return (
        <form className="pesquisa">
            <button className="button"><img src={search} alt="Lupa de pesquisa" className="lupa" /></button>
            <input type="text" className="campo" placeholder="Pesquisar Produto"></input>
        </form>
    )
}

export default Pesquisa