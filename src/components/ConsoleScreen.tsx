import * as React from 'react';

interface ConsoleScreenProps {
  text: string;
  onCreateAst: () => void;
}

class ConsoleScreen extends React.Component<ConsoleScreenProps, {}> {
  render() {
    return (
      <div className="row">
        <div className="col" />
        <div className="col-6">
        <div className="row">
          <div className="input-group mb-8">
            <input 
              type="text"
              className="form-control"
              value={this.props.text}
            />
            <div className="input-group-append">
              <button
                id="build-ast"
                type="button"
                className="input-group-text"
                onClick={this.props.onCreateAst}
              >
                Build AST
              </button>
            </div>
          </div>
          </div>
        </div>
        <div className="col" />
      </div>
    );
  }
}

export { ConsoleScreen, ConsoleScreenProps };
