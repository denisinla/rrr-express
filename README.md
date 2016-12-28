### React Boilerplate


Quick react/react-router package for fast development.

_uses create-react-app + react-router + express_

### Adding scss to project (this will require you to eject)

1: ``npm install sass-loader node-sass --save-dev``

2: ``npm run eject``

3: Edit webpack.config.dev.js in loaders array to reflect:

```
{
    test: /\.js$/,
    include: paths.appSrc,
    loader: 'babel',
    query: require('./babel.dev')
  }
```
