
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
    url: string;
}

export interface AuthContextProps {
    user: string | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export interface DataContextProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    data: any[];
    setData: React.Dispatch<React.SetStateAction<any[]>>;
    formatNumber: (number: number) => string;
  }


