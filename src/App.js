import React from 'react';
import Accordion from './components/Accordion';

// Statisk array
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framewrok'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library amond enginees'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
]

export default () => {
    return (
    <div>
        <Accordion items={items}/>
    </div>
    );
};