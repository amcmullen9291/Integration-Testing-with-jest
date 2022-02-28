//file can also have a .spec extension
const {generateText } = require('./util');

test('should output name and age', () =>{
    const text = generateText('Anthony', 42);
    expect(text).toBe('Anthony (42 years old)');
    //helper functions
});