export default defineEventHandler(async (event) => {
    const { files, section } = await readBody<{ files: File[], section: string }>(event)

    const removeExt = ((str) => {
        let lastDotIndex = str.lastIndexOf('.');

        return str.slice(0, lastDotIndex);
    })

    for ( const file of files ) {
        await storeFileLocally(
            file,         // the file object
            removeExt(file.name),            // you can add a name for the file or length of Unique ID that will be automatically generated!
            '/' + section  // the folder the file will be stored in
        )
    }

    return 'success!'
})

interface File {
    name: string
    content: string
}