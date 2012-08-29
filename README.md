i18nmodule
==========

A plugin for [RequireJS](http://requirejs.org) for loading dymanic modules based on locale.

If a locale is defined in the requires config, that locale will be used, otherwise, the plugin will attempt to determine the locale from the browser.

## Config

This plugin requires that you define a config. Your config will looks something like this:

```js
require.config({
    i18nmodule: {
        modulenameA: {
            root: ['url/to/module'],
            'en-US': ['url/to/another/module'],
            'en-GB': ['url/to/even/another/module'],
        },
        anothermodulename: {
            'en-NZ': ['url/to/module']
        }
    }
});
```

## Call Example

```js
define([i18nmodule!modulenameA], function() {
    
})
```

## Author

[Aaron Gloege](http://www.aarongloege.com/)



## License

Released under the MIT license.