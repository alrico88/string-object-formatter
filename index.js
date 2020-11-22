/**
 * Formatter Class
 *
 * @class Formatter
 */
class Formatter {

  /**
   * Creates an instance of Formatter.
   *
   * @param {string} [startDelimiter='{']
   * @param {string} [endDelimiter='}']
   * @memberof Formatter
   */
  constructor(startDelimiter = '{', endDelimiter = '}') {
    this.startDelimiter = startDelimiter;
    this.endDelimiter = endDelimiter;
  }

  /**
   * Enforces string type
   *
   * @static
   * @private
   * @param {*} str
   * @returns {void}
   * @memberof Formatter
   */
  static checkType(str) {
    if (typeof str !== 'string') {
      throw new Error('Only strings ar supported');
    }
  }

  /**
   * Formats string according to object
   *
   * @param {string} stringToFormat
   * @param {object} formatItems Ex.: {'toReplace': 'replaced'} turns 'example_{toReplace}' to 'example_replaced'
   * @returns {string}
   * @memberof Formatter
   */
  format(stringToFormat, formatItems) {
    Formatter.checkType(stringToFormat);
    let str = `${stringToFormat}`;
    Object.entries(formatItems).forEach(([prop, value]) => {
      const lookUp = this.startDelimiter + prop + this.endDelimiter;
      const hasExpression = str.indexOf(lookUp) !== -1;
      if (hasExpression) {
        str = str.replace(new RegExp(lookUp, 'gi'), value);
      } else {
        // eslint-disable-next-line no-console
        console.log(`Expression not found`, prop);
      }
    });
    return str;
  }
}

module.exports = Formatter;
