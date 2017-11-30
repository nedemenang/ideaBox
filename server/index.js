import express from 'express';
import path from 'path';
import webpack from 'webpack';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import webpackMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import indexRoute from './routes';
import dotenv from 'dotenv';

const port = process.env.PORT || 3000;

dotenv.load();

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
const compiler = webpack(webpackConfig);
app.use(webpackMiddleWare(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

indexRoute(app);

app.get('/*', (request, result) => {
    result.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
})