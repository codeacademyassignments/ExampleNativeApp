import renderer from 'react-test-renderer';
import Details from '../Details';
import React from 'react';

describe('Details',()=>{
  it('should match with old snapshot',()=>{
    const render = renderer.create(<Details/>).toJSON();
    expect(render).toMatchSnapshot();
  })
})