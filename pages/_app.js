import App from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/global.css";

const theme = {
  colors: {
    primary: "#0070f3",
    tomato: "#FF6347",
    white: "#fff",
    darkslategray: "#2F4F4F",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
