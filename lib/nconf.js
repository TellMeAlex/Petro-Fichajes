
const nconf = require('nconf')
const options = { lowerCase: true, parseValues: true, separator: '_' }
const env = process.env.NODE_ENV || 'local'
const config = nconf.env(options).file(`./config/${env}.json`)

module.exports = config
