const browserEnv = require('browser-env');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

browserEnv();

enzyme.configure({
  adapter: new Adapter(),
});
