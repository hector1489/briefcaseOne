import { createContext, useState, ReactNode } from "react"
import { DataContextProps } from "../interfaces/DataContextProps"

const DataContext = createContext<DataContextProps | undefined>(undefined)

interface DataProviderProps {
  children: ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([])
  const [pdfFileUrl, setPdfFileUrl] = useState<string | null>(null)

  const formatNumber = (number: number) => number.toLocaleString()

  return (
    <DataContext.Provider value={{ data, setData, formatNumber, pdfFileUrl, setPdfFileUrl }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
