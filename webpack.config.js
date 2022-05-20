const path = require('path');
const webpack = require('webpack');
const getPackageJson = require('./scripts/getPackageJson');

const {
    version,
    name,
    license,
    repository,
    author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *\<[^)]*\> */g, " ")}

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
    mode: "development",
    entry: './src/TibboWebSerial.js',
    output: {

        filename: 'TibboWebSerial.js',
        path: path.resolve(__dirname, 'build'),
        library: 'TibboWebSerial',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.BannerPlugin(banner)
    ]
};