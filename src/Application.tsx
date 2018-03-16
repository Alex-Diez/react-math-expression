import * as React from 'react';

import { DigitConsole } from './components/DigitConsole';
import { ConsoleScreen } from './components/ConsoleScreen';
import { AstTree } from './components/AstTree';
import { AstNode, Parser } from './model/parser';

class Application extends React.Component<{}, {expression: string, tree?: AstNode}> {
  constructor (props: {}) {
    super(props);

    this.state = {
      expression: '',
      tree: undefined
    };
    
    this.click = this.click.bind(this);
    this.createAst = this.createAst.bind(this);
  }

  render() {
    return (
      <div className="container">
        <form>
        <DigitConsole onClick={this.click}/>
        <ConsoleScreen 
          text={this.state.expression}
          onCreateAst={this.createAst}
        />
        <AstTree tree={this.state.tree}/>
      </form>
      </div>
    );
  }

  private click(char: string): void {
    this.setState((prevState, props) => ({ expression: prevState.expression + char }));
  }

  private createAst(): void {
    const parser = new Parser(this.state.expression);
    const tree = parser.parse();
    this.setState((prevState, props) => ({ tree: tree }));
  }
}

export { Application };
