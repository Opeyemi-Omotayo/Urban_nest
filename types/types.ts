export type PropertyTypes = {
    name: string;
    propertyType: string;
    propertyInfo: string;
    location: string;
    bed: number;
    bath: number;
    measurement: number;
    price: string;
    image: string;
    id: number;
}

export type ItemsType = {
    name: string;
    propertyType: string;
    propertyInfo: string;
    location: string;
    bed: number;
    bath: number;
    measurement: number;
    price: string;
    image: string;
    id: number;
} 

export type AgentsType = {
    name: string;
    designation: string;
    image: string;
    id: number;
    duration: number;
}

export type HeroProps = {
    title: string;
    description?: string;
    buttonText?: string;
}

export type TabsTypes = {
    title: React.ReactNode;
    query: string;
  };
  
  