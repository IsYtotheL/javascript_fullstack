/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595067333038_2083';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
  csrf: {
    enable:false,
    ignoreJSON:false,
  },
  domainWhiteList: ['*'], //配置白名单
};
  config.cors = {
    origin:'*',//允许所有跨域访问，注释则允许上面 白名单访问
    // credentials: true,//允许Cookie跨域
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.view = {
    mapping: {
      '.html':'ejs',
    },
  };
  config.mysql={ //这就是传统写法的创建连接池
    //database configuration 
    client:{
        //host 
        host:'localhost',
        //port 
        port:'3306',
        //username 
        user:'root',
        //password 
        password:'123456',
        //database 
        database:'diary',
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app:true,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent:false,
};

  return {
    ...config,
    ...userConfig,
  };
};

// config.security = {
//   csrf: {
//     enable:false,
//     ignoreJSON:true,
//   },
//   domainWhiteList: ['*'], //配置白名单
// };


