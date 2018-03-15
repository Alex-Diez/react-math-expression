import * as React from 'react';

interface ButtonPorps {
  buttonText: string;
  onClick: () => void;
  buttonType: string;
}

const BUTTON_TYPES_BOOTSTRAP = {
  'digit': 'btn-warning',
  'parenthesis': 'btn-secondary',
  'operator': 'btn-info'
};

class Button extends React.Component<ButtonPorps, {}> {
  render() {
    return (
      <button
        id={`button-${this.props.buttonText}`}
        type="button"
        onClick={this.props.onClick}
        className={
          [
            this.props.buttonType,
            BUTTON_TYPES_BOOTSTRAP[this.props.buttonType],
            'btn-lg',
            'btn',
            'col-3'
          ].join(' ')
        }
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export { Button };
