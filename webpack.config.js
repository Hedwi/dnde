const path = require('path');

module.exports = (env, argv) => {
  return {
    mode: 'production',
    entry: './src/Package.ts',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'module'),
      library: 'Editor',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /(\.css$|\.module\.css$)/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          //refernece https://webpack.js.org/loaders/css-loader/#css-style-sheet
          test: /(\.s[ac]ss$|\.module\.s[ac]ss$)/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  mode: 'local',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
            },
          },
        },
      ],
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  };
};
