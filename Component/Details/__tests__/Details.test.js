import renderer from 'react-test-renderer';
import React from 'react';
import Details from '../Details';

describe('Details', () => {
  it('should match with old snapshot', () => {
    const render = renderer.create(<Details />).toJSON();
    expect(render).toMatchSnapshot();
  });
});
