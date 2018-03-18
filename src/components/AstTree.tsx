import * as React from 'react';

import { AstNode, Const, Operation } from '../model/parser';

class Leaf extends React.Component<{ value: number }, {}> {
  render() {
    return (
      <ul>
        <li>
          <div className="ast-node btn btn-lg btn-outline-dark block">{this.props.value}</div>
        </li>
      </ul>
    );
  }
}

class Node extends React.Component<{ operand: string, children: AstNode[] }, {}> {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col" />
        <div className="col-12">
          <div className="tree">
            {this.createNode(this.props.operand, this.props.children)}
          </div>
        </div>
        <div className="col" />
      </div>
    );
  }

  private renderSubNode(node: AstNode) {
    return (node instanceof Const) 
      ? this.createLeaf(node)
      : this.createNode(node.operator, [node.left, node.right]);
  }

  private createLeaf(node: Const) {
    return <Leaf value={node.value}/>;
  }

  private createNode(operand: string, children: AstNode[]): JSX.Element {
    return (
      <ul>
        <li>
          <div className="ast-node btn btn-lg btn-outline-primary block">{operand}</div>
          <ul>
            {children && children.map((node, index) => <li key={index}>{this.renderSubNode(node)}</li>)}
          </ul>
        </li>
      </ul>
    );
  }
}

class AstTree extends React.Component<{tree?: AstNode}, {}> {
  render() {
    const node = this.props.tree;
    if (node) {
      if (node instanceof Const) {
        return this.renderSingleLeaf(node.value);
      } else {
        return <Node operand={node.operator} children={[node.left, node.right]}/>;
      }
    } else {
      return this.renderSingleLeaf(0);
    }
  }

  private renderSingleLeaf(val: number) {
    return (
      <div className="row justify-content-center">
        <div className="col" />
        <div className="col-1">
          <div className="tree">
            <Leaf value={val} />
          </div>
        </div>
        <div className="col" />
      </div>
    );
  }
}

export { AstTree };
