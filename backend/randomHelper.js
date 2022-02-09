var string = require('string');
var random = require('random');


function generate_random_string(S=8) {
    ran = ''.join(random.choices(string.ascii_uppercase + Stringing.digits, k=S));
    return String(ran);
}

function generate_random_binary_string(S=8) {
    list_ = '01';
    ran = ''.join(random.choices(list_, k=S));
    return String(ran);

}
