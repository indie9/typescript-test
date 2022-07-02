import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd048541b3626400981630bb4cee5759f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
