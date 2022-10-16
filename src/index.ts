interface FormatObject {
  [name: string]: string | number;
}

/**
 * Formatter class
 * @export
 * @class Formatter
 */
export default class Formatter {
  public startDelimiter: string;

  public endDelimiter: string;

  public silent: boolean;

  /**
   * Creates an instance of Formatter.
   *
   * @public
   * @param {string} [startDelimiter='{'] String to use as starting delimiter for element to replace
   * @param {string} [endDelimiter='}'] String to use as ending delimiter for element to replace
   * @param {boolean} [silent=false] Whether not to log not found expressions to console
   * @memberof Formatter
   */
  public constructor(startDelimiter = '{', endDelimiter = '}', silent = false) {
    this.startDelimiter = startDelimiter;
    this.endDelimiter = endDelimiter;
    this.silent = silent;
  }

  /**
   * Gets the string to replace
   *
   * @private
   * @param {string} str
   * @return {string}
   * @memberof Formatter
   */
  private getLookUpStr(str: string): string {
    return `${this.startDelimiter}${str}${this.endDelimiter}`;
  }

  /**
   * Formats string according to object
   *
   * @public
   * @param {string} stringToFormat The string to format
   * @param {object} formatItems Object to define replace values
   * @example
   * const formatter = new Formatter();
   * formatter.format('example_{toReplace}', {'toReplace': 'replaced'})
   * // Thr result is 'example_replaced'
   * @returns {string} The replaced string
   * @memberof Formatter
   */
  public format(stringToFormat: string, formatItems: FormatObject): string {
    let str = `${stringToFormat}`;

    Object.entries(formatItems).forEach(([prop, value]) => {
      const valueToReplaceWith = typeof value === 'number' ? value.toString() : value;
      const lookUp = this.getLookUpStr(prop);
      const hasExpression = str.includes(lookUp);
      if (hasExpression) {
        str = str.replace(new RegExp(lookUp, 'gi'), valueToReplaceWith);
      } else if (!hasExpression && !this.silent) {
        // eslint-disable-next-line no-console
        console.log('Expression not found', prop);
      }
    });

    return str;
  }
}
