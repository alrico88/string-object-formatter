# string-object-formatter

Inspired by python named formatter function, replace text inside a string based on object properties names and values.

### Example usage

#### Import it in your code

In a CommonJS environment

```javascript
const Formatter = require("string-object-formatter");
```

Using `import`

```javascript
import Formatter from "string-object-formatter";
```

#### Default delimiters

```javascript
const formatter = new Formatter();
const toFormat = "My name is {firstName} {lastName}";
const formatted = formatter.format(toFormat, {
  firstName: "John",
  lastName: "Doe",
});

// formatted is 'My name is John Doe'
```

#### Custom delimiters

```javascript
const formatter = new Formatter("{{", "}}");
const toFormat = "My name is {{firstName}} {{lastName}}";
const formatted = formatter.format(toFormat, {
  firstName: "John",
  lastName: "Doe",
});

// formatted is 'My name is John Doe'
```

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [endDelimiter](#enddelimiter)
- [startDelimiter](#startdelimiter)

### Methods

- [format](#format)

## Constructors

### constructor

\+ **new default**(`startDelimiter?`: _string_, `endDelimiter?`: _string_, `silent`: _boolean_): [_default_](#)

Creates an instance of Formatter.

**`memberof`** Formatter

#### Parameters:

| Name             | Type     | Default value |
| :--------------- | :------- | :------------ |
| `startDelimiter` | _string_ | '{'           |
| `endDelimiter`   | _string_ | '}'           |

**Returns:** [_default_](#)

## Properties

### endDelimiter

• **endDelimiter**: _string_

---

### startDelimiter

• **startDelimiter**: _string_

## Methods

### format

▸ **format**(`stringToFormat`: _string_, `formatItems`: FormatObject): _string_

Formats string according to object

**`memberof`** Formatter

#### Parameters:

| Name             | Type         | Description                                                                       |
| :--------------- | :----------- | :-------------------------------------------------------------------------------- |
| `stringToFormat` | _string_     | The string to format                                                              |
| `formatItems`    | FormatObject | Ex.: {'toReplace': 'replaced'} turns 'example\_{toReplace}' to 'example_replaced' |

**Returns:** _string_

The replaced string
