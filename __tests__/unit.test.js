// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//isPhoneNumber Tests
test('phoneTest 1', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
})

test('phoneTest 2', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
})

test('phoneTest 3', () => {
    expect(functions.isPhoneNumber('1234567')).toBe(false);
})

test('phoneTest 4', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
})

//isEmail tests

test('emailTest 1', () => {
    expect(functions.isEmail('aaa@gmail.com')).toBe(true);
})

test('emailTest 2', () => {
    expect(functions.isEmail('123@gmail.com')).toBe(true);
})

test('emailTest 3', () => {
    expect(functions.isEmail('aaa@gmailcom')).toBe(false);
})

test('emailTest 4', () => {
    expect(functions.isEmail('aaa@gmail')).toBe(false);
})

//isStrongPassword tets

test('strongPasswordTest 1', () => {
    expect(functions.isStrongPassword('abcdefg')).toBe(true);
})

test('strongPasswordTest 2', () => {
    expect(functions.isStrongPassword('abcdefg_12')).toBe(true);
})

test('strongPasswordTest 3', () => {
    expect(functions.isStrongPassword('1abcdefg')).toBe(false);
})

test('strongPasswordTest 4', () => {
    expect(functions.isStrongPassword('abcdefg@')).toBe(false);
})

//isDate tests

test('isDateTest 1', () => {
    expect(functions.isDate('11/08/2001')).toBe(true);
})

test('isDateTest 2', () => {
    expect(functions.isDate('11/8/2001')).toBe(true);
})

test('isDateTest 3', () => {
    expect(functions.isDate('11/08/01')).toBe(false);
})

test('isDateTest 1', () => {
    expect(functions.isDate('11/008/2001')).toBe(false);
})

//isHexColorTests

test('isHexTest 1', () => {
    expect(functions.isHexColor('#ff00cc')).toBe(true);
})

test('isHexTest 2', () => {
    expect(functions.isHexColor('#f0c')).toBe(true);
})

test('isHexTest 1', () => {
    expect(functions.isHexColor('#fff00cc')).toBe(false);
})

test('isHexTest 2', () => {
    expect(functions.isHexColor('#f00c')).toBe(false);
})
