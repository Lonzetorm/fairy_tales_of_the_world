export default defineEventHandler(async (event) => {
    const storage = global.storage;

    if (!storage) {
        console.error('Storage is not available');
        throw new Error('Storage is not available');
    }

    try {

        await storage.setItem('foou', 'bakkraggggm');
        console.log('Value set successfully');


        const item = await storage.getItem('foou');
        console.log('Retrieved item from storage:', item);


        return { item };
    } catch (error) {
        console.error('Error handling storage:', error);
        throw error;
    }
});