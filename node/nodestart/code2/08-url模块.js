var url = require('url')
var obj = url.parse('/pinglun?name=饶宇玲&message=王一博王一博王一博')
var obj2 = url.parse('/study?name=饶宇玲&message=小宇852058小宇',true)
console.log(obj)
console.log(obj2)
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?name=饶宇玲&message=王一博王一博王一博',
//   query: 'name=饶宇玲&message=王一博王一博王一博',
//   pathname: '/pinglun',
//   path: '/pinglun?name=饶宇玲&message=王一博王一博王一博',
//   href: '/pinglun?name=饶宇玲&message=王一博王一博王一博' }

//obj2
// protocol: null,
// slashes: null,
// auth: null,
// host: null,
// port: null,
// hostname: null,
// hash: null,
// search: '?name=饶宇玲&message=小宇852058小宇',
// query:
//  [Object: null prototype] { name: '饶宇玲', message: '小宇852058小宇' },
// pathname: '/study',
// path: '/study?name=饶宇玲&message=小宇852058小宇',
// href: '/study?name=饶宇玲&message=小宇852058小宇' }