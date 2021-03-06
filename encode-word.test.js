const encodeWord = require('./encode-word.js');


describe('encodeWord', () => {
    it('gives back the emoji version of each letter in the given word', () => {
        const word1 = 'help';
        const word2 = 'hello';
        const word3 = 'please';
        const expectedWord1 = '๐๐๐๐ฉ'
        const expectedWord2 = '๐๐๐๐๐'
        const expectedWord3 = '๐ฉ๐๐๐ฝ๐๐'

        expect(encodeWord(word1)).toBe(expectedWord1);
        expect(encodeWord(word2)).toBe(expectedWord2);
        expect(encodeWord(word3)).toBe(expectedWord3);
    })

    it('leaves non-letters untouched', () => {
        const word1 = 'help!';
        const word2 = 'r2d2';
        const word3 = 'colin.jaffe@codeimmersives.com';
        const expectedWord1 = '๐๐๐๐ฉ!'
        const expectedWord2 = '๐ค2๐ฉ2'
        const expectedWord3 = '๐ต๐๐๐ฆ๐ฐ.๐คน๐ฝ๐๐๐@๐ต๐๐ฉ๐๐ฆ๐๐๐๐ค๐๐ฆ๐๐๐.๐ต๐๐'

        expect(encodeWord(word1)).toBe(expectedWord1);
        expect(encodeWord(word2)).toBe(expectedWord2);
        expect(encodeWord(word3)).toBe(expectedWord3);
    })

    it('is case-insensitive', () => {
        const word1 = 'Colin';
        const word2 = 'YELLS';
        const word3 = 'at Anthony DeRosa';
        const expectedWord1 = '๐ต๐๐๐ฆ๐ฐ'
        const expectedWord2 = 'โฏ๐๐๐๐'
        const expectedWord3 = '๐ฝ๐ ๐ฝ๐ฐ๐๐๐๐ฐโฏ ๐ฉ๐๐ค๐๐๐ฝ'

        expect(encodeWord(word1)).toBe(expectedWord1);
        expect(encodeWord(word2)).toBe(expectedWord2);
        expect(encodeWord(word3)).toBe(expectedWord3);
    })
})
