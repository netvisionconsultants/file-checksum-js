const sha1 = require('../src/main').default;

describe('sha1 function', () => {
    it('should hash a string', (done) => {
        const checksum = sha1('test');
        expect(checksum).toBe('a94a8fe5ccb19ba61c4c0873d391e987982fbbd3');
        done();
    });

    it('should hash an Uint8Array', (done) => {
        const checksum = sha1(new Uint8Array([]));
        expect(checksum).toBe('da39a3ee5e6b4b0d3255bfef95601890afd80709');
        done();
    });

    it('should hash an ArrayBuffer', (done) => {
        const checksum = sha1(new ArrayBuffer());
        expect(checksum).toBe('da39a3ee5e6b4b0d3255bfef95601890afd80709');
        done();
    });
});