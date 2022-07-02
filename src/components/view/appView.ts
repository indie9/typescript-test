import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    sources;
    news;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { [keys: string]: string | [] }) {
        const values = data?.articles ? data?.articles : [];
        if (Array.isArray(values)) {
            this.news.draw(values);
        }
    }

    drawSources(data: { [keys: string]: string | [] }) {
        const values = data['sources'] ?? [];

        if (Array.isArray(values)) {
            this.sources.draw(values);
        }
    }
}

export default AppView;
