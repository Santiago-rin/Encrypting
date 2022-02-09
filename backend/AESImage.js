var jiphy = require('jiphy');
from Crypto.Cipher var AES = require('AES');
from Crypto var Random = require('Random');
from file_helper var data_path = require('data_path');
jiphy.to.javascript(;



    function encryptImageAES(image) {
        key = Random.new().read(AES.block_size);
        iv = Random.new().read(AES.block_size);
        input_file = open(data_path + image, 'rb');
        input_data = input_file.read();
        input_file.close();
    }
        cfb_cipher = AES.new(key, AES.MODE_CFB, iv);
        enc_data = cfb_cipher.encrypt(input_data);

        enc_file = open(data_path + 'encrypted.enc', 'wb');
        enc_file.write(enc_data);
        enc_file.close();
        return key, iv;


    function decryptImageAES(enc, key, iv, file_name) {
        enc_file2 = open(data_path + enc, 'rb');
        enc_data2 = enc_file2.read();
        enc_file2.close();
    }
        cfb_decipher = AES.new(key, AES.MODE_CFB, iv);
        plain_data = cfb_decipher.decrypt(enc_data2);

        // "output.jpg"
        // data_path + "decoded_" + file_name
        output_file = open(data_path + 'output.jpg', 'wb');
        output_file.write(plain_data);
        output_file.close();
        return key, iv;


    function finalAESImage(file_name) {
        a = encryptImageAES(file_name);
        decryptImageAES('encrypted.enc', a[0], a[1], file_name);
    })
