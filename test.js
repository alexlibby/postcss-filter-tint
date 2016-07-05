import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('does something', t => {
    return run( t,
        '.test { filter: tint(1, 200); }',
        '.test { filter: sepia(1) hue-rotate(200deg); }', { }
    );
});
