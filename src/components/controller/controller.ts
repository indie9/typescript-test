import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: { [key: string]: string | [] }) => void) {
        let res: { endpoint: string; options?: object } = { endpoint: 'sources' };
        super.getResp(res, callback);
    }

    getNews(e: Event, callback: (data: { [key: string]: string | [] }) => void) {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer) {
            if (target instanceof Element) {
                if (target.classList.contains('source__item')) {
                    const sourceId: string | null = target.getAttribute('data-source-id');
                    if (newsContainer instanceof Element) {
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            newsContainer.setAttribute('data-source', sourceId ? sourceId : '');
                            super.getResp(
                                {
                                    endpoint: 'everything',
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                    }
                    return;
                }

                target = target.parentNode;
            }
        }
    }
}

export default AppController;
