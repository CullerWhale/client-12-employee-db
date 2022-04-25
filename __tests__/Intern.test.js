
const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('create an intern object', () => {
    const intern = new Intern('Cull');

    expect(intern.name).toBe('Cull');
});
