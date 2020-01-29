import React from 'react';
import { shallow } from 'enzyme';
import Ship from './index';

it('renders prop.text', () => {
  const content = 'Love';
  const wrapper = shallow(<Ship text={content} />);
  expect(wrapper.text()).toBe(content);
});
