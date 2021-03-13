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

  /**
   * Creates an instance of Formatter.
   *
   * @public
   * @param {string} [startDelimiter='{'] String to use as starting delimiter for element to replace
   * @param {string} [endDelimiter='}'] String to use as ending delimiter for element to replace
   * @memberof Formatter
   */
  public constructor(startDelimiter = '{', endDelimiter = '}') {
    this.startDelimiter = startDelimiter;
    this.endDelimiter = endDelimiter;
  }

  /**
   * Formats string according to object
   *
   * @public
   * @param {string} stringToFormat The string to format
   * @param {object} formatItems Ex.: {'toReplace': 'replaced'} turns 'example_{toReplace}' to 'example_replaced'
   * @returns {string} The replaced string
   * @memberof Formatter
   */
  public format(stringToFormat: string, formatItems: FormatObject): string {
    let str = `${stringToFormat}`;

    Object.entries(formatItems).forEach(([prop, value]) => {
      const valueToReplaceWith = typeof value === 'number' ? value.toString() : value;
      const lookUp = this.startDelimiter + prop + this.endDelimiter;
      const hasExpression = str.includes(lookUp);
      if (hasExpression) {
        str = str.replace(new RegExp(lookUp, 'gi'), valueToReplaceWith);
      } else {
        // eslint-disable-next-line no-console
        console.log('Expression not found', prop);
      }
    });

    return str;
  }
}
