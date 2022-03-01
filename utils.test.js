//file can also have a .spec extension
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () =>{
    const text = generateText('Anthony', 42);
    expect(text).toBe('Anthony (42 years old)');
    //helper functions
});

test('should output dataless-text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
}) //checks for false positives (no name)

test('should output dataless-text', () => {
    const text = generateText(null);
    expect(text).toBe('null (undefined years old)');
}) //checks for false positives (undefined name)


test('should generate a valid text output', () => {
    const text = checkAndGenerate('Anthony', 42); //notifce different function. integration test
    expect(text).toBe('Anthony (42 years old)');
})
//same structure as unit test, But the tested function relies on more than
//just one source. the two parts needed to make this function working are integrated.

