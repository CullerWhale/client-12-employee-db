
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    manager = new Manager('Cullen Harris');

    expect(manager.name).toBe('Cullen Harris');
})