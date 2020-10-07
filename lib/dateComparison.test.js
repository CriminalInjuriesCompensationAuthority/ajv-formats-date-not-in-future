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
    describe('isNotToday', () => {
        describe('Today', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                const result = validator.isNotToday(date);
                expect(result).toBe(false);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date = date.toISOString();
                const result = validator.isNotToday(date);
                expect(result).toBe(false);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment();
                const result = validator.isNotToday(date);
                expect(result).toBe(false);
            });

            it('should handle date as array', () => {
                const validator = createValidatorService();
                const date = moment().format('YYYY-MM-DD');
                let dateAsArray = date.split('-');
                dateAsArray = dateAsArray.map(x => Number.parseInt(x, 10));
                // js date months or 0-indexed.
                dateAsArray[1] -= 1;
                const result = validator.isNotToday(dateAsArray);
                expect(result).toBe(false);
            });
        });
        describe('Past', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() - 100);
                const result = validator.isNotToday(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() - 100);
                date = date.toISOString();
                const result = validator.isNotToday(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().subtract(100, 'days');
                const result = validator.isNotToday(date);
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
                const result = validator.isNotToday(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Future', () => {
            it('should validate a Date object', () => {
                const validator = createValidatorService();
                const date = new Date();
                date.setDate(date.getDate() + 100);
                const result = validator.isNotToday(date);
                expect(result).toBe(true);
            });

            it('should validate a date string', () => {
                const validator = createValidatorService();
                let date = new Date();
                date.setDate(date.getDate() + 100);
                date = date.toISOString();
                const result = validator.isNotToday(date);
                expect(result).toBe(true);
            });

            it('should handle date as moment object', () => {
                const validator = createValidatorService();
                const date = moment().add(100, 'days');
                const result = validator.isNotToday(date);
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
                const result = validator.isNotToday(dateAsArray);
                expect(result).toBe(true);
            });
        });
        describe('Invalid dates', () => {
            it('should validate a non-date string', () => {
                const validator = createValidatorService();
                const result = validator.isNotToday('notadate');
                expect(result).toBe(false);
            });

            it('should validate a malformed date', () => {
                const validator = createValidatorService();
                const result = validator.isNotToday('2019-13-13');
                expect(result).toBe(false);
            });

            it('should validate an object', () => {
                const validator = createValidatorService();
                const result = validator.isNotToday({foo: 'bar'});
                expect(result).toBe(false);
            });

            it('should validate an integer', () => {
                const validator = createValidatorService();
                const result = validator.isNotToday(13);
                expect(result).toBe(false);
            });

            it('should validate a boolean (true)', () => {
                const validator = createValidatorService();
                const result = validator.isNotToday(true);
                expect(result).toBe(false);
            });

            it('should validate a boolean (false)', () => {
                const validator = createValidatorService();
                const result = validator.isNotToday(false);
                expect(result).toBe(false);
            });
        });
    });
    describe('compare', () => {
        describe('2 string dates', () => {
            describe('default unit', () => {
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

            describe('specified unit', () => {
                describe('year', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'year');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'year');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'year');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'year');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same year', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 100);
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 100);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(100, 'days');
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(100, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'year'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different year', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 400);
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 400);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(400, 'days');
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(400, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'year'
                                );
                                expect(result).toBe(1);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same year', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 100);
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 100);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(100, 'days');
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(100, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'year'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different year', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 400);
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 400);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(400, 'days');
                                const result = validator.compare(a, b, 'year');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(400, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'year'
                                );
                                expect(result).toBe(-1);
                            });
                        });
                    });
                });
                describe('month', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'month');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'month');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'month');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'month');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same month', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 14);
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 14);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(14, 'days');
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(14, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'month'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different month', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 50);
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 50);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(50, 'days');
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(50, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'month'
                                );
                                expect(result).toBe(1);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same month', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 10);
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 10);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(10, 'days');
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(10, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'month'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different month', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 50);
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 50);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(50, 'days');
                                const result = validator.compare(a, b, 'month');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(50, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'month'
                                );
                                expect(result).toBe(-1);
                            });
                        });
                    });
                });
                describe('week', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'week');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'week');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'week');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'week');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same week', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 1);
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 1);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(1, 'days');
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(1, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'week'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different week', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 8);
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 8);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(8, 'days');
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(8, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'week'
                                );
                                expect(result).toBe(1);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same week', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 2);
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 2);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(2, 'days');
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(2, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'week'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different week', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 8);
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 8);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(8, 'days');
                                const result = validator.compare(a, b, 'week');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(8, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'week'
                                );
                                expect(result).toBe(-1);
                            });
                        });
                    });
                });
                describe('isoWeek', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'isoWeek');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'isoWeek');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'isoWeek');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'isoWeek');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same isoWeek', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 1);
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 1);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(1, 'days');
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(1, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'isoWeek'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different isoWeek', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 8);
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() - 8);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').subtract(8, 'days');
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .subtract(8, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'isoWeek'
                                );
                                expect(result).toBe(1);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same isoWeek', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 2);
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 2);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(2, 'days');
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(2, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'isoWeek'
                                );
                                expect(result).toBe(0);
                            });
                        });
                        describe('different isoWeek', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18');
                                const b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 8);
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18');
                                let b = new Date('2020-06-18');
                                b.setDate(b.getDate() + 8);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18');
                                const b = moment('2020-06-18').add(8, 'days');
                                const result = validator.compare(a, b, 'isoWeek');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18').format('YYYY-MM-DD');
                                const b = moment('2020-06-18')
                                    .add(8, 'days')
                                    .format('YYYY-MM-DD');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'isoWeek'
                                );
                                expect(result).toBe(-1);
                            });
                        });
                    });
                });
                describe('day', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'day');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'day');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'day');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'day');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same day', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:00:00');
                                const b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() - 2);
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:00:00');
                                let b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() - 2);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00');
                                const b = moment('2020-06-18 13:00:00').subtract(2, 'hours');
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:00:00')
                                    .subtract(2, 'hours')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(dateAAsArray, dateBAsArray, 'day');
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different day', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:00:00');
                                const b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() - 20);
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:00:00');
                                let b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() - 20);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00');
                                const b = moment('2020-06-18 13:00:00').subtract(20, 'hours');
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:00:00')
                                    .subtract(20, 'hours')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(dateAAsArray, dateBAsArray, 'day');
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same day', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:00:00');
                                const b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() + 5);
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:00:00');
                                let b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() + 5);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00');
                                const b = moment('2020-06-18 13:00:00').add(5, 'hours');
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:00:00')
                                    .add(5, 'hours')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(dateAAsArray, dateBAsArray, 'day');
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different day', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:00:00');
                                const b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() + 20);
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:00:00');
                                let b = new Date('2020-06-18 13:00:00');
                                b.setHours(b.getHours() + 20);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00');
                                const b = moment('2020-06-18 13:00:00').add(20, 'hours');
                                const result = validator.compare(a, b, 'day');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:00:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:00:00')
                                    .add(20, 'hours')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(dateAAsArray, dateBAsArray, 'day');
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
                });
                describe('hour', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'hour');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'hour');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'hour');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'hour');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same hour', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:00');
                                const b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() - 15);
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:00');
                                let b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() - 15);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00');
                                const b = moment('2020-06-18 13:30:00').subtract(15, 'minutes');
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:00')
                                    .subtract(15, 'minutes')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'hour'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different hour', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:00');
                                const b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() - 75);
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:00');
                                let b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() - 75);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00');
                                const b = moment('2020-06-18 13:30:00').subtract(75, 'minutes');
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:00')
                                    .subtract(75, 'minutes')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'hour'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same hour', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:00');
                                const b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() + 15);
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:00');
                                let b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() + 15);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00');
                                const b = moment('2020-06-18 13:30:00').add(15, 'minutes');
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:00')
                                    .add(15, 'minutes')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'hour'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different hour', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:00');
                                const b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() + 75);
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:00');
                                let b = new Date('2020-06-18 13:30:00');
                                b.setMinutes(b.getMinutes() + 75);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00');
                                const b = moment('2020-06-18 13:30:00').add(75, 'minutes');
                                const result = validator.compare(a, b, 'hour');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:00').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:00')
                                    .add(75, 'minutes')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'hour'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
                });
                describe('minute', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'minute');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'minute');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'minute');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'minute');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same minute', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30');
                                const b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() - 15);
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30');
                                let b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() - 15);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30');
                                const b = moment('2020-06-18 13:30:30').subtract(15, 'seconds');
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:30')
                                    .subtract(15, 'seconds')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'minute'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different minute', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30');
                                const b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() - 75);
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30');
                                let b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() - 75);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30');
                                const b = moment('2020-06-18 13:30:30').subtract(75, 'seconds');
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:30')
                                    .subtract(75, 'seconds')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'minute'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same minute', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30');
                                const b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() + 15);
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30');
                                let b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() + 15);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30');
                                const b = moment('2020-06-18 13:30:30').add(15, 'seconds');
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:30')
                                    .add(15, 'seconds')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'minute'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different minute', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30');
                                const b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() + 75);
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30');
                                let b = new Date('2020-06-18 13:30:30');
                                b.setSeconds(b.getSeconds() + 75);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30');
                                const b = moment('2020-06-18 13:30:30').add(75, 'seconds');
                                const result = validator.compare(a, b, 'minute');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30').format(
                                    'YYYY-MM-DD-hh-mm-ss'
                                );
                                const b = moment('2020-06-18 13:30:30')
                                    .add(75, 'seconds')
                                    .format('YYYY-MM-DD-hh-mm-ss');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'minute'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
                });
                describe('second', () => {
                    describe('a === b', () => {
                        it('should validate a Date object', () => {
                            const validator = createValidatorService();
                            const a = new Date();
                            const b = new Date();
                            const result = validator.compare(a, b, 'second');
                            expect(result).toBe(0);
                        });

                        it('should validate a date string', () => {
                            const validator = createValidatorService();
                            let a = new Date();
                            let b = new Date();
                            a = a.toISOString();
                            b = b.toISOString();
                            const result = validator.compare(a, b, 'second');
                            expect(result).toBe(0);
                        });

                        it('should handle date as moment object', () => {
                            const validator = createValidatorService();
                            const a = moment();
                            const b = moment();
                            const result = validator.compare(a, b, 'second');
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
                            const result = validator.compare(dateAAsArray, dateBAsArray, 'second');
                            expect(result).toBe(0);
                        });
                    });
                    describe('a > b', () => {
                        describe('same second', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30.500');
                                const b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() - 200);
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30.500');
                                let b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() - 200);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500');
                                const b = moment('2020-06-18 13:30:30.500').subtract(
                                    200,
                                    'milliseconds'
                                );
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500').format(
                                    'YYYY-MM-DD-hh-mm-ss-SSS'
                                );
                                const b = moment('2020-06-18 13:30:30.500')
                                    .subtract(200, 'milliseconds')
                                    .format('YYYY-MM-DD-hh-mm-ss-SSS');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'second'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different second', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30.500');
                                const b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() - 750);
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30.500');
                                let b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() - 750);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500');
                                const b = moment('2020-06-18 13:30:30.500').subtract(
                                    750,
                                    'milliseconds'
                                );
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500').format(
                                    'YYYY-MM-DD-hh-mm-ss-SSS'
                                );
                                const b = moment('2020-06-18 13:30:30.500')
                                    .subtract(750, 'milliseconds')
                                    .format('YYYY-MM-DD-hh-mm-ss-SSS');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'second'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
                    describe('a < b', () => {
                        describe('same second', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30.500');
                                const b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() + 200);
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(0);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30.500');
                                let b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() + 200);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(0);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500');
                                const b = moment('2020-06-18 13:30:30.500').add(
                                    200,
                                    'milliseconds'
                                );
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(0);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500').format(
                                    'YYYY-MM-DD-hh-mm-ss-SSS'
                                );
                                const b = moment('2020-06-18 13:30:30.500')
                                    .add(200, 'seconds')
                                    .format('YYYY-MM-DD-hh-mm-ss-SSS');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'second'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                        describe('different second', () => {
                            it('should validate a Date object', () => {
                                const validator = createValidatorService();
                                const a = new Date('2020-06-18 13:30:30.500');
                                const b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() + 750);
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(-1);
                            });

                            it('should validate a date string', () => {
                                const validator = createValidatorService();
                                let a = new Date('2020-06-18 13:30:30.500');
                                let b = new Date('2020-06-18 13:30:30.500');
                                b.setMilliseconds(b.getMilliseconds() + 750);
                                a = a.toISOString();
                                b = b.toISOString();
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as moment object', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500');
                                const b = moment('2020-06-18 13:30:30.500').add(
                                    750,
                                    'milliseconds'
                                );
                                const result = validator.compare(a, b, 'second');
                                expect(result).toBe(-1);
                            });

                            it('should handle date as array', () => {
                                const validator = createValidatorService();
                                const a = moment('2020-06-18 13:30:30.500').format(
                                    'YYYY-MM-DD-hh-mm-ss-SSS'
                                );
                                const b = moment('2020-06-18 13:30:30.500')
                                    .add(750, 'milliseconds')
                                    .format('YYYY-MM-DD-hh-mm-ss-SSS');
                                let dateAAsArray = a.split('-');
                                let dateBAsArray = b.split('-');
                                dateAAsArray = dateAAsArray.map(x => Number.parseInt(x, 10));
                                dateBAsArray = dateBAsArray.map(x => Number.parseInt(x, 10));
                                // js date months or 0-indexed.
                                dateAAsArray[1] -= 1;
                                dateBAsArray[1] -= 1;
                                const result = validator.compare(
                                    dateAAsArray,
                                    dateBAsArray,
                                    'second'
                                );
                                // the Date constructor supports array of maxlength 3. it will fail with longer arrays.
                                // to pass date AND time to the Date constructor, you need to pass them as sperate arguments.
                                expect(result).toBe(false);
                            });
                        });
                    });
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
