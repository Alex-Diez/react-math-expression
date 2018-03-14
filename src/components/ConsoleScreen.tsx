import * as React from 'react';

export interface ConsoleScreenProps {
  text: string;
}

class ConsoleScreen extends React.Component<ConsoleScreenProps, {}> {
  render() {
    return (
      <div className="row">
        <div className="input-group mb-8">
          <input type="text" className="form-control" value={this.props.text} />
          <div className="input-group-append">
            <button className="input-group-text">evaluate</button>
          </div>
        </div>
      </div>
    );
  }
}

export { ConsoleScreen };
