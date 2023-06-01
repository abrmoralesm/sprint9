import React from "react";
import { AlertContainer } from "./AlertStyled";

export function Alert({ message }) {
  return <AlertContainer>{message}</AlertContainer>;
}
