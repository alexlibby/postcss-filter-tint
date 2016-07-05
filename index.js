var postcss = require('postcss');

module.exports = postcss.plugin('postcss-filter-tint', function (opts) {
    opts = opts || {};

    var sp = 'sepia(', hc = ') hue-rotate(', dg = 'deg)';

    return function (css) {
        css.walkRules(function (rule) {
            rule.walkDecls(function (decl) {
                var value = decl.value;
                if (value.indexOf('tint') !== -1) {
                    value = value.replace(/([\sa-z()])+/g, '').split(',');
                    var sepiaValue = value[0];
                    var hcValue = value[1];
                    decl.value = sp + sepiaValue + hc + hcValue + dg;
                }
            });
        });
    };
});

