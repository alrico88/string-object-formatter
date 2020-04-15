# string-object-formatter

Inspired by python named formatter function, replace text inside a string based on object properties names and values.

### Example usage

#### Default delimiters

```
const Formatter = require('string-object-formatter');
const formatter = new Formatter();
const toFormat = 'My name is {firstName} {lastName}';
const formatted = formatter.format(toFormat, {firstName: 'John', lastName: 'Doe'});

// formatted is 'My name is John Doe'
```

#### Custom delimiters

```
const Formatter = require('string-object-formatter');
const formatter = new Formatter('{{', '}}');
const toFormat = 'My name is {{firstName}} {{lastName}}';
const formatted = formatter.format(toFormat, {firstName: 'John', lastName: 'Doe'});

// formatted is 'My name is John Doe'
```

<a name="Formatter"></a>

## Formatter

**Kind**: global class

- [Formatter](#Formatter)
  - [new Formatter()](#new_Formatter_new)
  - _instance_
    - [.format(stringToFormat, formatItems)](#Formatter+format) ⇒ <code>string</code>
  - _static_
    - [.Formatter](#Formatter.Formatter)
      - [new Formatter([startDelimiter], [endDelimiter])](#new_Formatter.Formatter_new)

<a name="new_Formatter_new"></a>

### new Formatter()

Formatter Class

<a name="Formatter+format"></a>

### formatter.format(stringToFormat, formatItems) ⇒ <code>string</code>

Formats string according to object

**Kind**: instance method of [<code>Formatter</code>](#Formatter)

| Param          | Type                | Description                                                                       |
| -------------- | ------------------- | --------------------------------------------------------------------------------- |
| stringToFormat | <code>string</code> |                                                                                   |
| formatItems    | <code>object</code> | Ex.: {'toReplace': 'replaced'} turns 'example\_{toReplace}' to 'example_replaced' |

<a name="Formatter.Formatter"></a>

### Formatter.Formatter

**Kind**: static class of [<code>Formatter</code>](#Formatter)  
<a name="new_Formatter.Formatter_new"></a>

#### new Formatter([startDelimiter], [endDelimiter])

Creates an instance of Formatter.

| Param            | Type                | Default                                |
| ---------------- | ------------------- | -------------------------------------- |
| [startDelimiter] | <code>string</code> | <code>&quot;&#x27;{&#x27;&quot;</code> |
| [endDelimiter]   | <code>string</code> | <code>&quot;&#x27;}&#x27;&quot;</code> |
