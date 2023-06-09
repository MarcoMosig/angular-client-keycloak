
export interface StockResponse {
    stocks: Stock[]
}

export interface Stock {
    company: string;
    wkn: string;
    isin: string;
    symbol: string;
    sector: string;
    DIVe: string;
    KGVe: number;
    country: string;
    market_cap: number;
    currency: string;
    price: number;
}

export interface StockDto {
    company: string;
    wkn: string;
    isin: string;
    symbol: string;
    sector: string;
    DIVe: string;
    KGVe: number;
    country: string;
    market_cap: number;
    currency: string;
    price: number;
}