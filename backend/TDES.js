from pyDes var CBC, = require('CBC,');
var binascii = require('binascii');


function TDESEncrypt(s, key) {
    /*
         Cifrado DES
         : param s: cadena sin procesar
         : return: cadena encriptada, hexadecimal
     */
    secret_key = key;
    k = triple_des(secret_key, CBC, pad=null, padmode=PAD_PKCS5);
    en = k.encrypt(s, padmode=PAD_PKCS5);
    return binascii.b2a_hex(en), key;
}

function TDESDecrypt(s, key) {
    /*
         Descifrado DES
         : param s: cadena encriptada, hexadecimal
         : return: cadena descifrada
     */
    secret_key = key;
    k = triple_des(secret_key, CBC, pad=null, padmode=PAD_PKCS5);
    de = k.decrypt(binascii.a2b_hex(s), padmode=PAD_PKCS5);
    return de, key;
}
// print(TDESEncrypt('HOLAMUNDO', 'ABCDEFGHDLKEGYTOLAKTREOP'))
// print(TDESDecrypt('4540bde09edfbe27bf554f494a56f2ce', 'ABCDEFGHDLKEGYTOLAKTREOP'))
