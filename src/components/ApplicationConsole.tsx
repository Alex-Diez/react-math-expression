import * as React from 'react';
import { ConsoleScreen } from './ConsoleScreen';
import { Button } from './Button';
import { ButtonGroup, ButtonGroupProps, ButtonType } from './ButtonGroup';

interface ApplicationConsoleProp {}

interface ApplicationConsoleScope {
  value: string;
}

class ApplicationConsole extends React.Component<ApplicationConsoleProp, ApplicationConsoleScope> {
  constructor(props: ApplicationConsoleProp) {
    super(props);

    this.state = {
      value: ''
    };

    this.click = this.click.bind(this);
  }

  click(char: string) {
    this.setState((prevState, props) => ({ value: prevState.value + char }));
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="col"/>
          <div className="col-md-2">
            <ButtonGroup
              signs={['1', '2', '3', '+']}
              buttonTypes={[ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.OPERATOR]}
              buttonClick={this.click}
            />
            <ButtonGroup
              signs={['4', '5', '6', '-']}
              buttonTypes={[ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.OPERATOR]}
              buttonClick={this.click}
            />
            <ButtonGroup
              signs={['7', '8', '9', '×']}
              buttonTypes={[ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.DIGIT, ButtonType.OPERATOR]}
              buttonClick={this.click}
            />
            <ButtonGroup
              signs={['(', '0', ')', '÷']}
              buttonTypes={[ButtonType.PARENTHESIS, ButtonType.DIGIT, ButtonType.PARENTHESIS, ButtonType.OPERATOR]}
              buttonClick={this.click}
            />
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="col" />
          <div className="col-6">
            <ConsoleScreen text={this.state.value}/>
          </div>
          <div className="col" />
        </div>
      </form>
    );
  }
}

export { ApplicationConsole };
