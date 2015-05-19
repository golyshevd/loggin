'use strict';

var recorders = [
    'internal',
    'debug',
    'note',
    'info',
    'log',
    'warn',
    'error',
    'fatal'
];

/**
 * @class Logger
 *
 * @param {Logging} logging
 * @param {Array<String>} context
 * */
function Logger(logging, context) {

    /**
     * @public
     * @memberOf {Logger}
     * @property
     * @type {Array<String>}
     * */
    this.context = context;

    /**
     * @public
     * @memberOf {Logger}
     * @property
     * @type {Logging}
     * */
    this.logging = logging;
}

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @constructs
 * */
Logger.prototype.constructor = Logger;

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @param {String} name
 *
 * @returns {Logger}
 * */
Logger.prototype.bind = function (name) {
    return new Logger(this.logging, this.context.concat(name));
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @param {Object} obj
 * */
Logger.prototype.setup = function (obj) {
    recorders.forEach(function (name) {
        obj[name] = this[name].bind(this);
    }, this);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.internal = function $Logger$prototype$internal() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'INTERNAL', this.internal, args);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.debug = function $Logger$prototype$debug() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'DEBUG', this.debug, args);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.note = function $Logger$prototype$note() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'NOTE', this.note, args);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.info = function $Logger$prototype$info() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'INFO', this.info, args);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.log = function $Logger$prototype$log() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'LOG', this.log, args);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.warn = function $Logger$prototype$warn() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'WARNING', this.warn, args);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.error = function $Logger$prototype$error() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'ERROR', this.error, args);
};

/**
 * @public
 * @memberOf {Logger}
 * @method
 *
 * @returns {Boolean}
 * */
Logger.prototype.fatal = function $Logger$prototype$fatal() {
    var argc = arguments.length;
    var args = new Array(argc);
    var i;

    for (i = 0; i < argc; i += 1) {
        args[i] = arguments[i];
    }

    return this.logging.record(this.context, 'FATAL', this.fatal, args);
};

module.exports = Logger;
