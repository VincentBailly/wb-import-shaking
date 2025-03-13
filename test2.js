async function main() {
    const { foo } = await import('./foo.js')
    console.log({ foo })
}

main();