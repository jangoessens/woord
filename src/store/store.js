import { createStore } from "vuex";
import { getFiveLetterWord, words} from "../helpers/fiveLetterWords";
import { getAlphabet, getInitialRows, getLetterObject } from '../helpers/helpers';
export const store = createStore(
    {
        state() {
            return {
                worcurrentGuessWordror: String,
                hasError: false,
                letterAmount: 5,
                currentRowIndex: 0,
                currentGuess: '',
                alphabet: getAlphabet(),
                rows: getInitialRows(),
            }
        },
        mutations: {
            setAlphabet(alphabet) {
                state.alphabet = alphabet;
            },
            guessLetter(state, letter) {
                let cleanLetter = getLetterObject(letter);

                state.rows[state.currentRowIndex].letters.push(cleanLetter);
                // state.currentGuess += letter;
            },
            setGuess(state, guess) {
                state.guess = guess;
            },
            guessRow(state) {
                state.rows[state.currentRowIndex].guessed = true;
            },
            nextRow(state) {
                state.currentRowIndex++;
            },
            setLetterCount(state, count) {
                state.letterAmount = count;
            },
            setWord(state, word) {
                state.word = word;
            },
            removeLastGuess(state) {
                state.rows[state.currentRowIndex].letters.pop();
            }
        },
        actions: {
            makeGuess({ commit, getters, dispatch }) {
                let guess = getters.currentGuess;
                let guessWord = getters.currentGuessWord;

                if (guess.length != this.state.letterAmount) {
                    console.warn("Guess does not match patter");
                    return false;
                }
                if (!words().includes(guessWord)){
                    alert("das geen word");
                    return false;
                }
                commit('guessRow');

                for (let i = 0; i < guess.length; i++) {
                    let letterObject = guess[i];
                    const letter = letterObject.letter
                    this.state.alphabet[letter].guessed = true;
                    if (this.state.word.indexOf(letter) >= 0 && this.state.word[i] === letter) {
                        this.state.alphabet[letter].inWord = true;
                        this.state.alphabet[letter].correctSpace = true;
                        letterObject.inWord = true;
                        letterObject.correctSpace = true;
                    } else if (this.state.word.indexOf(letter) >= 0) {
                        this.state.alphabet[letter].inWord = true;
                        letterObject.inWord = true;
                    }
                };
                console.log(guessWord);
                if (guessWord === getters.word) {
                    setTimeout(() => {
                        alert("win");
                    }, getters.letterAmount - 1 * 700);
                } else if (getters.currentRow.index === getters.rows.length - 1) {
                    setTimeout(() => {
                        alert('gameover');
                    }, getters.letterAmount - 1 * 700);
                }
                else {
                    commit('nextRow');
                }
            },
            backspace({ commit, getters }) {
                let guess = getters.currentGuess;
                if (guess.length >= 0) {
                    commit('removeLastGuess');
                }

            },
            registerInput({ commit, getters }, input) {
                if (getters.currentGuess.length >= 5) {
                    return;
                }
                commit('guessLetter', input.letter);
            },
            startGame({ getters, commit }, letterCount = 5) {
                commit('setLetterCount', letterCount);
                commit('setWord', getWord(letterCount));
            }
        },
        getters: {
            counter(state) {
                return state.count + 1;
            },
            inputs(state) {
                return state.alphabet;
            },
            currentRow(state) {
                return state.rows[state.currentRowIndex];
            },
            currentGuess(state) {
                return state.rows[state.currentRowIndex].letters
            },
            currentGuessWord(state) {
                let word = '';
                return state.rows[state.currentRowIndex].letters.reduce(
                    (acc, item) => {
                        acc += item.letter;
                        return acc;
                    }, word
                )
            },
            rows(state) {
                return state.rows;
            },
            letterAmount(state) {
                return state.letterAmount;
            }
        },
    });

function getWord(letterCount) {
    switch (letterCount) {
        case 5:
            return getFiveLetterWord();
            break;

        default:
            break;
    }
}