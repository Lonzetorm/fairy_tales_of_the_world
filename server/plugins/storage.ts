import { createStorage } from 'unstorage';
import redisDriver from 'unstorage/drivers/redis';

export default defineNitroPlugin((nitroApp) => {
    const config = useRuntimeConfig();

    const storage = createStorage({
        driver: redisDriver({
            url: `redis://${config.redisHost || 'localhost'}:6379`,
}),
});

    if (!storage) {
        console.error('Storage initialization failed');
    } else {
        console.log('Storage initialized successfully');
    }


    global.storage = storage;
});