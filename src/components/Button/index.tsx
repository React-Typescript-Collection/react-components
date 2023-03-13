import React from "react";
import "../../stylesheets/buttons.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "default" | "danger";
  disableShadow?: boolean;
  size?: "small" | "medium" | "large";
  startIcon?: string;
  endIcon?: string;
  content?: React.ReactNode;
}

/**
 * Reusable button component.
 * Accepts props for variant, color, shadow, disabled, size, start and end icons, and content.
 * Passes any additional props to the button element.
 */
const Button = ({
  variant = "contained",
  color = "default",
  disableShadow = false,
  size = "medium",
  startIcon,
  endIcon,
  content = "Default",
  ...rest
}: ButtonProps) => {
  const buttonStyle = `button ${variant} ${color ? color : ""} ${
    disableShadow ? "no-shadow" : ""
  } ${size}`;

  return (
    <button className={buttonStyle} {...rest}>
      {startIcon && (
        <i className="material-icons" id="start_icon">
          {startIcon}
        </i>
      )}
      {content}
      {endIcon && (
        <i className="material-icons" id="end_icon">
          {endIcon}
        </i>
      )}
    </button>
  );
};

export default Button;
