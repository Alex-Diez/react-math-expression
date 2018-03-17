import * as React from 'react';

import { AstNode, Const, Operation } from '../model/parser';

class Leaf extends React.Component<{ value: number }, {}> {
  render() {
    return (
      <div className="ast-node btn btn-lg btn-success block rounded-circle">{this.props.value}</div>
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
        <div className="ast-node btn btn-lg btn-outline-primary block rounded-circle">{operand}</div>
        <ul>
          {children && children.map((node, index) => <li key={index}>{this.renderSubNode(node)}</li>)}
        </ul>
      </ul>
    );
  }
}

class AstTree extends React.Component<{tree?: AstNode}, {}> {
  render() {
    let tree: AstNode | undefined = undefined;
    if (this.props.tree && this.props.tree instanceof Const) {
       return (
        <div className="row justify-content-center">
          <div className="col"/>
          <div className="col-12">
            <Leaf value={this.props.tree.value} />
          </div>
          <div className="col" />
        </div>
       );
    } else if (this.props.tree && this.props.tree instanceof Operation) {
      const operation = this.props.tree;
      return (
        <Node
          operand={operation.operator}
          children={[operation.left, operation.right]}
        />
      );
    } else {
      return (
        <div className="row justify-content-center">
          <div className="col" />
          <div className="col-12">
            <div className="tree"><Leaf value={0} /></div>
          </div>
          <div className="col" />
        </div>
      );
    }
  }
}

export { AstTree };
