'use strict';

const moment = require('moment');
const createValidatorService = require('./dateComparison');

describe('validator', () => {
    describe('isInFuture', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isInFuture(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isInFuture(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isInFuture(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isInFuture(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isInFuture(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isInFuture(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isInFuture('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isInFuture('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isInFuture({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isInFuture(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isInFuture(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isInFuture(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isNotInFuture', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isNotInFuture(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isNotInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isNotInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotInFuture(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isNotInFuture(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isNotInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isNotInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotInFuture(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isNotInFuture(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isNotInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isNotInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotInFuture(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isNotInFuture('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isNotInFuture('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isNotInFuture({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isNotInFuture(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isNotInFuture(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isNotInFuture(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isTodayOrInFuture', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isTodayOrInFuture(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isTodayOrInFuture(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isTodayOrInFuture(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInFuture('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInFuture('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInFuture({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInFuture(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInFuture(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInFuture(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isNotTodayOrInFuture', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotTodayOrInFuture(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotTodayOrInFuture(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isNotTodayOrInFuture(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotTodayOrInFuture(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInFuture('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInFuture('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInFuture({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInFuture(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInFuture(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInFuture(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isInPast', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isInPast(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isInPast(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isInPast(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isInPast(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isInPast(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isInPast(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isInPast('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isInPast('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isInPast({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isInPast(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isInPast(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isInPast(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isNotInPast', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isNotInPast(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isNotInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isNotInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotInPast(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isNotInPast(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isNotInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isNotInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotInPast(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isNotInPast(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isNotInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isNotInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotInPast(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isNotInPast('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isNotInPast('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isNotInPast({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isNotInPast(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isNotInPast(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isNotInPast(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isTodayOrInPast', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isTodayOrInPast(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isTodayOrInPast(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isTodayOrInPast(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInPast('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInPast('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInPast({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInPast(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInPast(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isTodayOrInPast(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isNotTodayOrInPast', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotTodayOrInPast(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotTodayOrInPast(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isNotTodayOrInPast(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotTodayOrInPast(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInPast('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInPast('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInPast({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInPast(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInPast(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isNotTodayOrInPast(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('isToday', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isToday(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isToday(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isToday(date);
                expect(result).toBe(true);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isToday(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isToday(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isToday(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isToday(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .subtract(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isToday(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isToday(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isToday(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isToday(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment()
                    .add(100, 'days')
                    .format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isToday(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isToday('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isToday('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isToday({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isToday(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isToday(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isToday(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('compare', () => {
        describe('2 string dates', () => {
            describe('a === b', () => {
                it('should validate a Date object', () => {
                    const validator = createValidatorService();
                    const a = new Date();
                    const b = new Date();
                    const result = validator.compare(a, b);
                    expect(result).toBe(0);
                });

                it('should validate a date string', () => {
                    const validator = createValidatorService();
                    let a = new Date();
                    let b = new Date();
                    a = a.toISOString();
                    b = b.toISOString();
                    const result = validator.compare(a, b);
                    expect(result).toBe(0);
                });

                it('should handle date as moment object', () => {
                    const validator = createValidatorService();
                    const a = moment();
                    const b = moment();
                    const result = validator.compare(a, b);
                    expect(result).toBe(0);
                });

                it('should handle date as array', () => {
                    const validator = createValidatorService();
                    const a = moment().format('YYYY-MM-DD');
                    const b = moment().format('YYYY-MM-DD');
                    let dateAAsArray = a.split('-');
                    let dateBAsArray = b.split('-');
                    dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                    dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                    // js date months or 0-indexed.
                    dateAAsArray[1] -= 1;
                    dateBAsArray[1] -= 1;
                    const result = validator.compare(dateAAsArray, dateBAsArray);
                    expect(result).toBe(0);
                });
            });
            describe('a > b', () => {
                it('should validate a Date object', () => {
                    const validator = createValidatorService();
                    const a = new Date();
                    const b = new Date();
                    b.setDate(b.getDate() - 100);
                    const result = validator.compare(a, b);
                    expect(result).toBe(1);
                });

                it('should validate a date string', () => {
                    const validator = createValidatorService();
                    let a = new Date();
                    let b = new Date();
                    b.setDate(b.getDate() - 100);
                    a = a.toISOString();
                    b = b.toISOString();
                    const result = validator.compare(a, b);
                    expect(result).toBe(1);
                });

                it('should handle date as moment object', () => {
                    const validator = createValidatorService();
                    const a = moment();
                    const b = moment().subtract(100, 'days');
                    const result = validator.compare(a, b);
                    expect(result).toBe(1);
                });

                it('should handle date as array', () => {
                    const validator = createValidatorService();
                    const a = moment().format('YYYY-MM-DD');
                    const b = moment()
                        .subtract(100, 'days')
                        .format('YYYY-MM-DD');
                    let dateAAsArray = a.split('-');
                    let dateBAsArray = b.split('-');
                    dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                    dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                    // js date months or 0-indexed.
                    dateAAsArray[1] -= 1;
                    dateBAsArray[1] -= 1;
                    const result = validator.compare(dateAAsArray, dateBAsArray);
                    expect(result).toBe(1);
                });
            });
            describe('a < b', () => {
                it('should validate a Date object', () => {
                    const validator = createValidatorService();
                    const a = new Date();
                    const b = new Date();
                    b.setDate(b.getDate() + 100);
                    const result = validator.compare(a, b);
                    expect(result).toBe(-1);
                });

                it('should validate a date string', () => {
                    const validator = createValidatorService();
                    let a = new Date();
                    let b = new Date();
                    b.setDate(b.getDate() + 100);
                    a = a.toISOString();
                    b = b.toISOString();
                    const result = validator.compare(a, b);
                    expect(result).toBe(-1);
                });

                it('should handle date as moment object', () => {
                    const validator = createValidatorService();
                    const a = moment();
                    const b = moment().add(100, 'days');
                    const result = validator.compare(a, b);
                    expect(result).toBe(-1);
                });

                it('should handle date as array', () => {
                    const validator = createValidatorService();
                    const a = moment().format('YYYY-MM-DD');
                    const b = moment()
                        .add(100, 'days')
                        .format('YYYY-MM-DD');
                    let dateAAsArray = a.split('-');
                    let dateBAsArray = b.split('-');
                    dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                    dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                    // js date months or 0-indexed.
                    dateAAsArray[1] -= 1;
                    dateBAsArray[1] -= 1;
                    const result = validator.compare(dateAAsArray, dateBAsArray);
                    expect(result).toBe(-1);
                });
            });
        });
        describe('1 string date and 1 token', () => {
            describe('a === b', () => {
                it('should validate a Date object', () => {
                    const validator = createValidatorService();
                    const a = new Date();
                    const b = '__TODAY__';
                    const result = validator.compare(a, b);
                    expect(result).toBe(0);
                });

                it('should validate a date string', () => {
                    const validator = createValidatorService();
                    let a = new Date();
                    const b = '__TODAY__';
                    a = a.toISOString();
                    const result = validator.compare(a, b);
                    expect(result).toBe(0);
                });

                it('should handle date as moment object', () => {
                    const validator = createValidatorService();
                    const a = moment();
                    const b = '__TODAY__';
                    const result = validator.compare(a, b);
                    expect(result).toBe(0);
                });

                it('should handle date as array', () => {
                    const validator = createValidatorService();
                    const a = moment().format('YYYY-MM-DD');
                    const b = '__TODAY__';
                    let dateAAsArray = a.split('-');
                    dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                    // js date months or 0-indexed.
                    dateAAsArray[1] -= 1;
                    const result = validator.compare(dateAAsArray, b);
                    expect(result).toBe(0);
                });

                describe('Invalid dates', () => {
                    it('should validate a non-date string', () => {
                        const validator = createValidatorService();
                        const result = validator.compare('notadate', '__TODAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate a malformed date', () => {
                        const validator = createValidatorService();
                        const result = validator.compare('2019-13-13', '__TODAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate an object', () => {
                        const validator = createValidatorService();
                        const result = validator.compare({foo: 'bar'}, '__TODAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate an integer', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(13, '__TODAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate a boolean (true)', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(true, '__TODAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate a boolean (false)', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(false, '__TODAY__');
                        expect(result).toBe(false);
                    });
                });
            });
            describe('a > b', () => {
                it('should validate a Date object', () => {
                    const validator = createValidatorService();
                    const a = new Date();
                    const b = '__YESTERDAY__';
                    const result = validator.compare(a, b);
                    expect(result).toBe(1);
                });

                it('should validate a date string', () => {
                    const validator = createValidatorService();
                    let a = new Date();
                    const b = '__YESTERDAY__';
                    a = a.toISOString();
                    const result = validator.compare(a, b);
                    expect(result).toBe(1);
                });

                it('should handle date as moment object', () => {
                    const validator = createValidatorService();
                    const a = moment();
                    const b = '__YESTERDAY__';
                    const result = validator.compare(a, b);
                    expect(result).toBe(1);
                });

                it('should handle date as array', () => {
                    const validator = createValidatorService();
                    const a = moment().format('YYYY-MM-DD');
                    const b = '__YESTERDAY__';
                    let dateAAsArray = a.split('-');
                    dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                    // js date months or 0-indexed.
                    dateAAsArray[1] -= 1;
                    const result = validator.compare(dateAAsArray, b);
                    expect(result).toBe(1);
                });

                describe('Invalid dates', () => {
                    it('should validate a non-date string', () => {
                        const validator = createValidatorService();
                        const result = validator.compare('notadate', '__YESTERDAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate a malformed date', () => {
                        const validator = createValidatorService();
                        const result = validator.compare('2019-13-13', '__YESTERDAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate an object', () => {
                        const validator = createValidatorService();
                        const result = validator.compare({foo: 'bar'}, '__YESTERDAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate an integer', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(13, '__YESTERDAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate a boolean (true)', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(true, '__YESTERDAY__');
                        expect(result).toBe(false);
                    });

                    it('should validate a boolean (false)', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(false, '__YESTERDAY__');
                        expect(result).toBe(false);
                    });
                });
            });
            describe('a < b', () => {
                it('should validate a Date object', () => {
                    const validator = createValidatorService();
                    const a = new Date();
                    const b = '__TOMORROW__';
                    const result = validator.compare(a, b);
                    expect(result).toBe(-1);
                });

                it('should validate a date string', () => {
                    const validator = createValidatorService();
                    let a = new Date();
                    const b = '__TOMORROW__';
                    a = a.toISOString();
                    const result = validator.compare(a, b);
                    expect(result).toBe(-1);
                });

                it('should handle date as moment object', () => {
                    const validator = createValidatorService();
                    const a = moment();
                    const b = '__TOMORROW__';
                    const result = validator.compare(a, b);
                    expect(result).toBe(-1);
                });

                it('should handle date as array', () => {
                    const validator = createValidatorService();
                    const a = moment().format('YYYY-MM-DD');
                    const b = '__TOMORROW__';
                    let dateAAsArray = a.split('-');
                    dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                    // js date months or 0-indexed.
                    dateAAsArray[1] -= 1;
                    const result = validator.compare(dateAAsArray, b);
                    expect(result).toBe(-1);
                });

                describe('Invalid dates', () => {
                    it('should validate a non-date string', () => {
                        const validator = createValidatorService();
                        const result = validator.compare('notadate', '__TOMORROW__');
                        expect(result).toBe(false);
                    });

                    it('should validate a malformed date', () => {
                        const validator = createValidatorService();
                        const result = validator.compare('2019-13-13', '__TOMORROW__');
                        expect(result).toBe(false);
                    });

                    it('should validate an object', () => {
                        const validator = createValidatorService();
                        const result = validator.compare({foo: 'bar'}, '__TOMORROW__');
                        expect(result).toBe(false);
                    });

                    it('should validate an integer', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(13, '__TOMORROW__');
                        expect(result).toBe(false);
                    });

                    it('should validate a boolean (true)', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(true, '__TOMORROW__');
                        expect(result).toBe(false);
                    });

                    it('should validate a boolean (false)', () => {
                        const validator = createValidatorService();
                        const result = validator.compare(false, '__TOMORROW__');
                        expect(result).toBe(false);
                    });
                });
            });
            it('should validate an incorrect token', () => {
                const validator = createValidatorService();
                const result = validator.compare('2019-06-10', '__SOMEDAY123__');
                expect(result).toBe(false);
            });
        });
    });
});
