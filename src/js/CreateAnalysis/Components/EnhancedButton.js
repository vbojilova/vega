import Button from "@material-ui/core/Button";
import React from "react";

const EnhancedButton = props => {
  return (
    <Button
      onClick={() => props.click()}
      size="large"
      variant="contained"
      style={props.style}
    >
      {props.text}
    </Button>
  );
};
export default EnhancedButton;