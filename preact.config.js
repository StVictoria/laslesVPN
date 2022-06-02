const preactCliSvgLoader = require('preact-cli-svg-loader');

export default function (config, env, helpers) {
  const css = helpers.getLoadersByName(config, 'css-loader')[0];
  css.loader.options.modules = false;
  
  preactCliSvgLoader(config, helpers);
}