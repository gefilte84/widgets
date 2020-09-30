import React, { useState, useEffect, useRef } from 'react';

// vi gir options inn til dropdown funksjonen
// vi skal map over lista options og bygger opp en liste
// når du bruker addEvent så blir den hentet først så react sine onClick
// useRef gjør at vi kan gå direkte til et DOM element
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);
        // clean up av komponent
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);
    //empty array på slutten for at den kun kjører en gang
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null; // Null betyr ikke render noe
        }

        // denne onClick gjelder for hvert item i dropdown menyen
        return (
            <div 
            key={option.value} 
            className="item"
            onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });
    // JSX block. Hva som vises på skjermen
    // under className selection drop har du funksjonen
    // som gjør at når du trykker på den så toogler du menyen
    // onclick her styrer hele dropdown menyen
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                onClick={() => setOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Dropdown;