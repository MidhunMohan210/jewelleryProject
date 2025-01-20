/* eslint-disable react/prop-types */

import { LoaderProvider } from "./LoaderContext.";
import { SidebarProvider } from "./SidebarContext";

const CombinedProvider = ({ children }) => {
  return (
    <LoaderProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </LoaderProvider>
  );
};

export default CombinedProvider;
