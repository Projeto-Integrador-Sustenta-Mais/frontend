import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Contato from './pages/contato/Contato';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto';
import ListaProduto from './components/produto/listagemProduto/ListagemProduto';
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import Carrinho from './pages/carrinho/Carrinho';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastrarCategorias" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/cadastrarProdutos" element={<FormularioProduto />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </AuthProvider>
      )
}

      export default App
