import { useState, useEffect } from "react";

export default function BuscarClube() {
    const [clubes, setClubes] = useState([]);
    const [erro, setErro] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.cartola.globo.com/clubes`);
            const data = await response.json();
            const clubesList = Object.values(data);
            setClubes(clubesList);
        } catch (error) {
            setErro(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="ListaClubes">
        <br />
            <h1>Clubes do Cartola FC:</h1>
          <br />  
            {erro && <p>Ocorreu um erro: {erro.message}</p>}
            <ul className="clubesAlinhamento">
            {clubes.slice(1).map((clube) => (
                    <li key={clube.id} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="Escudos"> 
                        <img
                            src={clube.escudos['60x60']}
                            alt={`${clube.nome} logo`}

                        />
                        <div className="Nomes">
                            <p>{clube.nome}</p>
                            <p>{clube.apelido}</p>
                        </div>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}


    

   
