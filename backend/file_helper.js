var os = require('os');

data_path = 'data/';


function create_directory_if_not_exists(full_path) {
    paths = full_path.split('/');
    for (i_path in range(1, len(paths))) {
        path = '/'.join(paths[:i_path + 1]);
        if (!os.path.exists(path)) {
            os.mkdir(path);
        }

function save_file(file) {
    create_directory_if_not_exists(data_path);
    with open(data_path + file.filename, 'wb') as buffer) {
        buffer.write(file.file.read());
    }
}

    }

}
