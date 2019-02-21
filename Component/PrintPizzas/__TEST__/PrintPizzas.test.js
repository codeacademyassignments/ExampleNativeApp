import renderer from 'react-test-renderer';
import PrintPizzas from '../PrintPizzas';
import React from 'react';
import {shallow} from 'enzyme';
import '../../../setupTests';

describe('PrintPizzas',()=>{
  it('should match old snapshot',()=>{
    const tree = renderer.create(<PrintPizzas/>);
    expect(tree).toMatchSnapshot();
  })
  it('should change state on text change in input',()=>{
    const wrapper = shallow(<PrintPizzas/>);
    expect(wrapper.instance().state.text).toEqual('');
    wrapper.find('TextInput').simulate('changeText','WOw!');
    expect(wrapper.instance().state.text).toEqual('WOw!');
  })
})

// describe('')