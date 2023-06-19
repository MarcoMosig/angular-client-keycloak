
export interface StockResponse {
    stocks: Stock[]
}

export interface Stock {
    id: string,
    company: string;
    wkn: string;
    isin: string;
    symbol: string;
    picture: string;
    sector: string;
    DIVe: string;
    KGVe: number;
    country: string;
    market_cap: number;
    currency: string;
    price: number;
}

export interface StockDto {
    id: string,
    company: string;
    wkn: string;
    isin: string;
    symbol: string;
    picture: string;
    sector: string;
    DIVe: string;
    KGVe: number;
    country: string;
    market_cap: number;
    currency: string;
    price: number;
}
