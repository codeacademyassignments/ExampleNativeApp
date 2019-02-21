import renderer from 'react-test-renderer';
import HomeScreen from '../HomeScreen';
import React from 'react';
import {shallow} from 'enzyme';
import '../../../setupTests';


describe('HomeScreen',()=>{
  it('should match old snapshot',()=>{
    const tree = renderer.create(<HomeScreen navigation={{navigate: jest.fn()}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
describe('HomeScreen: reload',()=>{
  const navigateMock = jest.fn();
  const render = shallow(<HomeScreen navigation= {{navigate: navigateMock}}/>);
  it('should reset the state to starting state',()=>{
    expect(render.instance().state.reload).toEqual('');
    render.instance().onReload();
    expect(render.instance().state.reload).toEqual(''); 
  })
})
describe('HomeScreen: Buttons',()=>{
  const navigateMock = jest.fn();
  const render = shallow(<HomeScreen navigation= {{navigate: navigateMock}}/>);
  it('should call navigateMock with (Details,{})',()=>{
    render.find('[title="Greetings"]').simulate('press');
    expect(navigateMock).toHaveBeenCalledWith('Details');
  })
  it('should call navigateMock with (PrintPizzas,{})',()=>{
    render.find('[title="Explore"]').simulate('press');
    expect(navigateMock).toHaveBeenCalledWith('PrintPizzas');
  })
})