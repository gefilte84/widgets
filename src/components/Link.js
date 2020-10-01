import React from 'react';

// dette gjør at når en bruker skifter mellom
// sidene så lastes ikke alle komponentene inn
// navEvent forteller link at URL er endret
const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey){
            return;
        };
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
    <a onClick={onClick}className={className} href={href}>
    {children}
    </a>
    );
};

export default Link;