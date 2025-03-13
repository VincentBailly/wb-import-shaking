import path from 'path';

const config = [{
    mode: 'production',
    entry: {
        test1Bundle: './test1.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist1'),
    }
},{
    mode: 'production',
    entry: {
        test2Bundle: './test2.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist2'),
    }
}, {
    mode: 'production',
    entry: {
        test3Bundle: './test3.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist3'),
    }
}];
export default config;