var math = require('math');
var np = require('numpy');
var sympy = require('sympy');

letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


function returnMatrixFromKey(key) {
    if (math.sqrt(len(key)) == Number(math.sqrt(len(key)))) {
        matrix_key = [];
        count = 0;
        for (i in range(int(math.sqrt(len(key))))) {
            matrix_key.push([]);
            for (j in range(int(math.sqrt(len(key))))) {
                matrix_key[i].push(letters.find(key[count]));
                count += 1;
        return matrix_key;
            }

function hillAnalysisSizeKnow(plain_text, encrypted_text, m) {
    try {
        count = 0;
        matrix_plain_text = [];
        matrix_encrypted_text = [];
        for (i in range(int(len(plain_text) / m))) {
            matrix_plain_text.push([]);
            matrix_encrypted_text.push([]);
            for (j in range(m)) {
                matrix_plain_text[i].push(letters.find(plain_text[count]));
                matrix_encrypted_text[i].push(letters.find(encrypted_text[count]));
                count += 1;
        // A = BK -> K = AB^(-1)
        A = sympy.Matrix(matrix_encrypted_text[0:m]);
        B = sympy.Matrix(matrix_plain_text[0:m]);
        B = B.inv_mod(26);
        K = (B * A) % 26;
        K = np.array(K).astype(np.int64).tolist();
        return K;
    } catch () {
        return 'invalid size of key';
            }
// print(hillAnalysisSizeKnow('FRIDAY','PQCFKU',2))

        }
    }

}

        }

    }

}
