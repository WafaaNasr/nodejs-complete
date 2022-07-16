import * as Path from 'path';

const fileName = require.main ? require.main.filename : '';

export default Path.dirname(fileName);