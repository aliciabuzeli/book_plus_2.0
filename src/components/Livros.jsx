export default function Livros() {
    return (
        <div className="catalogo-livros">

            <h1>Catálogo de Livros</h1>

            <input type="text" placeholder="Buscar livro"  className="input" />

            <select>
                <option>Todos autores</option>
                <option>Helena</option>
                <option>Marcos</option>
                <option>Beatriz</option>
            </select>

            <select>
                <option>Todas categorias</option>
                <option>Poesia</option>
                <option>Romance</option>
                <option>Ensaios</option>
            </select>

            <div className="livros-bom">

                <div className="livro-top">

                    <img src="/src/img/unnamed.png" alt="" />

                    <div>
                        <h3>O Silêncio do Mar</h3>
                        <p>Autor: Helena</p>
                        <p>Categoria: Poesia</p>
                    </div>
                </div>

                <div className="livro-top">

                    <img src="/src/img/unnamed.png" alt="" />

                    <div>
                        <h3>Caminhos de Areia</h3>
                        <p>Autor: Marcos</p>
                        <p>Categoria: Romance</p>
                    </div>

                </div>

                <div className="livro-top">

                    <img src="/src/img/unnamed.png" alt="" />

                    <div>
                        <h3>Arquitetura da Alma</h3>
                        <p>Autor: Beatriz</p>
                        <p>Categoria: Ensaios</p>
                    </div>

                </div>

            </div>

        </div>
    )
}