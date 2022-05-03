import { Routes, Route} from "react-router-dom";
import PaginaPerfilUsua from "./pages/PaginaPerfilUsua"
import PaginaPerfilAdm from "./pages/PaginaPerfilAdm"
import PaginaPerguntaDeLogin from "./pages/PaginaPerguntaDeLogin"
import PaginaFormVendedor from "./pages/PaginaFormVendedor";
import PaginaFormUsuario from "./pages/PaginaFormUsuario";
import PaginaPerguntaDeCadastro from "./pages/PaginaPerguntaDeCadastro";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaFormHq from "./pages/PaginaFormHq";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial/>} />
      <Route path="/cadastra-vendedor" element={<PaginaFormVendedor/>}/>
      <Route path="/cadastra-hq" element={<PaginaFormHq/>}/>
      <Route path="/login-usuario-ou-vendedor" element={<PaginaPerguntaDeLogin/>}/>
      <Route path="/perfil-vendedor" element={<PaginaPerfilAdm/>}/>
      <Route path="/perfil-usuario" element={<PaginaPerfilUsua/>}/>
      <Route path="/cadastra-usuario" element={<PaginaFormUsuario/>}/>
      <Route path="/cadastro-usuario-ou-vendedor" element={<PaginaPerguntaDeCadastro />}/>
    </Routes>
  )
}

export default Router