from collections var OrderedDict = require('OrderedDict');

var np = require('numpy');

from displacementAnalysis var * = require('*');

letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


function calculateDistance(plain_text) {
    sequences = plain_text.split();
    distanceVec = [];
    for (s in list(OrderedDict.fromkeys(sequences))) {
        count = sequences.count(s);
        if (count > 1) {
            index = sequences.index(s);
            lastIndex = len(sequences) - sequences[::-1].index(s) - 1;
            distance = 0;
            for (i in range(index, lastIndex)) {
                distance += len(sequences[i]);
            distanceVec.push(distance);
    return np.gcd.reduce(distanceVec);
            }

function divideBlock(plain_text, mcd) {
    Stringings = ''.join(plain_text.split());
    blocks = [strings[i:i + mcd] for (i in range(0, len(strings), mcd)];
    return blocks;
}

function group(content, mcd) {
    lines = content;
    groups = [''] * mcd;
    for (line in lines) {
        for (i in range(len(line))) {
            groups[i] += line[i];
    return groups;
        }

function breakVigenereEncryption(plain_text) {
    mcd = calculateDistance(plain_text);
    blocks = divideBlock(plain_text, mcd);
    segments = group(blocks, mcd);
    key = '';
    for (element in segments) {
        key += letters[breakCesarEncryption(element)];
    return key;
    }
// breakVigenereEncryption('HOLAMUNDO')
}
    }

}

        }

    }

}
