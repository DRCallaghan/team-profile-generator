const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Properties', () => {
    it('Intern name should always be a string', () => {
        expect(typeof new Intern('Dennis', '42', 'test@mail.com', 'UCF').getName()).toBe('string');
    });

    it('Intern ID should always be a number', () => {
        expect(new Intern('Dennis', '42', 'test@mail.com', 'UCF').getId()).toMatch(/^\d+$/);
    });

    it('Intern email should always be a valid email', () => {
        expect(new Intern('Dennis', '42', 'test@mail.com', 'UCF').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('Intern school should always be a string', () => {
        expect(typeof new Intern('Dennis', '42', 'test@mail.com', 'UCF').getSchool()).toBe('string');
    });

    it('Intern should be an instance of Employee', () => {
        expect(new Intern('Dennis', '42', 'test@mail.com', 'UCF')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it('getName() should return the name', () => {
        expect(new Intern('Dennis', '42', 'test@mail.com', 'UCF').getName()).toBe('Dennis');
    });

    it('getId should return the ID', () => {
        expect(new Intern('Dennis', '42', 'test@mail.com', 'UCF').getId()).toBe('42');
    });

    it('getEmail should return the ID', () => {
        expect(new Intern('Dennis', '42', 'test@mail.com', 'UCF').getEmail()).toBe('test@mail.com');
    });

    it('getSchool should return the school', () => {
        expect(new Intern('Dennis', '42', 'test@mail.com', 'UCF').getSchool()).toBe('UCF');
    });
})