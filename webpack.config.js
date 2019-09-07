const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const path = require ('path');


module.exports = {
    resolve: {
        alias: {
            scss: path.resolve(__dirname, 'src/scss/'),
            endpath: path.resolve(__dirname, 'src/dist/'),
            Header: path.resolve(__dirname, 'src/components/headerComponent/'),
            Footer: path.resolve(__dirname, 'src/components/footerComponent/'),
            pages: path.resolve(__dirname, 'src/components/pages/'),
           

            

        },
    },
    
    entry: [
        "react-hot-loader/patch",
     './src/index.js'],

    output: {
        
            
        publicPath: path.join(__dirname + './dist/newjs/'),
        filename: 'bundle.js'
    },
    devServer : {
        inline: true,
        port: 8080
    },


    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use:  {

        
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/react'],
                },

            }, 
        },
    
            //css and scss
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }, 
                    {
                        loader: 'postcss-loader'
                    },
                        {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        },
                    }
                    
                ],   
            
                

            },
    
        ]
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            title: 'Custom Template',
            filename: './src/dist/index2.html',
            template: './src/index.html',
            hash: true
        })
    ],
};