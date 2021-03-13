import Formatter from '../src';

const textToFormatDefault = 'This {a} should {b} {c}';
const textToFormatCustom = 'This {{a}} should {{b}} {{c}}';
const result = 'This test should execute successfully';

const formatterObj = {
  a: 'test',
  b: 'execute',
  c: 'successfully',
};

describe('Test replacing methods', () => {
  test('Replaces text based on default delimiters', () => {
    const formatter = new Formatter();
    expect(formatter.format(textToFormatDefault, formatterObj)).toEqual(result);
  });

  test('Replaces text based on custom delimiters', () => {
    const formatter = new Formatter('{{', '}}');
    expect(formatter.format(textToFormatCustom, formatterObj)).toEqual(result);
  });

  test('Replaces text based on default delimiters, all ocurrences', () => {
    const formatter = new Formatter();
    const str = textToFormatDefault.concat(textToFormatDefault);
    expect(formatter.format(str, formatterObj)).toEqual(result.concat(result));
  });
});

describe('Test error cases', () => {
  test('Not found expressions should not cause error', () => {
    const formatter = new Formatter();
    expect(() => {
      formatter.format(textToFormatDefault, {
        unexistingExpression: 'Hello',
      });
    }).not.toThrow();
  });
});
