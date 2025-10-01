import articles from "./articles";
import { useState } from "react";

function MyMain() {

    const [contentInput, setContentInput] = useState("");   // Stato che memorizza il contenuto dell'input
    const [articoli, setArticoli] = useState(articles);     // Stato che contiene la lista degli articoli (inizialmente quelli importati)

    return (

        <main>

            <div className="container"> 
                <h1>
                    Lista Articoli
                </h1>

                <form onSubmit = {aggiungiArticolo} >
                    <input
                        className="input-titolo"
                        type="text" 
                        value={contentInput}
                        placeholder="Inserisci un titolo..."
                        onChange={(event) => setContentInput(event.target.value)} /* All'input aggiorna lo stato */
                    />
                    <button type="submit" className="btn"> + </button>
                </form>

                {/* Creo Lista Articoli */}
                <ul>
                    {articoli.map((articolo, i) => (
                        <li key={i}>
                            {/* Icona cestino */}
                            <i
                                className="fa-solid fa-trash icona-cestino"
                                onClick={function () {
                                    eliminaArticolo(i)
                                }}>
                            </i>

                            {/* Articolo Lista */}
                            {articolo}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )

    /***************
        FUNZIONI 
    ****************/
    /* Funzione che aggiunge un nuovo articolo all'elenco  */
    function aggiungiArticolo() {
        blockDefaultForm();                         // Chiamata funzione per bloccare il refresh della pagina

        if(contentInput !== "") {
            const bufferAggiungi = [...articoli]        // Copia array 
            bufferAggiungi.push(contentInput.trim());   // Aggiungo articolo all'array eliminando gli spazi vuoti ai lati
            setArticoli(bufferAggiungi);                // Aggiorno ls variabile di stato stato con la nuova lista
            setContentInput("");                        // Svuoto l'input
        }
    }

    /* Funzione che blocca il refresh della pagina */
    function blockDefaultForm() {
        event.preventDefault();
    }

    /* Funzione che elimina un articolo dall'elenco  */
    function eliminaArticolo(indexEliminato) {

        const bufferElimina = articoli.filter((articolo, indexCorrente) => {
            return indexCorrente !== indexEliminato;    // Crea nuovo array escludendo l'articolo il cui indice corrisponde a quello eliminato
        });
        setArticoli(bufferElimina);                     // Aggiorna la lista degli articoli
    }

}

export default MyMain