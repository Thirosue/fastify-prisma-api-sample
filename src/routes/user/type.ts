export interface User {
    name: string;
}

export interface IParam {
    id: number;
}
export interface IQuery {
    name?: string;
    page: number;
    rows: number;
    order?: string;
    orderBy?: string;
}