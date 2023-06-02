
export interface StockResponse {
    message: Stock[]
}

export interface Stock {
    symbol: string;
    price: number;
}

export interface StockDto {
    symbol: string
    price: number
}