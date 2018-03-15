import * as React from 'react';
import * as _ from 'lodash';

import { Button } from './Button';

enum ButtonType {
  DIGIT = 'digit',
  PARENTHESIS = 'parenthesis',
  OPERATOR = 'operator'
}

interface ButtonGroupProps {
  signs: string[];
  buttonTypes: ButtonType[];
  buttonClick: (char: string) => void;
}

class ButtonGroup extends React.Component<ButtonGroupProps, {}> {
  render() {
    const sings = this.props.signs;
    const buttonTypes = this.props.buttonTypes;
    return (
      <div className="row" role="group">
        {_.zip(sings, buttonTypes).map((item, index) => this.createButton(index, item[0], item[1]))}
      </div>
    );
  }

  private createButton(key: number, buttonText: string | undefined, className: ButtonType | undefined) {
    if (buttonText && className) {
      return (
        <Button
          key={key}
          buttonText={buttonText}
          onClick={() => this.props.buttonClick(buttonText)}
          buttonType={className}
        />
      );
    } else {
      return undefined;
    }
  }
}

export { ButtonGroup, ButtonGroupProps, ButtonType };
