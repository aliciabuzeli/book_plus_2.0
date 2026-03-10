export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-conteudo">

                <div className="footer-esquerda">
                    <h2 className="footer-logo">BOOKPLUS</h2>

                    <p>
                        Sua livraria digital de confiança. Uma curadoria
                        minimalista das obras mais impactantes para o
                        seu crescimento.
                    </p>

                    <div className="icones">
                        <button>🔗</button>
                        <button>❤</button>
                    </div>
                </div>

                <div className="footer-links">

                    <div>
                        <h4>EXPLORAR</h4>
                        <a>Lançamentos</a>
                        <a>Mais Vendidos</a>
                        <a>E-books</a>
                    </div>

                    <div>
                        <h4>SUPORTE</h4>
                        <a>Ajuda</a>
                        <a>Envios</a>
                        <a>Trocas</a>
                    </div>

                    <div>
                        <h4>INSTITUCIONAL</h4>
                        <a>Sobre Nós</a>
                        <a>Contato</a>
                        <a>Privacidade</a>
                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2024 BOOK PLUS. TODOS OS DIREITOS RESERVADOS.</p>
                <p>DESENVOLVIDO COM ❤ EM SENAI</p>
            </div>

        </footer>
    )
}