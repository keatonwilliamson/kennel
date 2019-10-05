import React from 'react';
import ReactDOM from 'react-dom';
import Kennel from './components/Kennel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kennel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
