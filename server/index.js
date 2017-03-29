import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

const compiler = webpack(webpackConfig);

app.use(
  webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    noInfo: true
  })
);
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () =>
  console.log(
    'This marvelous server is currently running on localhost, port 8080. For manual restart enter the "RS" command'
  ));
