i18nmodule
==========

A plugin for [RequireJS](http://requirejs.org) for loading dynamic modules based on locale. the i18n plugin for RequireJS works great for localizing text, but what if you need to localize functionality? i18nmodule fills that role.

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

If a locale is defined in the config, that locale will be used. If the locale is not defined, the plugin will attempt to determine the locale from the browser.

## Call Example

```js
define([i18nmodule!modulenameA], function() {
    // Dependancies will be loaded from modulenameA.
    // If the locale defined in requirejs's config, or the browser's language string is not in modulenameA, then modulenameA.root will be used.
    // If modulenameA.root wasn't defined, then no modules would be loaded.
})
```

## Optimizer
The plugin will include all dependancies defined in a module, regardless of the current locale. This will ensure all modules are optimized for best performance.

## Author

[Aaron Gloege](http://www.aarongloege.com/)

## License

Released under the MIT license.