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
  config.keys = appInfo.name + '_1604880318331_6665';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'react-blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security={
    // scrf:{
    //   enable:false
    // },
    csrf:{enable:false},
    domainWhiteList:['*']
  };
  config.cors = {
    // origin: '*',
    origin:'http://localhost:3000',
    credentials:true,//设置cook可以跨域
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }
  return {
    ...config,
    ...userConfig,
  };
};