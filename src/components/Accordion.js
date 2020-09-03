// useState er en hooks funksjon fra react lib.
// gir oss tilgang til state i en funksjonell komponent
import React, { useState } from 'react';


// legger items i component accordion
const Accordion = ({ items }) => {
    // initierer state
    const [activeIndex, setActiveIndex] = useState(null);

    // oppdaterer state når bruker klikker
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };
    // bruke hooks for å vite hva som er blitt klikket på
    
    
    
    // vi tar listen vi opprettet og render de ut som en liste med map funksjonen
    // item => gjør at vi skal hente JSX fra hver item
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
    // UI
    return (
        // legger inn react fragment for å ikke blande KEY i CSS styling
        <React.Fragment key={item.title}>
            <div 
            className={`title ${active}`}
            //eventhandler for klikk på item
            onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    );
});

return <div className="ui styled accordion">
    {renderedItems}
</div>;
};

export default Accordion;