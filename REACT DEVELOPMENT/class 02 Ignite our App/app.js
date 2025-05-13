    import React from 'react';
    import ReactDOM from 'react-dom/client';
    
    // const root = document.getElementById('root2');
    // const heading = document.createElement('h1');
    // heading.innerHTML='hello from js';
    // root.appendChild(heading);

    const element = React.createElement('h1', null, 'hello from react');
    const roots = ReactDOM.createRoot(document.getElementById('root'));
    roots.render(element);