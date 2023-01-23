import { MainContainer } from "./stockCardSkeleton.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack, Typography, CardActions, Button, Box } from "@mui/material";

const StockCardSkeleton = ({ cards }: any) => {
  return (
    <MainContainer>
      <Box className={"cardContainer"}>
        <Box>
          <Stack
            direction="row"
            className="cardContent"
            data-testid="stockCard"
          >
            <Typography className="text" gutterBottom>
              <Skeleton className="bone" />
            </Typography>
            <Stack direction="row" spacing={4}>
              <Typography component="div">
                <Skeleton className="bone" />
              </Typography>
              <Typography component="div">
                <Skeleton className="bone" />
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box className="cardActions">
          <div>
            <Skeleton className="bone" />
          </div>
          <div>
            <Skeleton className="bone" />
          </div>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default StockCardSkeleton;
