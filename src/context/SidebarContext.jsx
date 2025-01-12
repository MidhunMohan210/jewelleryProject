import  { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

// eslint-disable-next-line react/prop-types
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  console.log("isOpen", isOpen);
  console.log("isMobileOpen", isMobileOpen);
  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const makeSidebarOpen = () => {
    setIsOpen(true);
  };

  return (
    <SidebarContext.Provider 
      value={{ 
        isOpen, 
        isMobileOpen, 
        toggleSidebar, 
        toggleMobileSidebar ,
        makeSidebarOpen
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};