const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Properties', () => {
    it('Engineer name should always be a string', () => {
        expect(typeof new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getName()).toBe('string');
    });

    it('Engineer ID should always be a number', () => {
        expect(new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getId()).toMatch(/^\d+$/);
    });

    it('Engineer email should always be a valid email', () => {
        expect(new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('Engineer github should always be a string', () => {
        expect(typeof new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getGithub()).toBe('string');
    });

    it('Engineer should be an instance of Employee', () => {
        expect(new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it('getName() should return the name', () => {
        expect(new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getName()).toBe('Dennis');
    });

    it('getId should return the ID', () => {
        expect(new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getId()).toBe('42');
    });

    it('getEmail should return the ID', () => {
        expect(new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getEmail()).toBe('test@mail.com');
    });

    it('getGithub should return the github profile', () => {
        expect(new Engineer('Dennis', '42', 'test@mail.com', 'DRCallaghan').getGithub()).toBe('DRCallaghan');
    });
})