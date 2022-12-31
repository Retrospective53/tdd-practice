const caesarCipher = (str, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxy'
    const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = '';

    for (let i = 0; i < str.length; i++) {
        // get the current char
        const char = str[i];

        if (/[a-z]/i.test(char)) {
            const index = alphabet.indexOf(char.toLowerCase());
            let newIndex = index + shift;

            if (newIndex > 25) {
                newIndex = newIndex % 26;
            }
            if (newIndex < 0) {
                newIndex = 26 + newIndex;
            }

            if (char == char.toUpperCase()) {
                result += alphabetUpperCase[newIndex];
            }
            else {
                result += alphabet[newIndex]
            }
        }
        else {
            result += char;
        }
    }

    return result;

}

export default caesarCipher;