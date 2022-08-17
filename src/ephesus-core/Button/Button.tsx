import React, { forwardRef, ForwardedRef } from "react";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export type Ref = HTMLButtonElement;

const ButtonBase = (
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => (
  <button ref={ref} className={styles.button} type={props.type}>
    {props.children}
  </button>
);

export const Button = forwardRef(ButtonBase);
