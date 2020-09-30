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
// Målet er å gi props til dropdown
// App component
// onSelectedChange er event handler, callback
// on noe change
export default () => {
    return (
    <div>
        <Translate />
    </div>
    );
};