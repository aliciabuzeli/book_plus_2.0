import {Link} from "react-router-dom";

export default function PaginaLogin() {
    return (
        <div>

            <div className="login-container">

            <div className="login-card">

            <h2 className="entrar">Login</h2>

            <form className="login-form">

            <label>Email</label>
            <input
            type="email"
            placeholder="Digite seu email"
            />

            <label>Senha</label>
            <input
            type="password"
            placeholder="Digite sua senha"
            />

            <button type="submit">
            Entrar
            </button>

            </form>

            <p className="registro">
            Não tem conta? <Link to="/cadastro">Criar conta</Link>
            </p>

            </div>

            </div>
        </div>
    )
}