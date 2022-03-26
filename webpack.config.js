const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js')

const productionConfig = require('./webpack.production.config.js')

const developmentConfig = require('./webpack.development.config.js')

module.exports = function (env) {
    if (env.depelopment) {
        return merge(commonConfig, developmentConfig);
    } else {
        return merge(commonConfig, productionConfig);
    }
}