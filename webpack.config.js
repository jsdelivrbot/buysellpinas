module.exports = {
    entry: "./resources/assets/js/entry.js",
    output: {
        path: __dirname,
        filename: "./resources/assets/js/bundle.js"
    },
    module: {
       rules: [{
            test: /\.css$/,
            use: [
           "style-loader",
           "css-loader"
            ]
        }]
    }
};