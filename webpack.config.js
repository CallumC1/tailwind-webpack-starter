const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader" ,
                    "postcss-loader",
                    // if using SASS or SCSS place at bottom of list.
                ]
            },
        ],
    },
    
    devtool: 'source-map',
}