import { Typography } from "@material-ui/core";
import { fonts, colors } from "./globalStyles";

export function BodyText({ children, bold, color, other, small }) {
  return (
    <Typography
      style={{
        ...fonts.bodyText,
        color: color || colors.bodyText,
        fontWeight: bold ? 600 : 400,
        fontSize: small ? "0.7em" : fonts.bodyText.fontSize,
        ...other,
      }}
    >
      {children}
    </Typography>
  );
}

export function MainBodyText({ children, bold, color, other }) {
  return (
    <Typography
      style={{
        ...fonts.mainBodyText,
        color: color || colors.bodyText,
        fontWeight: bold ? 600 : 400,
        ...other,
      }}
    >
      {children}
    </Typography>
  );
}

export function Heading7({ children, bold, color, other }) {
  return (
    <Typography
      style={{
        ...fonts.heading7,
        color: color || colors.bodyText,
        fontWeight: bold ? 700 : 600,
        ...other,
      }}
    >
      {children}
    </Typography>
  );
}

export function Heading6({ children, bold, color, other }) {
  return (
    <Typography
      style={{
        ...fonts.heading6,
        color: color || colors.bodyText,
        fontWeight: bold ? 700 : 600,
        ...other,
      }}
    >
      {children}
    </Typography>
  );
}

export function Heading5({ children, bold, color, other }) {
  return (
    <Typography
      style={{
        ...fonts.heading5,
        color: color || colors.bodyText,
        fontWeight: bold ? 700 : 600,
        ...other,
      }}
    >
      {children}
    </Typography>
  );
}

export function Heading4({ children, bold, color, other }) {
  return (
    <Typography
      style={{
        ...fonts.heading4,
        color: color || colors.bodyText,
        fontWeight: bold ? 700 : 600,
        ...other,
      }}
    >
      {children}
    </Typography>
  );
}
