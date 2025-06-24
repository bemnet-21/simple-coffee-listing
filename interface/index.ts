export interface Coffee {
    id: number
    name: string
    image: string
    price: number
    rating: number
    voting: number
    popular: boolean
    available: boolean
}
export interface CardProps {
    data: Coffee
    available: boolean
}