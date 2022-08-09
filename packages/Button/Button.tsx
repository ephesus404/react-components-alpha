import React, { forwardRef, ReactNode, ForwardedRef } from "react";

import "./Button.css";
import { ButtonProps } from "./Button.types";

export type Ref = HTMLButtonElement;

const ButtonBase = (
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => (
  <button ref={ref} className="button" type={props.type}>
    {props.children}
  </button>
);

export const Button = forwardRef(ButtonBase);
