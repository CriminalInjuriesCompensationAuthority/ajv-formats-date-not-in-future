'use strict';

const moment = require('moment');

const dateTokens = {
    TODAY: '__TODAY__',
    YESTERDAY: '__YESTERDAY__',
    TOMORROW: '__TOMORROW__'
};

function createValidatorService() {
    function isValidDateRepresentation(input) {
        return (
            // is it a JS date...
            moment.isDate(input) ||
            // or is it a Moment...
            moment.isMoment(input) ||
            // or is it array with numbers in it (an array of length 1, 2, or 3 can be converted to a date).
            (Array.isArray(input) && input.length < 4 && input.every(x => Number.isInteger(x))) ||
            // or is it a string representation of a date that can be parsed to a date?
            // don't use !! here as that will return false for the start of the unix
            // epoch (0), use isInteger instead.
            Number.isInteger(Date.parse(input))
        );
    }

    function isInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isAfter(currentDateTime, 'day');
    }

    function isNotInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isAfter(currentDateTime, 'day');
    }

    function isTodayOrInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isSameOrAfter(currentDateTime, 'day');
    }

    function isNotTodayOrInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isSameOrAfter(currentDateTime, 'day');
    }

    function isInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isBefore(currentDateTime, 'day');
    }

    function isNotInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isBefore(currentDateTime, 'day');
    }

    function isTodayOrInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isSameOrBefore(currentDateTime, 'day');
    }

    function isNotTodayOrInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isSameOrBefore(currentDateTime, 'day');
    }

    function isToday(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isSame(currentDateTime, 'day');
    }

    function compare(a, b) {
        // can it be parsed as a date?
        // is it in the predefined lookup table?
        if (
            isValidDateRepresentation(a) &&
            (isValidDateRepresentation(b) || Object.values(dateTokens).includes(b))
        ) {
            const dateA = moment(a);
            let dateB;

            // slight duplication. But opted for better readability
            // over a small optimisation.
            if (b === dateTokens.TODAY) {
                dateB = moment();
            } else if (b === dateTokens.YESTERDAY) {
                dateB = moment().subtract(1, 'days');
            } else if (b === dateTokens.TOMORROW) {
                dateB = moment().add(1, 'days');
            } else {
                dateB = moment(b);
            }
            if (dateA.isAfter(dateB, 'day')) {
                return 1;
            }
            if (dateA.isBefore(dateB, 'day')) {
                return -1;
            }
            return 0;
        }
        return false;
    }

    return Object.freeze({
        isValidDateRepresentation,
        isInFuture,
        isNotInFuture,
        isTodayOrInFuture,
        isNotTodayOrInFuture,
        isInPast,
        isNotInPast,
        isTodayOrInPast,
        isNotTodayOrInPast,
        isToday,
        compare
    });
}

module.exports = createValidatorService;
