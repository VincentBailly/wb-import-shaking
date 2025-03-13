async function main() {
    const { foo } = await import(/* webpackExports: ["foo"] */'./foo.js')
    console.log({ foo })
}

main();