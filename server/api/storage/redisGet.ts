export default defineEventHandler(async (event) => {
    const storage = global.storage;
    let req = await readBody(event)

    if (!storage) {
        console.error('Storage is not available');
        throw new Error('Storage is not available');
    }

    try {
        // const item = await storage.getItem(req.authToken);
        // console.log('Retrieved item from storage:', item);

        return await storage.getItem(req.authToken);
    } catch (error) {
        console.error('Error handling storage:', error);
        throw error;
    }
});