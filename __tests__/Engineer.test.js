const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');



test('creates an engineer object', () => {
    const engineer = new Engineer('Cullers');

    expect(engineer.name).toBe("Cullers");
}); 

test('tests github function', () => {
    const engineer = new Engineer('EngineerMan', '1', '@gmail.com', 'CullerWhale');
    expect(engineer.getGithub()).toBe('CullerWhale');
});

test('checks role', () => {
    const engineer = new Engineer('EngineerMan', '1', '@gmail.com', 'CullerWhale');
    expect(engineer.getRole()).toBe('Engineer');
});

