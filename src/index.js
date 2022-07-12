const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let new_keys = Object.keys(MORSE_TABLE).map(elem => '0'.repeat(10 - elem.length * 2) + `${elem.replace(/-/g, '11').replace(/\./g, '10')}`);
    let values = [].concat(...Object.entries(MORSE_TABLE)).filter((elem, index) => (index % 2 == 1) ? elem: '')
    let new_morse_table = {};
    values.forEach((letter, index) => {
    new_morse_table[new_keys[index]] = values[index]
    })
    new_morse_table['**********'] = " "

    let decoded = expr.split('');
    for (let i=10; i < expr.length * 1.1; i+= 11) {
        decoded.splice(i, 0, ' ')
    }
    return decoded.join('').trim().split(' ').map(elem => new_morse_table[elem]).join('')
}

module.exports = {
    decode
}