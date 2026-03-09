export default function Catálogo() {
    return (
        <section className="catalogo">

            <div className="catalogo-topo">
                <div>
                    <p className="novidades">NOVIDADES</p>
                    <h2>Destaques da Semana</h2>
                </div>

                <div className="ordenar">
                    <select>
                        <option>Ordenar por: Relevância</option>
                        <option>Mais recentes</option>
                        <option>Menor preço</option>
                    </select>
                </div>
            </div>

            <div className="livros">

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">POESIA</p>
                    <h3>O Silêncio do Mar</h3>
                    <span>Helena Vasconcelos</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">ROMANCE</p>
                    <h3>Caminhos de Areia</h3>
                    <span>Marcos Dutra</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">ENSAIOS</p>
                    <h3>Arquitetura da Alma</h3>
                    <span>Beatriz Muniz</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">MISTÉRIO</p>
                    <h3>O Último Inverno</h3>
                    <span>Ricardo Almeida</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">CRÔNICAS</p>
                    <h3>Crônicas da Capital</h3>
                    <span>Fernanda Costa</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">AVENTURA</p>
                    <h3>Além do Horizonte</h3>
                    <span>Juliano Mendes</span>
                </div>

                <div className="card">
                    <img src="//img/unnamed.png" alt="" />
                    <p className="categoria">PSICOLOGIA</p>
                    <h3>O despertar da mente</h3>
                    <span>Dra. Sônia Luz</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">CONTOS</p>
                    <h3>Fragmentos</h3>
                    <span>Carlos Eduardo</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">FICÇÃO</p>
                    <h3>Luz e Sombra</h3>
                    <span>Patrícia Lima</span>
                </div>

                <div className="card">
                    <img src="/img/unnamed.png" alt="" />
                    <p className="categoria">BOTÂNICA</p>
                    <h3>O Jardim Suspenso</h3>
                    <span>Mariana Rocha</span>
                </div>

            </div>

        </section>
    )
}