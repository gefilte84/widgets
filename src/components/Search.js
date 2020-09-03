import React, {useState, useEffect} from 'react';

// bruker hooks for å oppdatere state
const Search = () => {
    const [term, setTerm] = useState('');

    //useEffect funksjon. første arg er alltid arrow funksjon
    // andre argument forteller useEffect når koden skal kjøre
    // tre valg på andre argument
    //enten tom array(kjøre ved første render), 
    //tom andre argument(kjøre ved første render og hver eneste render etter det)
    //array med variabel(kjøre ved første og hver eneste render og IF data(input) er endret)
    useEffect(() => {
        console.log('baba');
    }, [term]);
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
    </div>
    );
};

export default Search;