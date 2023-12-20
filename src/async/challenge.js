import fetch from "node-fetch";

const API = 'https://rickandmortyapi.com/api'

async function fetchData(API){
    const response = await fetch(API);
    const data = await response.json();
    return data.results;
}

const Solicitudes = async (API) => {
    try {
        const personajes = await fetchData(`${API}/character`);
        const personaje = personajes[0];

        console.log(personajes);
        console.log(personaje.name);
    } catch (error) {
        console.error(error);
    }
}
Solicitudes(API);