import './sources.css';

class Sources {
    draw(data: { [key: string]: string }[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone: Node = sourceItemTemp.content.cloneNode(true);

                (<Element>sourceClone).querySelector('.source__item-name')!.textContent = item.name;

                (<Element>sourceClone).querySelector('.source__item')!.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            });

            document.querySelector('.sources')!.append(fragment);
        }
    }
}

export default Sources;
