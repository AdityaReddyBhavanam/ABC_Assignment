/**
 * Making application url configurable either from command line and process it based on the environment
 * If Environment is not specified, it will take the default settings
 */
var configure = function () {
    this.setDefaultTimeout(3 * 10000);
};
var argv = require('yargs');
var args = argv.argv;
var environment = !!args.env ? args.env : 'default';

var getAppABCNewsUrl = function(){
  if(environment === true){
    environment = 'default';
  }
  process.env.env = environment;
  return   constantsABCNews[process.env.env.split('-')[0]].url;
};

var getAppABCRadioUrl = function(){
    if(environment === true){
        environment = 'default';
    }
    process.env.env = environment;
    return   constantsABCRadio[process.env.env.split('-')[0]].url;
};

const constantsABCNews = {
  default: {
      url: 'http://www.abc.net.au/news/'
  },
  dev: {
      url: 'http://www.abc.net.au/news/'
  }
};

const constantsABCRadio = {
    default: {
        url: 'http://www.abc.net.au/radionational/'
    },
    dev: {
        url: 'http://www.abc.net.au/radionational/'
    }
};

module.exports.getAppABCNewsUrl = getAppABCNewsUrl;

module.exports.getAppABCRadioUrl = getAppABCRadioUrl;

module.exports.configure = configure;
