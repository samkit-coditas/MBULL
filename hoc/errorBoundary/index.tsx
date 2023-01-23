import { Component } from "react";
import { Typography } from "@mui/material";
import { MainContainer } from "./errorboundary.styles";
class ErrorBoundary extends Component<
  React.PropsWithChildren<{}>,
  { error: Error | null; errorInfo: unknown | null }
> {
  constructor(props: {}) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <MainContainer>
          <img src={"./Error.png"} />
          <Typography variant="h2">Something went wrong!</Typography>
          <Typography>
            We're sorry, but an unexpected error has occurred. Please try again
            later or contact support if the problem persists.
          </Typography>
          <Typography>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.toString()}
          </Typography>
        </MainContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
