"use client";

import { useContext, useEffect, useReducer } from "react";
import { debounce } from "lodash";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import Chart from "../../components/chart";
import SearchBar from "../../components/searchBar";
import StockCard from "../../components/stockCard";
import SortMenu from "../../components/sortMenu";
import StockCardSkeleton from "../../components/stockCard/StockCardSkeleton";
import SwipeableEdgeDrawer from "../../components/swipeableDrawer";
import MobileStockReports from "../../components/mobileStockReports/mobileStockReports";

import { LanguageContext } from "../../hoc/languageProvider";

import { getStockChart, getStockList } from "../../services/user.service";

import { MainContainer } from "./dashboard.style";
import { dashboardInitialState, dashboardReducer } from "./dashboard.reducer";
import { useWindowWidth } from "@react-hook/window-size";

const Dashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, dashboardInitialState);
  const {
    chartData,
    chartDataFilter,
    page,
    myInterval,
    selectedStockData,
    data,
    isDrawerOpen,
  } = state;

  const { localString } = useContext(LanguageContext);

  const width = useWindowWidth();

  const stockInformationItems = [
    {
      title: "NSE",
      value: chartData?.nseCode ? chartData?.nseCode : "N/A",
    },
    {
      title: "Open",
      value: chartData?.todayOpen
        ? chartData?.todayOpen.slice(-1)[0].todayOpen
        : "N/A",
    },
    {
      title: "LTP",
      value: chartData?.lastTradedPrice
        ? chartData?.lastTradedPrice.slice(-1)[0].lastTradedPrice
        : "N/A",
    },
    {
      title: "Todays High",
      value: chartData?.todayHigh
        ? chartData?.todayHigh.slice(-1)[0].todayHigh
        : "N/A",
    },
    {
      title: "Todays Low",
      value: chartData?.todayLow
        ? chartData?.todayLow.slice(-1)[0].todayLow
        : "N/A",
    },
    {
      title: "Volume",
      value: chartData?.volume ? chartData?.volume.slice(-1)[0].volume : "N/A",
    },
    {
      title: "Year High",
      value: chartData?.yearHigh
        ? chartData?.yearHigh.slice(-1)[0].yearHigh
        : "N/A",
    },
    {
      title: "Year Low",
      value: chartData?.yearLow
        ? chartData?.yearLow.slice(-1)[0].yearLow
        : "N/A",
    },
    {
      title: "Day Change",
      value: chartData?.dayChange
        ? chartData?.dayChange.slice(-1)[0].dayChange
        : "N/A",
    },
  ];

  const handleSort = async (
    sortCriteria: { [key: string]: "asc" | "desc" | null },
    closeSortMenuCallBack: () => void
  ) => {
    const sortColumns = Object.keys(sortCriteria)
      .filter((x) => {
        return sortCriteria[x] != null;
      })
      .join(",");

    let sortDirections: any = [];
    Object.values(sortCriteria).forEach((x) =>
      x === "asc"
        ? sortDirections.push("1")
        : x === "desc"
        ? sortDirections.push("-1")
        : null
    );

    sortDirections = sortDirections.join(",");
    try {
      const response = await getStockList(
        undefined,
        sortColumns,
        sortDirections
      );
      if (response) {
        dispatch({ type: "SET_DATA", payload: response });
        dispatch({
          type: "UPDATE_SELECTED_STOCK_DATA",
          payload: response.stocks[0],
        });
      }
      closeSortMenuCallBack();
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = () => {
    dispatch({ type: "SET_PAGE", payload: page + 1 });
  };

  const fetchData = async (pageNumber: number) => {
    try {
      const response = await getStockList(pageNumber);
      if (response) {
        dispatch({ type: "SET_DATA", payload: response });
        dispatch({
          type: "UPDATE_SELECTED_STOCK_DATA",
          payload: response.stocks[0],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = debounce((e: string) => {
    dispatch({ type: "UPDATE_SEARCH_TERM", payload: e });
  }, 150);

  const toggleDrawer = (newOpen: boolean) => () => {
    dispatch({ type: "TOGGLE_DRAWER", payload: newOpen });
  };

  const updateSelectedStock = async (data: any) => {
    dispatch({ type: "UPDATE_SELECTED_STOCK_DATA", payload: data });
    dispatch({
      type: "UPDATE_COMPANY_NAME",
      payload: data.companyName as string,
    });

    if (width < 768) {
      toggleDrawer(true)();
    }
  };

  const fetchSelectedStockGraph = async () => {
    const response = await getStockChart(
      selectedStockData?.nseCode,
      chartDataFilter
    );
    dispatch({ type: "UPDATE_CHART_DATA", payload: response });
  };

  const updateChartDataFilter = (filter: string) => {
    dispatch({ type: "UPDATE_CHART_DATA_FILTER", payload: filter });
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    if (width > 768) {
      toggleDrawer(false)();
    }
  }, [width]);

  useEffect(() => {
    if (Object.keys(selectedStockData).length > 0) {
      fetchSelectedStockGraph();
      if (myInterval.length > 0) {
        myInterval.map((interval: NodeJS.Timer) => {
          clearInterval(interval);
        });
      }
    }
  }, [selectedStockData, chartDataFilter]);

  useEffect(() => {
    if (Object.keys(selectedStockData).length > 0) {
      let intervalId = setInterval(() => {
        fetchSelectedStockGraph();
      }, 10000);
      dispatch({ type: "SET_INTERVAL", payload: [...myInterval, intervalId] });
    }
  }, [chartData]);

  return (
    <MainContainer>
      <Box className="stockListContainer">
        <Box className="stockListUtilityContainer">
          <SearchBar handleSearch={handleSearch} />

          <SortMenu
            sortOptions={["companyName", "lastTradedPrice", "dayChange"]}
            onSort={handleSort}
          />
        </Box>

        <Box className="stockCardsContainer">
          {Object.keys(data).length > 0
            ? data?.stocks?.map((data: any, i: number) => {
                return (
                  <StockCard
                    data={data}
                    key={i}
                    currentStockNseCode={selectedStockData.nseCode}
                    onCardSelection={updateSelectedStock}
                  />
                );
              })
            : Array(10)
                .fill(0)
                .map((item, i) => (
                  <StockCardSkeleton key={`stockCardSkeleton:${i}`} />
                ))}
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem className="divider" />

      <Box className="stockReportsContainer">
        <Typography component="h1" variant="h3" className="stockChartTitle">
          {localString["reports"]}
        </Typography>

        {Object.keys(data).length > 0 ? (
          chartData && chartData?.lastTradedPrice?.length > 1 ? (
            <>
              <Box className="dashboardStockChartContainer">
                <Chart
                  data={chartData}
                  setFilterCallback={updateChartDataFilter}
                />
              </Box>
              <Box className="stockInformationContainer">
                <Grid container>
                  {stockInformationItems.map((x) => {
                    return (
                      <Grid
                        item
                        xs={4}
                        className="stockInformationItems"
                        key={x.title}
                      >
                        <p className="stockInformationItemsTitle">{x.title}</p>
                        <p className="stockInformationItemsValue">{x.value}</p>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </>
          ) : (
            <Box className="stockReportEmpty">
              <img src="./Empty State.png" />
              <h4>
                "No data available for the selected stock/filters. Please try
                again with different criteria."
              </h4>
            </Box>
          )
        ) : (
          <>
            <Skeleton className="stockChartSkeleton" />
            <Box className="stockInformationContainer">
              <Grid container>
                {stockInformationItems.map((x: any) => {
                  return (
                    <Grid
                      item
                      xs={4}
                      className="stockInformationItems"
                      key={x.title}
                    >
                      <Skeleton />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </>
        )}
      </Box>

      <SwipeableEdgeDrawer open={isDrawerOpen} toggleDrawer={toggleDrawer}>
        <MobileStockReports data={selectedStockData} />
        <Chart data={chartData} setFilterCallback={updateChartDataFilter} />
        <Box className="stockInformationContainer">
          {stockInformationItems.map((x, i) => {
            return (
              <div
                className={
                  i % 2 === 0
                    ? "stockInformationItems dark"
                    : "stockInformationItems"
                }
                key={`mobileStockInformationItems:${i}`}
              >
                <p>{x.title}</p>
                <p>{x.value}</p>
              </div>
            );
          })}
        </Box>
      </SwipeableEdgeDrawer>
    </MainContainer>
  );
};

export default Dashboard;
