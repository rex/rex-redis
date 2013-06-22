/*###############################################################################
#
#             _ __ _____  __   Welcome to the      _
#            | '__/ _ \ \/ / ___ __ ___ ____  _ __| |_ ___ _ __
#            | | |  __/>  < / -_) _/ _ (_-< || (_-<  _/ -_) '  \
#            |_|  \___/_/\_\\___\__\___/__/\_, /__/\__\___|_|_|_|
#                                          |__/
#
# The rex-* ecosystem is a collection of like-minded modules for Node.js/NPM
#   that allow developers to reduce their time spent developing by a wide margin.
#
#   Header File Version: 0.0.1, 06/08/2013
#
# The MIT License (MIT)
#
# Copyright (c) 2013 Pierce Moore <me@prex.io>
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
#######*/
var cli = require('rex-shell')
  , exec = require('rex-exec')
  , utils = require('rex-utils')
  , _ = require('rex-utils')._
  , commands = require('rex-utils').commands
  , fs = require('fs')
  , path = require('path')
  , package = require('../package')
  , helpParams = {
    name : package.name,
    description : package.description,
    usage : 'rex-redis [clear|count|help]',
    args : {
      clear : 'Clear all active keys/objects in Redis cache.',
      count : 'Count all active keys/objects in Redis cache.'
    }
  }

cli.config.appName("rex-redis")

exports.clear = clear = function() {
  exec( commands.redis.clear, function(stderr, stdout) {
    if(stderr)
      cli.error(stderr)
    else if(stdout)
      cli.success(stdout)
    else
      cli.error("Redis command failed. Please try again.")
  })
}

exports.count = count = function() {
  exec( commands.redis.count, function(stderr, stdout) {
    if(stderr)
      cli.error(stderr)
    else if(stdout)
      cli.success(stdout)
    else
      cli.error("Redis command failed. Please try again.")
  })
}

exports.init = function() {
  if(_.contains(process.argv,'clear'))
    clear()
  else if(_.contains(process.argv,'count'))
    count()
  else
    utils.help(helpParams)
}
