const heading1 = React.createElement('h1',{id: 'heading1'}, 'This is first heading');
const heading2 = React.createElement('h1',{id: 'heading2'}, 'This is second heading');
const container = React.createElement('div', {id: 'container'}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);