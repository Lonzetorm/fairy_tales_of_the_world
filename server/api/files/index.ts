export default defineEventHandler(async (event) => {
    const { files } = await readBody<{ files: File[] }>(event)

    const removeExt = ((str) => {
        let lastDotIndex = str.lastIndexOf('.');

        return str.slice(0, lastDotIndex);
    })

    for ( const file of files ) {
        await storeFileLocally(
            file,         // the file object
            removeExt(file.name),            // you can add a name for the file or length of Unique ID that will be automatically generated!
            '/peoples'  // the folder the file will be stored in
        )
    }

    return 'success!'
})

interface File {
    name: string
    content: string
}