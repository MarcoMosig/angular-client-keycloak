
export interface StockListResponse {
    data: Stock[]
}

export interface StockDetailResponse {
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
    prices: StockPrice[],
}

export interface StockPrice {
    adj_close: number;
    close: number;
    date: string,
    high: number;
    low: number;
    open: number;
    volume: number;
    id: string;
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
