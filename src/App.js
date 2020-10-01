import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';


// Statisk array
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framewrok'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }


];

const options = [
{
    label: 'The Color Red',
    value: 'red'
},
{
    label: 'The Color Green',
    value: 'green'
},
{
    label: 'A Shade of Blue',
    value: 'blue'
}

];

// Route mappings. Navigasjon for appen
// Alternativ metode for navigasjon
// Det er opprettet en egen route komponent for å styre
// navigasjonen.
/*
const showAccordion = () => {
    if (window.location.pathname === '/'){
        return <Accordion items={items} />
    }
};

const showList = () => {
    if (window.location.pathname === '/list'){
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown'){
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate'){
        return <Translate />;
    }
};
*/





// Målet er å gi props til dropdown
// App component
// onSelectedChange er event handler, callback
// on noe change
// når du router på denne måten så blir accordion en child 
// og child kan du bruke som referanse i route klassen
export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
    <div>
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown 
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
    </div>
    );
};