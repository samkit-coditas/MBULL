import React, { createContext, useState } from "react";
import { ILayoutTypes } from "../../app/layout.types";
import Toaster from "../../components/toaster";

const ToasterContext = createContext<any>({});

const ToasterProvider = ({ children }: ILayoutTypes) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showToaster = (message: string) => {
    setMessage(message);
    setOpen(true);
  };

  const hideToaster = () => {
    setOpen(false);
  };

  return (
    <ToasterContext.Provider value={{ showToaster, hideToaster }}>
      {children}
      <Toaster open={open} message={message} onClose={hideToaster} />
    </ToasterContext.Provider>
  );
};

export { ToasterContext, ToasterProvider };
