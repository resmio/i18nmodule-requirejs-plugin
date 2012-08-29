(function() {
    'use strict';

    /**
     * Cached locale string
     * @type {string}
     */
    var LOCALE = '';

    /**
     * Get browser localization string
     * @returns {string}
     */
    var getBrowserLocale = function() {
        if (!LOCALE) {
            LOCALE = typeof navigator === 'undefined' ?
                'root' :
                (navigator.language || navigator.userLanguage || 'root').toLowerCase()
            ;
        }
        return LOCALE;
    };

    define(function() {

        return {
            version: '1.0',

            load: function(name, req, onLoad, config) {
                config || (config = {});

                var locale = config.locale || getBrowserLocale();
                var settings = (config.i18nmodule || {})[name] || {};

                //If this is the optimizer, include all defined modules
                if (config.isBuild) {
                    var toLoad = [];
                    for (var loc in settings) {
                        if (!settings.hasOwnProperty(loc)) continue;
                        toLoad = toLoad.concat(settings[loc]);
                    }
                    req(toLoad, function() {
                        onLoad(null);
                    });
                } else {
                    if (settings[locale]) {
                        req(settings[locale], function(a) {
                            onLoad(null);
                        })
                    } else if (settings.root) { // if locale doesn't exist, include root (if defined)
                        req(settings.root, function(a) {
                            onLoad(null);
                        })
                    } else { // if locale or root doesn't exists, exit
                        onLoad(null);
                    }
                }
            }
        };
    });
}());