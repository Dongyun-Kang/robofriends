import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expec to render Card component', () => {
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  expect(shallow(<CounterButton />).length).toEqual(1)
})

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  // test shouldComponentUpdate
  expect(wrapper.instance().shouldComponentUpdate({}, { count: 0 })).toEqual(false)
  expect(wrapper.instance().shouldComponentUpdate({}, { count: 1 })).toEqual(true)
  // const comp = shallow(<Comp {...props} />)
  // const shouldUpdate = comp.instance().shouldComponentUpdate(nextProps, nextState)
  // expect(shouldUpdate).toBe(true/false)

  // test click
  expect(wrapper.state()).toEqual({ count: 0 });
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 4 });
  wrapper.find('[id="counter"]').simulate('keypress')
  expect(wrapper.state()).toEqual({ count: 4 });
  expect(wrapper.instance().props.color).toEqual('red')
  // expect(wrapper.props().color).toEqual('red')
})
