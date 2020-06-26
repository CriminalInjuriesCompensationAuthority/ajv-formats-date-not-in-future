'use strict';

const moment = require('moment');

const dateTokens = {
    TODAY: '__TODAY__',
    YESTERDAY: '__YESTERDAY__',
    TOMORROW: '__TOMORROW__'
};

function createValidatorService() {
    /**
     * Checks to see if the given parameter is a workable date, or able to be parsed in to a workable date.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date
     *
     * @example
     *
     *     isValidDateRepresentation('2020-06-25')
     */
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

    /**
     * Checks to see if the given parameter is a date in the future.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date in the future. If it is not a valid date it will return false.
     *
     * @example
     *
     *     isInFuture('2020-06-25')
     */
    function isInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isAfter(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is a date not in the future.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date not in the future. If it is not a valid date it will return false.
     *
     * @example
     *
     *     isNotInFuture('2020-06-25')
     */
    function isNotInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isAfter(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is a date in the future or today's date.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date in the future or today's date. If it is not a valid date it will return false.
     *
     * @example
     *
     *     isTodayOrInFuture('2020-06-25')
     */
    function isTodayOrInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isSameOrAfter(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is a date not in the future and not today's date.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date not in the future and not today's date (i.e. in the past). If it is not a valid date it will return false.
     *
     * @example
     *
     *     isNotTodayOrInFuture('2020-06-25')
     */
    function isNotTodayOrInFuture(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isSameOrAfter(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is a date in the past.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date in the past. If it is not a valid date it will return false.
     *
     * @example
     *
     *     isInPast('2020-06-25')
     */
    function isInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isBefore(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is a date not in the past.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date not in the past. If it is not a valid date it will return false.
     *
     * @example
     *
     *     isNotInPast('2020-06-25')
     */
    function isNotInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isBefore(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is a date in the past or today's date.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date in the past or today's date. If it is not a valid date it will return false.
     *
     * @example
     *
     *     isTodayOrInPast('2020-06-25')
     */
    function isTodayOrInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isSameOrBefore(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is a date not in the past and not today's date.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is a date not in the past and not today's date (i.e. in the future). If it is not a valid date it will return false.
     *
     * @example
     *
     *     isNotTodayOrInPast('2020-06-25')
     */
    function isNotTodayOrInPast(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return !inputtedDateTime.isSameOrBefore(currentDateTime, 'day');
    }

    /**
     * Checks to see if the given parameter is today's date.
     *
     * @param {string|Moment|Array|Date} input - A representation of a date
     * @return {Boolean} Boolean indicating if the input is today's date. If it is not a valid date it will return false.
     *
     * @example
     *
     *     isToday('2020-06-25')
     */
    function isToday(input) {
        if (!isValidDateRepresentation(input)) {
            return false;
        }
        const inputtedDateTime = moment(input);
        const currentDateTime = moment();

        return inputtedDateTime.isSame(currentDateTime, 'day');
    }

    /**
     * Compares 2 given dates. Compares the dates at the day level. i.e. '2020-06-24T10:30:15.000Z' and '2020-06-24T23:00:00.000Z'
     * are evaluated to be equal, but '2020-06-24T10:30:15.000Z' and '2020-06-23T23:00:00.000Z' or not. A representative token is
     * parsed in to an absolute date before any comparison.
     *
     * @param {string|Moment|Array|Date} a - A representation of a date
     * @param {string|Moment|Array|Date} b - A representation of a date. Or a representative token of a relative date.
     * @return {Boolean} Returns 1 if `a` is "greater" than `b`. Returns -1 if `b` is "greater" than `a`. Returns 0 if they are the same.
     *
     * @example
     *
     *     compare('2020-06-24T10:30:15.000Z', '2020-06-24T23:00:00.000Z')
     *     compare('2020-06-24T10:30:15.000Z', '__YESTERDAY__')
     */
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
