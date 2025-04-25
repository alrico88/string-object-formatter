/**
 * Formatter class
 * @export
 * @class Formatter
 */
export default class Formatter {
  public startDelimiter: string;

  public endDelimiter: string;

  /**
   * Creates an instance of Formatter.
   *
   * @public
   * @param {string} [startDelimiter='{'] String to use as starting delimiter for element to replace
   * @param {string} [endDelimiter='}'] String to use as ending delimiter for element to replace
   * @memberof Formatter
   */
  public constructor(startDelimiter = "{", endDelimiter = "}", silent = false) {
    this.startDelimiter = startDelimiter;
    this.endDelimiter = endDelimiter;
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
   * @param {Record<string, string | number>} formatItems Object to define replace values
   * @example
   * const formatter = new Formatter();
   * formatter.format('example_{toReplace}', {'toReplace': 'replaced'})
   * // Thr result is 'example_replaced'
   * @returns {string} The replaced string
   * @memberof Formatter
   */
  public format(
    stringToFormat: string,
    formatItems: Record<string, string | number>,
  ): string {
    let str = `${stringToFormat}`;

    for (const [prop, value] of Object.entries(formatItems)) {
      const lookUp = this.getLookUpStr(prop);
      const hasExpression = str.includes(lookUp);
      if (hasExpression) {
        str = str.replace(new RegExp(lookUp, "gi"), `${value}`);
      }
    }

    return str;
  }
}
