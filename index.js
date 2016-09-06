'use strict';

var inquirer = require('inquirer');
var program = require('commander');
var environments = ['dev', 'prod', 'local']

inquirer.prompt([
  {
    type: 'list',
    name: 'environment',
    message: 'Select your environment',
    choices: environments
  }
]).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
