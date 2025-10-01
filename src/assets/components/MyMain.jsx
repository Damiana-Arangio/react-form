import articles from "./articles";
import { useState } from "react";

function MyMain() {

    const [contentInput, setContentInput] = useState("");   // Stato che memorizza il contenuto dell'input
    const [articoli, setArticoli] = useState(articles);     // Stato che contiene la lista degli articoli (inizialmente quelli importati)

    return (

        <>
            <h1>Lista Articoli:</h1>

            <form onSubmit = {aggiungiArticolo} >
                <input 
                    type="text" 
                    value={contentInput}
                    placeholder="Inserisci un titolo..."
                    onChange={(event) => setContentInput(event.target.value)} /* All'input aggiorna lo stato */
                />
                <button type="submit"> + </button>
            </form>

            {/* Creo Lista Articoli */}
            <ul>
                {articoli.map((articolo, i) => (
                    <li key={i}>
                        {articolo}
                    </li>
                ))}
            </ul>
        </>
    )

    /***************
        FUNZIONI 
    ****************/
    /* Funzione che aggiunge un nuovo articolo all'elenco  */
    function aggiungiArticolo() {
        blockDefaultForm();

        const nuovoArray = [...articoli]        // Copia array 
        nuovoArray.push(contentInput.trim());   // Aggiungo articolo all'array eliminando gli spazi vuoti ai lati
        setArticoli(nuovoArray);                // Aggiorno ls variabile di stato stato con la nuova lista
        setContentInput("");                    // Svuoto l'input
    }

    /* Funzione che blocca il refresh della pagina */
    function blockDefaultForm() {
        event.preventDefault();
    }
}

export default MyMain