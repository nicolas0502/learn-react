import { Routes, Route} from "react-router-dom";
import PaginaPerfilUsua from "./pages/PaginaPerfilUsua"
import PaginaPerfilAdm from "./pages/PaginaPerfilAdm"
import PaginaPerguntaDeLogin from "./pages/PaginaPerguntaDeLogin"
import PaginaFormVendedor from "./pages/PaginaFormVendedor";
import PaginaFormUsuario from "./pages/PaginaFormUsuario";
import PaginaPerguntaDeCadastro from "./pages/PaginaPerguntaDeCadastro";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaFormHq from "./pages/PaginaFormHq";
import PaginaEditarHq from "./pages/PaginaEditarHq";
import PaginaLoginVendedor from "./pages/PaginaLoginVendedor";
import PaginaLoginUsuario from "./pages/PaginaLoginUsuario";
import PaginaProduto from "./pages/PaginaProduto";
import PaginaPagamento from "./pages/PaginaPagamento";
import PaginaCarrinho from "./pages/PaginaCarrinho";
import CarrinhoProvider from "./providers/CarrinhoProvider";
import AuthProvider from './providers/AuthProvider';
import UserProvider from './providers/UserProvider'
import PaginaEditarUsua from "./pages/PaginaEditarUsua";
import PaginaEditarVend from "./pages/PaginaEditarVend";
import PaginaPagamentoPix from "./pages/PaginaPagamentoPix";
import PaginaPagamentoBoleto from "./pages/PaginaPagamentoBoleto";

const Router = () => {
return (  
    <AuthProvider>
      <UserProvider>
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<PaginaInicial/>} />
          <Route path="cadastra-vendedor" element={<PaginaFormVendedor/>}/>
          <Route path="produto/:hqId" element={<PaginaProduto/>}/>
          <Route path="pagamento">
            <Route index element={<PaginaPagamento/>} />
            <Route path="pix" element={<PaginaPagamentoPix/>} />
            <Route path="boleto" element={<PaginaPagamentoBoleto/>} />
          </Route>
          <Route path="carrinho" element={<PaginaCarrinho/>}/>
          <Route path="login-usuario-ou-vendedor" element={<PaginaPerguntaDeLogin/>}/>
          <Route path="perfil-vendedor">
            <Route index element={<PaginaPerfilAdm />}/>
            <Route path="edit/:hqId" element={<PaginaEditarHq />} />
            <Route path="cadastra-hq" element={<PaginaFormHq/>}/>
          </Route>
          <Route path="perfil-usuario" element={<PaginaPerfilUsua/>}/>
          <Route path="edit-usuario" element={<PaginaEditarUsua/>}/>
          <Route path="edit-vendedor" element={<PaginaEditarVend/>}/>
          <Route path="cadastra-usuario" element={<PaginaFormUsuario/>}/>
          <Route path="cadastro-usuario-ou-vendedor" element={<PaginaPerguntaDeCadastro />}/>
          <Route path="login-vendedor" element={<PaginaLoginVendedor />}/>
          <Route path="login-usuario" element={<PaginaLoginUsuario />}/>
        </Routes>
      </CarrinhoProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default Router