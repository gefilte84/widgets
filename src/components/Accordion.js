import React from 'react';


// legger items i component accordion
const Accordion = ({ items }) => {
    // vi tar listen vi opprettet og render de ut som en liste med map funksjonen
    // item => gjør at vi skal hente JSX fra hver item
    const renderedItems = items.map((item) => {
    // UI
    return (
        // legger inn react fragment for å ikke blande KEY i CSS styling
        <React.Fragment key={item.title}>
            <div 
            className="title active"
            //eventhandler for klikk på item
            onClick={() => console.log('Title clicked')}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div classname="content active">
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