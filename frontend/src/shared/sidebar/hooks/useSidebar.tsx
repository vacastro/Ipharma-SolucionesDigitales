import { createContext, useContext, useState, type ReactNode } from 'react';
import type { SidebarMenuItem } from '../Sidebar';

interface SidebarContextType {
  sidebarItems: SidebarMenuItem[];
  setSidebarItems: (items: SidebarMenuItem[]) => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarItems, setSidebarItems] = useState<SidebarMenuItem[]>([]);

  return (
    <SidebarContext.Provider value={{ sidebarItems, setSidebarItems }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
};