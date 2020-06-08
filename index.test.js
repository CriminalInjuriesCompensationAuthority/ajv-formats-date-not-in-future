'use strict';

const ajvFormatsDateComparison = require('./index');

describe('validator', () => {
    it('isInFuture', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isInFuture(date);
        expect(result).toEqual(false);
    });
    it('isNotInFuture', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isNotInFuture(date);
        expect(result).toEqual(true);
    });
    it('isTodayOrInFuture', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isTodayOrInFuture(date);
        expect(result).toEqual(true);
    });
    it('isNotTodayOrInFuture', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isNotTodayOrInFuture(date);
        expect(result).toEqual(false);
    });
    it('isInPast', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isInPast(date);
        expect(result).toEqual(false);
    });
    it('isTodayOrInPast', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isTodayOrInPast(date);
        expect(result).toEqual(true);
    });
    it('isNotTodayOrInPast', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isNotTodayOrInPast(date);
        expect(result).toEqual(false);
    });
    it('isToday', () => {
        let date = new Date();
        date = date.toISOString();
        const result = ajvFormatsDateComparison.isToday(date);
        expect(result).toEqual(true);
    });
});
