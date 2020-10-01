import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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




// Målet er å gi props til dropdown
// App component
// onSelectedChange er event handler, callback
// on noe change
export default () => {
    return (
    <div>
        {showAccordion()}
        {showList()}
        {showDropdown()}
        {showTranslate()}
    </div>
    );
};