import { createStore } from "vuex";
import { getFiveLetterWord } from "../helpers/fiveLetterWords";
import { getAlphabet, getInitialRows, getLetterObject } from '../helpers/helpers';
export const store = createStore(
    {
        state() {
            return {
                word: "SKEER",
                guess: String,
                error: String,
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
            nextRow(state) {
                state.rows[state.currentRowIndex].guessed = true;
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
                let guessWord = guess.join('');
                console.log(guessWord);
                if (guess.length != this.state.letterAmount) {
                    console.warn("Guess does not match patter");
                    return false;
                }
                for (let i = 0; i < guess.length; i++) {
                    let letterObject = guess[i];
                    const letter = letterObject.letter
                    this.state.alphabet[letter].guessed = true;
                    if (this.state.word.indexOf(letter) >= 0 && this.state.word[i] === letter) {
                        console.log(letter + ' is in correct position');
                        this.state.alphabet[letter].inWord = true;
                        this.state.alphabet[letter].correctSpace = true;
                        letterObject.inWord = true;
                        letterObject.correctSpace = true;
                    } else if (this.state.word.indexOf(letter) >= 0) {
                        console.log(letter + ' is in the word but different pos')
                        this.state.alphabet[letter].inWord = true;
                        letterObject.inWord = true;
                    }
                    else {
                        console.log(letter + ' is not in word');
                    }
                };

                dispatch('checkVictory')
                    .then(() => {
                        alert("yay victory");
                    })
                    .catch((gameover) => {
                        if (gameover) {
                            alert("gameover");
                        } else {
                            commit('nextRow');
                        }
                    })
            },
            checkVictory({ getters }) {
                return new Promise((resolve, reject) => {
                    console.log(getters.currentRow.index, getters.rows.length);
                    const guess = getters.currentGuess.join('');
                    if (guess.length !== getters.letterAmount) {
                        reject(false);
                    } else if (guess === getters.word) {
                        resolve("win");
                    } else if (getters.currentRow.index === getters.rows.length - 1){
                        reject(true);
                    } else {
                        reject(false);
                    }
                });
            },
            checkGameOver({ getters }) {
                return new Promise((resolve, reject) => {
                    getters.currentRow.letters.forEach(letter => {
                        if (!letter.correctSpace) {
                            console.log("not correct letter");
                            reject("Incorrect letter");
                        }
                    });
                    if (this.state.currentRowIndex === getters.rows.length) {
                        resolve("To many letters");
                    } else {
                        resolve("victory");

                    }
                })

            },
            backspace({commit, getters}) {
                let guess = getters.currentGuess;
                if(guess.length >= 0) {
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