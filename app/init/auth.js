'use strict';

/**
 * Dependencies
 */
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

/**
 * Load authentication strategies
 */
console.log('Loading authentication strategies...');
glob.sync('./app/components/auth/strategies/**/*.js')
  .forEach(strategyPath => {
    console.log(chalk.grey(' - %s'), strategyPath.replace('./app/', ''));
    require(path.resolve(strategyPath))();
  });
