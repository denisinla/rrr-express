### React Boilerplate


Quick react/react-router package for fast development.

_uses create-react-app + react-router + express_

### Adding scss support

``npm install sass-loader node-sass --save-dev``
``npm run eject``

Edit webpack.config.dev.js in loaders array to reflect:

```
{
    test: /\.js$/,
    include: paths.appSrc,
    loader: 'babel',
    query: require('./babel.dev')
  }
```
