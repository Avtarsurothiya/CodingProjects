// Setup up a React Code from Scratch
// to which displays "Breakfast Time" if
// the current time is before 12:00 in
// the morning, "Lunch Time" if the time is
// between 12:00 to 18:00, and "Dinner Time".

// if the current time is after 18:00.
// Sample Output at 15:00.
import moment from "moment";
import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import LunchProject from "./App";
import BreakFast from "./App";
import Lunch from "./App";
import Dinner from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <LunchProject />
  </StrictMode>,
  rootElement
);
