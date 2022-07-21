const Employee = require('../lib/employee');

describe('Properties', () => {
    it('Employee name should always be a string', () => {
        expect(typeof new Employee('Dennis', '42', 'test@mail.com').getName()).toBe('string');
    });

    it('Employee ID should always be a number', () => {
        expect(new Employee('Dennis', '42', 'test@mail.com').getId()).toMatch(/^\d+$/);
    });

    it('Employee email should always be a valid email', () => {
        expect(new Employee('Dennis', '42', 'test@mail.com').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });
});

describe('Methods', () => {
    it('getName() should return the name', () => {
        expect(new Employee('Dennis', '42', 'test@mail.com').getName()).toBe('Dennis');
    });

    it('getId should return the ID', () => {
        expect(new Employee('Dennis', '42', 'test@mail.com').getId()).toBe('42');
    });

    it('getEmail should return the ID', () => {
        expect(new Employee('Dennis', '42', 'test@mail.com').getEmail()).toBe('test@mail.com');
    });
})