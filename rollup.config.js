import replace    from 'rollup-plugin-replace';
import resolve    from 'rollup-plugin-node-resolve';
import commonjs   from 'rollup-plugin-commonjs';
import multiEntry from "rollup-plugin-multi-entry";
import babel      from 'rollup-plugin-babel';
import builtins   from 'rollup-plugin-node-builtins';
import globals    from 'rollup-plugin-node-globals';
import uglify     from 'rollup-plugin-uglify';
import livereload from 'rollup-plugin-livereload'
import postcss    from 'rollup-plugin-postcss';
import json       from 'rollup-plugin-json';

let env = require('dotenv').config();

module.exports = {
    input: [
        "src/js/main.js"
        , "src/js/**/*.js"
    ],
    // external: [
    //     'styled-components'
    // ],
    output: {
        name: 'main',
        file: 'public/javascripts/main.js',
        format: "iife",
        sourcemap: true,
        // globals: {
        //     'styled-components': 'styledComponents'
        // }
    },
    plugins: [
        json({
            compact: true
        }),
        postcss({
            extensions: [ '.css' ],
            onImport: (id) => {
                console.log('Rollup PostCSS import for ' + id);
            }
        }),
        replace({
            'process.env.NODE_ENV':JSON.stringify('development')
        }),
        multiEntry(),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs({
            include: [
                'node_modules/**'
            ],
            namedExports: {
                'node_modules/react/react.js': [
                    'Children'
                    , 'Component'
                    , 'PropTypes'
                    , 'createElement'
                ],
                'node_modules/react/index.js': [
                    'Component'
                    , 'PureComponent'
                    , 'Fragment'
                    , 'Children'
                    , 'createElement'
                    , 'useContext'
                    , 'useState'
                    , 'useEffect'
                    , 'Suspense'
                    , 'useMemo'
                    , 'memo'
                    , 'createContext'
                    , 'useRef'
                    , 'useCallback'
                    , 'cloneElement'
                    , 'useLayoutEffect'
                    , 'isValidElement'
                    , 'createRef'
                ],
                'node_modules/react-is/index.js': [
                    'isElement'
                    , 'isValidElementType'
                    , 'ForwardRef'
                ],
                'node_modules/react-dom/index.js': [
                    'render'
                ],
                // 'styled-components': [
                //     'div'
                // ],
                // 'node_modules/styled-components/dist/styled-components.js': [
                //     'div'
                // ],
                // "node_modules/styled-components/dist/styled-components.cjs.js": [],
                // "node_modules/styled-components/dist/styled-components.esm.js": [],
            }
        }),
        builtins(),
        globals(),
        process.env.SENNO_ENV === 'development' ? livereload("public") : void 0,
    ]
}
console.log('Iniciando gulp...' + new Date())