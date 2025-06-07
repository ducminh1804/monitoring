import React from "react";
import { useLocation } from "react-router";
import ValveBreaker from "../ValveBreaker/ValveBreaker";

export default function ValveBreakerDetail() {
  const location = useLocation();
  const data = location.state || {};
  return <ValveBreaker data={data} />;
}
