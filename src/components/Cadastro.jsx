import {Link} from "react-router-dom";

export default function Cadastro() {
    return (
        <div>
            <div className="cadastro-container">

                <div className="cadastro-card">

                    <h2 className="criar-conta">Criar Conta</h2>
                    <p className="subtitulo">Preencha os dados para se cadastrar</p>

                    <form className="cadastro-form">

                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                        />

                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Crie uma senha"
                        />


                        <button type="submit"><Link to="/catalogo">Cadastrar</Link></button>

                    </form>

                    <p className="login-link">
                        Já tem conta? <Link to="/login" href="#">Entrar</Link>
                    </p>

                </div>

            </div>
        </div>
    )
}