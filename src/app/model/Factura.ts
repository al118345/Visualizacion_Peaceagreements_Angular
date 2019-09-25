
    export class Contract { constructor(
        public id: number,
        public name: string,
    ) { } } 

    export class Cups { constructor(
        public id: number,
        public name: string,
        public street: string,
    ) { } } 

    export class Partner { constructor(
        public id: number,
        public name: string,
        public vat: string,
    ) { } } 

    export class Pricelist { constructor(
        public id: number,
        public name: string,
    ) { } } 

    export class Tariff { constructor(
        public id: number,
        public name: string,
    ) { } } 

    export class Item { constructor(
        public amount_total: number,
        public amount_total_printable: string,
        public contract: Contract,
        public cups: Cups,
        public date: Date,
        public end_date: Date,
        public energy_consumed: number,
        public id: number,
        public number: string,
        public number_of_days: number,
        public paid: boolean,
        public partner: Partner,
        public pricelist: Pricelist,
        public start_date: Date,
        public tariff: Tariff,
    ) { } } 

    export class RootObject { constructor(
        public items: Item[],
        public limit: number,
        public n_items: number,
        public offset: number,
    ) { } } 

