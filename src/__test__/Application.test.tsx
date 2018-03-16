import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { ConsoleScreen } from '../components/ConsoleScreen';
import { DigitConsole } from '../components/DigitConsole';
import { Application } from '../Application';

configure({ adapter: new ReactSixteenAdapter() });

describe('application console', () => {
  let applicationConsole: ReactWrapper;

  beforeEach(() => {
    applicationConsole = mount(<Application />);
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

  describe('keys behaviour', () => {
    it('clicking all keys enter each character once', () => {
      applicationConsole.find('.btn').forEach((button) => button.simulate('click'));

      const screen = applicationConsole.find(ConsoleScreen);

      expect(screen.html()).toContain('value="123+456-789×(0)÷"');
    });

    it('create one root node from single number', () => {
      applicationConsole.find('#button-1').simulate('click');

      const screen = applicationConsole.find(ConsoleScreen);

      const buildAstButton = screen.find('#build-ast');
      buildAstButton.simulate('click');

      const root = applicationConsole.find('.ast-node');

      expect(root.html()).toContain('1');
    });
  });
});
