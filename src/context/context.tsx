import { createContext } from "react"
import { DataContextProps } from "../interfaces/DataContextProps"

const DataContext = createContext<DataContextProps | undefined>(undefined)

export default DataContext