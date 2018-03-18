import * as React from 'react';

import { ConsoleScreen } from './ConsoleScreen';
import { Button } from './Button';
import { ButtonGroup, ButtonGroupProps, ButtonType } from './ButtonGroup';
import { Parser, AstNode } from '../model/parser';

interface ApplicationConsoleProp {
  onClick: (char: string) => void;
}

interface ApplicationConsoleScope {
  value: string;
  root?: AstNode;
}

class DigitConsole extends React.Component<ApplicationConsoleProp, ApplicationConsoleScope> {
  constructor(props: ApplicationConsoleProp) {
    super(props);

    this.state = {
      value: '',
      root: undefined
    };

    this.createAst = this.createAst.bind(this);
  }

  createAst() {
    const parser = new Parser(this.state.value);
    this.setState((prevState, props) => ({ root: parser.parse() }));
  }

  render() {
    return (
        <div className="row justify-content-center">
          <div className="col"/>
          <div className="col-4">
            <ButtonGroup
              signs={['1', '2', '3', '+']}
              buttonTypes={[ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.OPERATOR]}
              buttonClick={this.props.onClick}
            />
            <ButtonGroup
              signs={['4', '5', '6', '–']}
              buttonTypes={[ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.OPERATOR]}
              buttonClick={this.props.onClick}
            />
            <ButtonGroup
              signs={['7', '8', '9', '×']}
              buttonTypes={[ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.OPERATOR]}
              buttonClick={this.props.onClick}
            />
            <ButtonGroup
              signs={['(', '0', ')', '÷']}
              buttonTypes={[ButtonType.PARENTHESIS, ButtonType.DIGIT, ButtonType.PARENTHESIS, ButtonType.OPERATOR]}
              buttonClick={this.props.onClick}
            />
          </div>
          <div className="col" />
        </div>
    );
  }
}

export { DigitConsole };
