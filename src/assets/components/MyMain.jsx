import articles from "./articles";

function MyMain() {

    return (

        <>
            <h1>Lista Articoli:</h1>


            {/* Creo Lista Articoli */}
            <ul>
                {articles.map((article, i) => (
                    <li key={i}>
                        {article}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MyMain