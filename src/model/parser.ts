type AstNode = Const | Operation;

class Const {
  constructor(readonly value: number) {
  }
}

class Operation {
  constructor(readonly operator: string, readonly left: Const | Operation, readonly right: Const | Operation) {
  }
}

class Parser {

  private index: number = 0;
  private readonly numbers: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  private readonly lowOrderOperators: Array<string> = ['+', '–'];
  private readonly highOrderOperators: Array<string> = ['×', '÷'];

  constructor(private expression: string) {
  }

  parse(): AstNode {
    return this.parseExpression();
  }

  private parseExpression() {
    let arg = this.parseTerm();
    let operator;
    while ((operator = this.parseLowOrderOperator())) {
      this.skip();
      arg = new Operation(operator, arg, this.parseTerm());
    }
    return arg;
  }

  private parseLowOrderOperator(): string | undefined {
    const operator = this.parseOperator();
    return operator && this.lowOrderOperators.indexOf(operator) !== -1 ? operator : undefined;
  }

  private parseTerm(): AstNode {
    let arg = this.parseArgument();
    let operator;
    while ((operator = this.parseHighOrderOperator())) {
      this.skip();
      arg = new Operation(operator, arg, this.parseArgument());
    }
    return arg;
  }

  private parseHighOrderOperator(): string | undefined {
    const operator = this.parseOperator();
    return operator && this.highOrderOperators.indexOf(operator) !== -1 ? operator : undefined;
  }

  private skip() {
    this.index++;
  }

  private parseArgument(): AstNode {
    this.skipWhitespaces();
    return this.nextIsSubexpression() ? this.parseSubexpression() : this.parseConst();
  }

  private parseSubexpression() {
    this.skip();
    const node = this.parseExpression();
    this.skip();
    return node;
  }

  private nextIsSubexpression() {
    return this.expression[this.index] === '(';
  }

  private parseConst() {
    const sign = this.resolveSign();
    this.skipWhitespaces();
    const start = this.index;
    let end = this.index;
    while (end < this.expression.length && this.numbers.indexOf(this.expression[end]) !== -1) {
      end++;
    }
    this.index = end;
    return new Const(sign * Number(this.expression.slice(start, end)));
  }

  private resolveSign(): number {
    if (this.expression[this.index] === '–') {
      this.skip();
      return -1;
    }
    return 1;
  }

  private parseOperator(): string | undefined {
    this.skipWhitespaces();
    return this.index < this.expression.length ? this.expression[this.index] : undefined;
  }

  private skipWhitespaces() {
    while (this.currentCharIsWhitespace()) {
      this.skip();
    }
  }

  private currentCharIsWhitespace() {
    return this.expression[this.index] === ' ';
  }
}

export { Parser, Const, Operation, AstNode };
