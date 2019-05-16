import * as JSData from 'js-data'
import * as JSDataHttp from 'js-data-http'

const store = new JSData.DataStore();

const httpAdapter = new JSDataHttp.HttpAdapter({
  basePath: process.env.VUE_APP_PORTFOLIO_API_BASE_PATH,
  beforeHTTP: function (config, opts) {
    config.headers || (config.headers = {});
    config.headers['Authorization'] = 'Token '+String(process.env.VUE_APP_PORTFOLIO_API_TOKEN);
    // Now do the default behavior
    return JSDataHttp.HttpAdapter.prototype.beforeHTTP.call(this, config, opts);
  },
});
// "store" will now use an HTTP adapter by default
store.registerAdapter('http', httpAdapter, { 'default': true });
// Define a Mapper for a "Portfolio" resource
store.defineMapper(
  'Portfolio',
  {
    endpoint: 'portfolios/api/portfolios/'
  }
);

// Define a Mapper for a "PortfolioItem" resource
store.defineMapper(
  'PortfolioItem',
  {
    endpoint: 'portfolios/api/portfolioitems/'
  }
);

export default store;
