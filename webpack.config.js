module.exports = {
    entry: "./assets/js/entry.js",
    output: {
        path: __dirname,
        filename: "assets/js/bundle.js"
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