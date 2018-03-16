import * as React from 'react';

import { AstNode, Const } from '../model/parser';

class AstTree extends React.Component<{tree?: AstNode}, {}> {
  render() {
    let tree: Const | undefined = undefined;
    if (this.props.tree && this.props.tree instanceof Const) {
       tree = this.props.tree;
    }
    return (
      <div className="row">
        <div className="col"/>
        <div className="col-1">
          <span className="ast-node btn btn-success block">{tree ? tree.value : 0}</span>
        </div>
        <div className="col" />
      </div>
    );
  }
}

export { AstTree };
