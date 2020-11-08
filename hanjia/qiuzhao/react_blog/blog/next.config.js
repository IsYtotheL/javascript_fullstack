const withCss = require('@zeit/next-css')

//配置文件
if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}


module.exports = withCss({})