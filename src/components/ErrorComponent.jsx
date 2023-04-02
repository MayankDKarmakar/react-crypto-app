import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      justifyContent={"center"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;
