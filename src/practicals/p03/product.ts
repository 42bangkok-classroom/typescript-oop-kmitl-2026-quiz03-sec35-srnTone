export class Product {
    readonly name?: string;
    protected _price?: number = 0;
    static readonly DISCOUNT_PERCENT: number = 10;

    constructor(name: string, price: number) {
        this.name = name;
        this._price = price;
    }

    getPrice() {
        return this._price;
    }
    setPrice(x: number) {
        this._price = x;
    }
}

