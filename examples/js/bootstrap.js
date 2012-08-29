require.config({
    i18nmodule: {
        alert: {
            root: ['alert-hello'],
            'en-CA': ['alert-goodbye'],
            'en-GB': ['alert-welcome']
        }
    },
    paths: {
        'i18nmodule': '../../src/i18nmodule'
    }
});

require(
    [
        'i18nmodule!alert'
    ],
    function(alert) {
        'use strict';

        // alert will be null
    }
);