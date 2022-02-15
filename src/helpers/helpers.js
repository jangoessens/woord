export function getAlphabet() {
    return {
        A: {
            letter: 'A',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        B: {
            letter: 'B',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        C: {
            letter: 'C',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        D: {
            letter: 'D',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        E: {
            letter: 'E',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        F: {
            letter: 'F',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        G: {
            letter: 'G',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        H: {
            letter: 'H',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        I: {
            letter: 'I',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        J: {
            letter: 'J',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        K: {
            letter: 'K',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        L: {
            letter: 'L',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        M: {
            letter: 'M',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        N: {
            letter: 'N',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        O: {
            letter: 'O',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        P: {
            letter: 'P',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        Q: {
            letter: 'Q',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        R: {
            letter: 'R',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        S: {
            letter: 'S',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        T: {
            letter: 'T',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        U: {
            letter: 'U',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        V: {
            letter: 'V',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        W: {
            letter: 'W',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        X: {
            letter: 'X',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        Y: {
            letter: 'Y',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
        Z: {
            letter: 'Z',
            guessed: false,
            inWord: false,
            correctSpace: false
        },
    }
}

export function getInitialRows(amount = 5) {
    let rows = [];
    for (let i = 0; i < amount; i++) {
        rows.push({ index: i, letters: [], guessed: false });
    }
    return rows;
}
export function getLetterObject(letter) {
    return {
        'letter': letter,
        'inWord': false,
        'correctPosition': false,
    }
}

