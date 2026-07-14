import { useState } from "react";

export type AlertType = "danger" | "success";
export type AlertT = { show: boolean; text: string; type: AlertType };

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertT>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({
    text,
    type = "danger",
  }: {
    text: string;
    type: AlertType;
  }) =>
    setAlert({
      show: true,
      text,
      type,
    });

  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "danger" });
  };

  return {
    alert,
    showAlert,
    hideAlert,
  };
};
