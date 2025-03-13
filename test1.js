async function main() {
    import('./foo.js').then(({foo}) => {
        console.log({foo})
    });
}

main();