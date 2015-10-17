'use strict';

var GLOBAL_SINGLETON = 'global-singleton';
var VERSION = '0.1.0';

function getInstance(name, creater) {
    var dict = process[GLOBAL_SINGLETON];
    if (!dict) {
        dict = {};
        process[GLOBAL_SINGLETON] = dict;
    }
    var instance = dict[name];
    if (!instance) {
        if (typeof(creater) === 'function') {
            instance = creater();
        } else if (typeof(creator) === 'string') {
            instance = require(creator);
        } else {
            instance = require(name);
        }
        dict[name] = instance;
    }
    return instance;
}

function clear(name) {
    var dict = process[GLOBAL_SINGLETON];
    if (dict) {
        delete(dict[name]);
    }
}

module.exports = getInstance;
module.exports.clear = clear;
module.exports.version = VERSION;
