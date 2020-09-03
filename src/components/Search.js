import React, {useState, useEffect} from 'react';
import axios from 'axios';

// importerer axios for å koble mot Wikipedia API
// bruker hooks for å oppdatere state
const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    
    //useEffect funksjon. første arg er alltid arrow funksjon
    // andre argument forteller useEffect når koden skal kjøre
    // tre valg på andre argument
    //enten tom array(kjøre ved første render), 
    //tom andre argument(kjøre ved første render og hver eneste render etter det)
    //array med variabel(kjøre ved første og hver eneste render og IF data(input) er endret)
    //Wikipedia API
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });

            setResults(data.query.search);
        };
        // sørger for at når siden først lastes inn så kommer det med engang
        // ved andre søk eller endring i søk så kikker timeout inn
        if (term && !results.length) {
            search();
        } else {
                    // hvis du ønsker at siden starter blank
        // endre linje 7 hvis du ønsker at noen skal vises første gang
        // siden lastes inn
        // setTimeout gjør at det ikke gjøres spørringer konstant mot wiki api
        // hvis bruker mindre tid enn 500ms eller 1000ms
        // når bruker ikke har skrevet på 500ms så blir det sent en api request
        // delayed resultat
        return () => {
            clearTimeout(timeoutId);
            };
        }

        
    }, [term]);
    // map funksjon for å hente resultatet i en array og bygger ut en liste
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        // for å gå til en spesifikk side i wikipedia
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/*NB! aldri bruk denne koden for formattering av html. kun demo*/}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                    {/*{result.snippet}*/}
                </div>
            </div>
        );
    });



    //søkefelt
    return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input 
                value={term}
                onChange={e => setTerm(e.target.value)}
                className="input" />
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
    </div>
    );
};

export default Search;