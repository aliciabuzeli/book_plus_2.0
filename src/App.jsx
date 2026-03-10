import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./components/Catalogo.jsx";
import CatalogoDeLivros from "./pages/CatalogoDeLivros.jsx";
import DetalhesDoLivro from "./pages/DetalhesDoLivro.jsx";
import Login from "./pages/Login.jsx";
import PaginaDeCadastro from "./pages/PaginaDeCadastro.jsx";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada.jsx";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogo" element={<CatalogoDeLivros />} />
                    <Route path="/detalhes/:id" element={<DetalhesDoLivro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<PaginaDeCadastro />} />
                    <Route path="*" element={<PaginaNaoEncontrada />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}