export default defineEventHandler(async (event) => {
    const storage = global.storage;
    let req = await readBody(event)

    if (!storage) {
        console.error('Storage is not available');
        throw new Error('Storage is not available');
    }

    try {
        await storage.setItem(req.authToken, JSON.stringify(
            {
                userId: req.userId,
                userAuthToken: req.authToken,
                name: req.userName,
                rights: req.userRights
            }
        ));
        // console.log('Value set successfully');
    } catch (error) {
        console.error('Error handling storage:', error);
        throw error;
    }
});