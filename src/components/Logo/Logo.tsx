import * as React from "react";
import "./Logo.css";
import Questionmark from "./QuestionMark.svg";

export default () => (
  <div className="logo">
    <img src={Questionmark} className="logo__questionmark" alt="" />
    <div className="logo__square logo__square-1" />
    <div className="logo__square logo__square-2" />
    <div className="logo__square logo__square-3" />
    <div className="logo__square logo__square-4" />
  </div>
);
