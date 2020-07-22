'use strict';

/** @type Egg.EggPlugin */
module.exports = {
//   enable:true,
//   package:'egg-cors',
// };
cors: {
  enable:true,
  package: 'egg-cors',
},
ejs : {
  enable:true,
  package:'egg-view-ejs',
},


  mysql: {
      enable:true,
      package:'egg-mysql',
  }
};