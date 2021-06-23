import {screen } from '@testing-library/react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);

  console.log(wrapper)

});
