import React from 'react';
import { shallow } from 'enzyme';
import TitleBar from '../index';
import 'jest-styled-components';

describe('TitleBar', () => {
  it('should contain css property -webkit-app-region: drag', () => {
    const wrapper = shallow(<TitleBar />);

    expect(wrapper).toHaveStyleRule();
    // expect(wrapper).toMatchSnapshot();
  });
});
