import {Link} from "react-router-dom";

export default function NaoEncontrado() {
    return (
        <div className="nao-encontrado">

            <h1>404</h1>

            <h2>Página não encontrada</h2>

            <p>
                A página que você está procurando não existe.
            </p>

            <Link to='/ ' >Voltar para a página inicial</Link>

        </div>

    )
}