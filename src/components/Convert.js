import React, { useState, useEffect } from 'react';
import axios from 'axios';
// useEffect gjør at når du bruker bytter hva han vil oversette
// og den nye teksten så kjører vi useEffect for å oppdatere state
// lage debouncedText som gjør at vi ikke snakker med API hver gang vi skriver en bokstav
// vi setter inn en buffer for å hindre konstant request til API
// API kan koste penger pr request!
const Convert = ( {language, text} ) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    // denne useEffect er for å gi buffer på 500ms
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        // denne kjører når vi har skrevt en ny bokstav før 500ms
        // sånn at vi har nye 500ms
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);
    // denne på slutten gjør at vi kjører 
    // text igjen hver gang text props endrer seg
    // derfor legger vi text på slutten for å gi en ny text til props

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post
            ('https://translation.googleapis.com/language/translate/v2', 
            {}, 
            {
            params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            },
        }

        );

        setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
        
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
        );
};

export default Convert;