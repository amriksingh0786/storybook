import { shallow } from 'enzyme';
import Navbar from "../Navbar"
test('renders learn react link', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.find('#title').text()).toBe('User List')

});