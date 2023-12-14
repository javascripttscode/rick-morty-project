export interface ILocationResponse {
    info: Info;
    results: ILocation[];
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: any;
}

export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
