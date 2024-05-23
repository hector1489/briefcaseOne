
export interface File {
  id: number
  name: string
  category: string
  url: string
}

export interface AuthContextProps {
  user: string | null
  login: (email: string, password: string) => void
  logout: () => void
}

export interface DataContextProps {
  data: any[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
  formatNumber: (number: number) => string
  pdfFileUrl: string | null
  setPdfFileUrl: React.Dispatch<React.SetStateAction<string | null>>
}


