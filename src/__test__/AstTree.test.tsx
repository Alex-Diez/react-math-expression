import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { AstTree } from '../components/AstTree';

import { Const, Operation } from '../model/parser';

configure({ adapter: new ReactSixteenAdapter() });

describe('ast tree drawing', () => {
  it('should draw const node', () => {
    const ast = mount(<AstTree tree={new Const(4)}/>);

    const node = ast.find('.ast-node');

    expect(node.html()).toContain('4');
  });

  it('should draw tree with operation', () => {
    const ast = mount(<AstTree tree={new Operation('+', new Const(5), new Const(4))} />);

    const nodes = ast.find('.ast-node');

    const values = ['+', '5', '4'];

    for (let i = 0; i < nodes.length; i++) {
      expect(nodes.at(i).html()).toContain(values[i]);
    }
  });

  it('should draw with multiple operations', () => {
    const tree = new Operation(
      '-',
      new Operation('×', new Const(2), new Const(3)),
      new Const(5)
    );

    const ast = mount(<AstTree tree={tree} />);

    const nodes = ast.find('.ast-node');
    const values = ['-', '×', '2', '3', '5'];

    for (let i = 0; i < nodes.length; i++) {
      expect(nodes.at(i).html()).toContain(values[i]);
    }
  });
});
