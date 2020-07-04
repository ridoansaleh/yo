import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import {
  Container,
  Card,
  Title,
  Loading,
  Progress,
} from "../styles/_indexStyle";

export default function Home() {
  useEffect(() => {
    const progressEl = document.getElementById("loading-progress");
    let interval;
    if (progressEl) {
      let start = 5;
      interval = setInterval(() => {
        if (start < 100) {
          start = start + 5;
          progressEl.style.width = start + "%";
        } else {
          Router.push("/profile");
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Head>
        <title>Web Profile - Ridoan Saleh Nasution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Card>
          <Title>Welcome to My Profile</Title>
          <Loading>
            <Progress id="loading-progress" />
          </Loading>
        </Card>
      </Container>
    </div>
  );
}
