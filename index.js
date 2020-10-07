'use strict';

const createValidatorService = require('./lib/dateComparison');

module.exports = {
    isInFuture: date => {
        const validatorService = createValidatorService();
        return validatorService.isInFuture(date);
    },
    isNotInFuture: date => {
        const validatorService = createValidatorService();
        return validatorService.isNotInFuture(date);
    },
    isTodayOrInFuture: date => {
        const validatorService = createValidatorService();
        return validatorService.isTodayOrInFuture(date);
    },
    isNotTodayOrInFuture: date => {
        const validatorService = createValidatorService();
        return validatorService.isNotTodayOrInFuture(date);
    },
    isInPast: date => {
        const validatorService = createValidatorService();
        return validatorService.isInPast(date);
    },
    isNotInPast: date => {
        const validatorService = createValidatorService();
        return validatorService.isNotInPast(date);
    },
    isTodayOrInPast: date => {
        const validatorService = createValidatorService();
        return validatorService.isTodayOrInPast(date);
    },
    isNotTodayOrInPast: date => {
        const validatorService = createValidatorService();
        return validatorService.isNotTodayOrInPast(date);
    },
    isToday: date => {
        const validatorService = createValidatorService();
        return validatorService.isToday(date);
    },
    isNotToday: date => {
        const validatorService = createValidatorService();
        return validatorService.isNotToday(date);
    },
    compareDates: {
        validate: date => {
            const validatorService = createValidatorService();
            return validatorService.isValidDateRepresentation(date);
        },
        compare: (a, b, units = 'day') => {
            const validatorService = createValidatorService();
            return validatorService.compare(a, b, units);
        },
        async: false
    }
};
