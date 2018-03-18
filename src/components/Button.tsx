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
  private readonly styleClasses: string;

  constructor(props: ButtonPorps) {
    super(props);

    this.styleClasses = [
      this.props.buttonType,
      BUTTON_TYPES_BOOTSTRAP[this.props.buttonType],
      'btn-lg',
      'col-2',
      'btn'
    ].join(' ');
  }

  render() {
    return (
      <button
        id={`button-${this.props.buttonText}`}
        type="button"
        onClick={this.props.onClick}
        className={this.styleClasses}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export { Button };
