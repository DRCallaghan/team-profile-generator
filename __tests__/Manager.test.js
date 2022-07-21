const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Properties', () => {
    it('Manager name should always be a string', () => {
        expect(typeof new Manager('Dennis', '42', 'test@mail.com', '87').getName()).toBe('string');
    });

    it('Manager ID should always be a number', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87').getId()).toMatch(/^\d+$/);
    });

    it('Manager email should always be a valid email', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('Manager office number should always be a number', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87').getOffice()).toMatch(/^\d+$/);
    });

    it('Manager should be an instance of Employee', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it('getName() should return the name', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87').getName()).toBe('Dennis');
    });

    it('getId should return the ID', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87').getId()).toBe('42');
    });

    it('getEmail should return the ID', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87').getEmail()).toBe('test@mail.com');
    });

    it('getOffice should return the office number', () => {
        expect(new Manager('Dennis', '42', 'test@mail.com', '87').getOffice()).toBe('87');
    });
})