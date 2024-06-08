import { Fragment } from "react";
import "./App.css";
import { Container } from "@mui/material";
import MainContent from './Components/MainContent';

function App() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Container maxWidth="xl">
          <MainContent></MainContent>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
