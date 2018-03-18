import { Const, Operation, Parser } from '../model/parser';

describe('Parser', () => {
  it('parses negative number', () => {
    expect(new Parser('–12').parse()).toEqual(new Const(-12));
  });

  it('parses addition', () => {
    expect(new Parser('4+3').parse()).toEqual(new Operation('+', new Const(4), new Const(3)));
  });

  it('parses subtraction', () => {
    expect(new Parser('4–9').parse()).toEqual(new Operation('–', new Const(4), new Const(9)));
  });

  it('parses multiplication', () => {
    expect(new Parser('3×6').parse()).toEqual(new Operation('×', new Const(3), new Const(6)));
  });

  it('parses division', () => {
    expect(new Parser('16÷4').parse()).toEqual(new Operation('÷', new Const(16), new Const(4)));
  });

  it('parses many operations', () => {
    expect(new Parser('4+5×3–15÷3').parse()).toEqual(
      new Operation(
        '–',
        new Operation(
          '+',
          new Const(4),
          new Operation(
            '×',
            new Const(5),
            new Const(3)
          )
        ),
        new Operation(
          '÷',
          new Const(15),
          new Const(3)
        )
      )
    );
  });

  it('parses expression with parenthesis', () => {
    expect(new Parser('(4+5)×3–(30–15)÷3').parse()).toEqual(
      new Operation(
        '–',
        new Operation(
          '×',
          new Operation(
            '+',
            new Const(4),
            new Const(5)
          ),
          new Const(3)
        ),
        new Operation(
          '÷',
          new Operation(
            '–',
            new Const(30),
            new Const(15)
          ),
          new Const(3)
        )
      )
    );
  });

  it('skips spaces when parsing negative number', () => {
    expect(new Parser('  –   12').parse()).toEqual(new Const(-12));
  });

  it('skips white spaces when parsing expression', () => {
    expect(new Parser('  (  4 + 5 ) × 3 – ( 30 – 15 ) ÷  3  ').parse()).toEqual(
      new Operation(
        '–',
        new Operation(
          '×',
          new Operation(
            '+',
            new Const(4),
            new Const(5)
          ),
          new Const(3)
        ),
        new Operation(
          '÷',
          new Operation(
            '–',
            new Const(30),
            new Const(15)
          ),
          new Const(3)
        )
      )
    );
  });
});
