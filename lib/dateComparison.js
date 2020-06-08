'use strict';

const moment = require('moment');

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
        isToday
    });
}

module.exports = createValidatorService;
