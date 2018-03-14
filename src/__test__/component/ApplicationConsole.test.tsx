import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { ConsoleScreen } from '../../components/ConsoleScreen';
import { ApplicationConsole } from '../../components/ApplicationConsole';

configure({ adapter: new ReactSixteenAdapter() });

describe('application console', () => {
  let applicationConsole: ReactWrapper;

  beforeEach(() => {
    applicationConsole = mount(<ApplicationConsole/>);
  });

  describe('content', () => {
    it('should contain ten buttons for digits', () => {
      expect(applicationConsole.find('.digit').length).toBe(10);
    });

    it('should contain four buttons for algebraic operators', () => {
      expect(applicationConsole.find('.operator').length).toBe(4);
    });

    it('should contain two buttons for parenthesis', () => {
      expect(applicationConsole.find('.parenthesis').length).toBe(2);
    });
  });

  it('adds text to screen when click on any application button', () => {
    const buttonOne = applicationConsole.find('#button-1');
    buttonOne.first().simulate('click');

    const screen = applicationConsole.find(ConsoleScreen);

    expect(screen.html()).toEqual('<input type="text" value="1">');
  });
});
