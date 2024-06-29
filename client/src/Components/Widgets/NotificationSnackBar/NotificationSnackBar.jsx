import React from "react";

// Material ui (Mui)
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

const NotificationSnackBar = ({ status, message }) => {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (status) {
      enqueueSnackbar(message, { variant: status });
    }
  }, [status, message, enqueueSnackbar]);

  return null;
};

export default NotificationSnackBar;
