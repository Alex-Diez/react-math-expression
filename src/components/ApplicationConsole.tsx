import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { ConsoleScreen } from './ConsoleScreen';

const BUTTON_TYPES = {
  DIGIT: 'digit',
  PARENTHESIS: 'parenthesis',
  OPERATOR: 'operator'
};

const BUTTON_TYPES_BOOTSTRAP = {
  'digit': 'btn-warning',
  'parenthesis': 'btn-secondary',
  'operator': 'btn-info'
};

class ApplicationConsole extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: ''
    };

    this.click = this.click.bind(this);
  }

  click() {
    this.setState({ value: '1' });
  }

  createButton(buttonText: string, className: string) {
    return (
        <button
          id={`button-${buttonText}`}
          type="button"
          onClick={this.click}
          className={
            [
              className, 
              BUTTON_TYPES_BOOTSTRAP[className],
              'btn-lg',
              'btn',
              'col-3'
            ].join(' ')
          }
        >
          {buttonText}
        </button>
    );
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="col"/>
          <div className="col-md-2">
            <div className="row" role="group">
              {this.createButton('1', BUTTON_TYPES.DIGIT)}
              {this.createButton('2', BUTTON_TYPES.DIGIT)}
              {this.createButton('3', BUTTON_TYPES.DIGIT)}
              {this.createButton('+', BUTTON_TYPES.OPERATOR)}
            </div>
            <div className="row" role="group">
              {this.createButton('4', BUTTON_TYPES.DIGIT)}
              {this.createButton('5', BUTTON_TYPES.DIGIT)}
              {this.createButton('6', BUTTON_TYPES.DIGIT)}
              {this.createButton('-', BUTTON_TYPES.OPERATOR)}
            </div>
            <div className="row" role="group">
              {this.createButton('7', BUTTON_TYPES.DIGIT)}
              {this.createButton('8', BUTTON_TYPES.DIGIT)}
              {this.createButton('9', BUTTON_TYPES.DIGIT)}
              {this.createButton('×', BUTTON_TYPES.OPERATOR)}
            </div>
            <div className="row" role="group">
              {this.createButton('(', BUTTON_TYPES.PARENTHESIS)}
              {this.createButton('0', BUTTON_TYPES.DIGIT)}
              {this.createButton(')', BUTTON_TYPES.PARENTHESIS)}
              {this.createButton('÷', BUTTON_TYPES.OPERATOR)}
            </div>
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
