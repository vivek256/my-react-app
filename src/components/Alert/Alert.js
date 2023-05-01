// Snack Component - https://material-ui.com/components/snackbars/
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";

const Alert = ({state}) => {
  const [ alert, setAlert ] = useState(state);

  const handleCloseAlert = () => {
    setAlert({ 'open': false });
  };

  return (
    <Snackbar
      open={alert['open']}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;