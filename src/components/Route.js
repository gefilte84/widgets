import React, { useEffect } from 'react';
import { useState } from 'react';

// Hver gang vi har eventlistener innenfor en komponent
// det betyr at vi må ha en useState Hook
// vi vil bare kjøre den en gang
// andre argument betyr tom array altså en kjøring
// ta alltid med en clean up funksjon for å fjerne eventlistener
// 
const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path
    ? children
    : null;
    };

export default Route;