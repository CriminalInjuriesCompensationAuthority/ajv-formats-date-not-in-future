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
    isPresent: date => {
        const validatorService = createValidatorService();
        return validatorService.isPresent(date);
    },
    isToday: date => {
        const validatorService = createValidatorService();
        return validatorService.isToday(date);
    }
};
