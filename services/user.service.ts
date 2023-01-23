import {
  addFundsURL,
  getAllStocksURL,
  getFundsURL,
  getProfileDataURL,
  getStockChartURL,
} from "../constants/urls";
import axiosInstance from "./axios.instance";

export const getStockList = async (
  pageNumber?: number,
  sortColumns?: string,
  sortDirections?: string
) => {
  pageNumber = pageNumber || 1;
  sortColumns = sortColumns || "";
  sortDirections = sortDirections || "";
  try {
    const response = await axiosInstance.get(
      `${getAllStocksURL}?pageNumber=${pageNumber}&sortColumns=${sortColumns}&sortDirections=${sortDirections}`
    );
    return response?.data?.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProfileData = async () => {
  try {
    const response = await axiosInstance.get(getProfileDataURL);
    return response?.data?.data;
  } catch (e) {
    console.log(e);
  }
};

export const getStockChart = async (nseCode: string, feed: string) => {
  try {
    const response = await axiosInstance.get(
      `${getStockChartURL}${nseCode}?feed=${feed}`
    );
    return response?.data?.data;
  } catch (e) {
    console.log(e);
  }
};

export const addFunds = async (amount: string) => {
  try {
    const response = await axiosInstance.post(addFundsURL, amount);
    return response?.data?.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFunds = async () => {
  try {
    const response = await axiosInstance.get(getFundsURL);
    return response?.data?.data;
  } catch (e) {
    console.log(e);
  }
};
