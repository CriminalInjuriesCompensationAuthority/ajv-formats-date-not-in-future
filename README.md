# AJV Formats Date Comparison

Takes a date and compares it to the present date.

This modules exports several different date comparison functions that can be added to your AJV instance using the `.addFormat` method available in AJV.

The available comparison functions are:

* isInFuture
* isNotInFuture
* isTodayOrInFuture
* isNotTodayOrInFuture
* isInPast
* isNotInPast
* isTodayOrInPast
* isNotTodayOrInPast
* isToday

## Usage

```js
// you can require the whole module, or choose individual exports. i.e.
// // requiring a single exported function.
// const ajvFormatIsTodayOrInPast = require('ajv-formats-date-comparison').isTodayOrInPast;
const ajvFormatsDateComparison = require('ajv-formats-date-comparison');

const Ajv = require('ajv');

const ajv = new Ajv({
    // custom options
});

ajv.addFormat('date-time--today-or-in-past', ajvFormatsDateComparison.isTodayOrInPast);

```

You can now use these custom formats in your JSON schemas.

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-when-did-the-crime-stop"],
    "additionalProperties": false,
    "properties": {
        "q-applicant-when-did-the-crime-stop": {
            "type": "string",
            "format": "date-time--today-or-in-past",
            "title": "When did it stop?",
            "description": "For example, 02 2020. You can enter an approximate date.",
        }
    }
}
```