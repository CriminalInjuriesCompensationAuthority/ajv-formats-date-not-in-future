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
* compareDates

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
Overriding an existing JSON Schema format.

```js

const ajvFormatsDateComparison = require('ajv-formats-date-comparison');

const Ajv = require('ajv');
const AjvKeywords = require('ajv-keywords');
const AjvErrors = require('ajv-errors');

const ajv = new Ajv({
    // custom options
});

// The AJV Keywords module can be used here for more complex validation of dates.
AjvKeywords(ajv, ['formatMinimum', 'formatMaximum']);

// override the existing format with your own validation rules.
// The AJV `.addFormat` method expects a validation function or an object with the shape below:
    // {
    //     validate: date => {
    //         const validatorService = createValidatorService();
    //         return validatorService.isValidDateRepresentation(date);
    //     },
    //     compare: (a, b) => {
    //         const validatorService = createValidatorService();
    //         return validatorService.compare(a, b);
    //     },
    //     async: false
    // }
// The `.compareDates` returns the object directly above.
// the `.validate` function is used by AJV to validate the value of the input. returns a Boolean.
// the `.compare` function is used by AJV, and AJV Keywords to compare the input to the defined `formatMaximum`, and `formatMinimum` values. Returns `-1`, `0`, or `1`.
ajv.addFormat('date-time', ajvFormatsDateComparison.compareDates);


```

You can now use these custom formats in your JSON schemas. Note: `"formatMaximum": "__TODAY__",` is a custom "token" parsed inside the provided `ajvFormatsDateComparison.compareDates.compare` function.

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q--when-was-the-crime-reported-to-police"],
    "additionalProperties": false,
    "properties": {
        "q--when-was-the-crime-reported-to-police": {
            "type": "string",
            "format": "date-time",
            "formatMaximum": "__TODAY__",
            "title": "When was the crime reported to the police?",
            "description": "For example, 28 2 2020. You can enter an approximate date.",
            "errorMessage": {
                "format":
                    "Enter the date the crime was reported to police and include a day, month and year",
                "formatMaximum":
                    "The date the crime was reported to the police must be today or in the past"
            }
        }
    }
```




When used with the `AJV Errors` module, you can return multiple errors depending on the situation. In the example above:
* AJV will throw an error if the `format` of the input does not pass validation. The validation for this is defined in the `ajvFormatsDateComparison.compareDates.validate` function. The error defined in `errorMessage.format` will be returned by AJV.
* AJV will throw an error if the input exceeds `formatMaximum`. The validation for this is defined in the `ajvFormatsDateComparison.compareDates.compare` function. The error defined in `errorMessage.formatMaximum` will be returned by AJV.

`formatMinimum` works in the same way. You can have both `formatMaximum` and `formatMinimum` in a JSON Schema.