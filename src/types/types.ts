export enum LinkButtons {

}

export enum AppPages {

}

export enum FetchStatus {
    
}
export type TStorage = {
    [key: string]: any,
};

export type TProduct = {
    id: string;
    type: string;
    name: string;
    price: {
        currency: string;
        value: number;
    };
    color: {
        name: string;
        hex: string;
    };
    availableSizes: string[];
    description: string;
    images: string[];
};