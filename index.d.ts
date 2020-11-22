export = Formatter;
/**
 * Formatter Class
 *
 * @class Formatter
 */
declare class Formatter {
    /**
     * Enforces string type
     *
     * @static
     * @private
     * @param {*} str
     * @returns {void}
     * @memberof Formatter
     */
    private static checkType;
    /**
     * Creates an instance of Formatter.
     *
     * @param {string} [startDelimiter='{']
     * @param {string} [endDelimiter='}']
     * @memberof Formatter
     */
    constructor(startDelimiter?: string, endDelimiter?: string);
    startDelimiter: string;
    endDelimiter: string;
    /**
     * Formats string according to object
     *
     * @param {string} stringToFormat
     * @param {object} formatItems Ex.: {'toReplace': 'replaced'} turns 'example_{toReplace}' to 'example_replaced'
     * @returns {string}
     * @memberof Formatter
     */
    format(stringToFormat: string, formatItems: object): string;
}
