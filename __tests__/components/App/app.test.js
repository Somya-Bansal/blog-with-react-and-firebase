import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../../../src/components/App/index'
import { shallow } from 'enzyme'

it('renders App without crashing', () => {
    shallow(<App/>);
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
});