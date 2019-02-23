import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import PrintPizzas from '../PrintPizzas';
import '../../../setupTests';

describe('PrintPizzas', () => {
  it('should match old snapshot', () => {
    const tree = renderer.create(<PrintPizzas />);
    expect(tree).toMatchSnapshot();
  });
  it('should change state on text change in input', () => {
    const wrapper = shallow(<PrintPizzas />);
    expect(wrapper.instance().state.text).toEqual('');
    wrapper.find('TextInput').simulate('changeText', 'WOw!');
    expect(wrapper.instance().state.text).toEqual('WOw!');
  });
});

describe('translateToPizzas', () => {
  it('should generate pizzas as number of space into state', () => {
    const wrapper = shallow(<PrintPizzas />);
    expect(wrapper.instance().state.text).toEqual('');
    wrapper.find('TextInput').simulate('changeText', 'WOw!');
    expect(wrapper.instance().state.text).toEqual('WOw!');
    expect(wrapper.instance().translateToPizzas()).toEqual('🍕');
  });
});
