export const dashboardInitialState: {
  isDrawerOpen: boolean;
  data: {};
  myInterval: string[];
  searchTerm: string;
  page: number;
  chartData: string;
  chartDataFilter: string;
  companyName: string;
  selectedStockData: {};
} = {
  isDrawerOpen: false,
  data: {},
  myInterval: [],
  searchTerm: "",
  page: 1,
  chartData: <any>{},
  chartDataFilter: "",
  companyName: "",
  selectedStockData: {},
};

export const dashboardReducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { ...state, isDrawerOpen: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_INTERVAL":
      return { ...state, myInterval: action.payload };
    case "UPDATE_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "UPDATE_CHART_DATA":
      return { ...state, chartData: action.payload };
    case "UPDATE_CHART_DATA_FILTER":
      return { ...state, chartDataFilter: action.payload };
    case "UPDATE_COMPANY_NAME":
      return { ...state, companyName: action.payload };
    case "UPDATE_SELECTED_STOCK_DATA":
      return { ...state, selectedStockData: action.payload };
    default:
      return state;
  }
};
