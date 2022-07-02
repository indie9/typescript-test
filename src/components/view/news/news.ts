import './news.css';
type post = {
    //  [key: string]: string | {[key: string]:string} ;
    source: { [key: string]: string };
    author: 'Al Jazeera';
    content: string;

    description: string;
    publishedAt: string;

    title: string;
    url: string;
    urlToImage: string;
};
class News {
    draw(data: post[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        if (newsItemTemp) {
            for (let idx = 0; idx < news.length; idx++) {
                let item: post = news[idx];
                console.log(item);
                const newsClone: Node = newsItemTemp.content.cloneNode(true);

                if (idx % 2) (<Element>newsClone).querySelector<HTMLElement>('.news__item')!.classList.add('alt');

                (<Element>newsClone).querySelector<HTMLElement>('.news__meta-photo')!.style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                if (item.source) {
                    (<Element>newsClone).querySelector('.news__meta-author')!.textContent =
                        item.author || item.source.name;
                }

                (<Element>newsClone).querySelector('.news__meta-date')!.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                (<Element>newsClone).querySelector('.news__description-title')!.textContent = item.title;
                (<Element>newsClone).querySelector('.news__description-source')!.textContent = item.source.name;
                (<Element>newsClone).querySelector('.news__description-content')!.textContent = item.description;
                (<Element>newsClone).querySelector('.news__read-more a')!.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        }
        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;
