interface ShelfItem {
    title: string;
}

export default class Shelf<T extends ShelfItem> {
    private _items: Array<T> = new Array<T>();

    public add(item: T): void {
        this._items.push(item);
    }

    public getFirst(): T {
        return this._items[0];
    }

    public find(title: string): T {
        return this._items.filter(item => item.title === title)[0];
    }

    public printTitles(): void {
        this._items.forEach(item => console.log(item.title));
    }
}
