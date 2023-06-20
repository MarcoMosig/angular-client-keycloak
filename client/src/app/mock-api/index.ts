import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { FinanceMockApi } from 'app/mock-api/dashboards/finance/api';
import {StockPriceMockApi} from "./stocks/api";

export const mockApiServices = [
  NavigationMockApi,
  FinanceMockApi,
  StockPriceMockApi,
]
