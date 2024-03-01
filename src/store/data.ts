import {CategoryType} from '../components/products/card/Card';
export type DataType = {
    src: string
    productName: string
    ifStock: boolean
    rating: number
    price: number
    discount: null | number
    category: CategoryType
    id: number
}
export const data: DataType[] = [
    {
        productName: "Blue Diamond",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/11/13221338_1046448095421365_8269801296125833625_o.jpg",
        ifStock: true,
        rating: 4.5,
        price: 345,
        discount: null,
        category: 'selective',
        id: 1
    },
    {
        productName: "Red Melon",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2021/06/26685596_10101464517616974_7420364382352368587_o.jpeg",
        ifStock: true,
        rating: 4.2,
        price: 500,
        discount: 50,
        category: 'selective',
        id: 2
    },
    {
        productName: "Turquoise",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/11/14444859_1146487278750779_7095213636405139725_o-1.jpeg",
        ifStock: false,
        rating: 3.1,
        price: 391,
        discount: 10,
        category: 'selective',
        id: 3
    },
    {
        productName: "Wild Classic Brazilian Heckel Discus",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/01/14137985_1149885178415285_7246918206910167362_o.jpg",
        ifStock: true,
        rating: 3.1,
        price: 175,
        discount: 25,
        category: 'wild',
        id: 4
    },
    {
        productName: "Golden Lollipop Discus",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/02/Golden20Lollipop205.0202.jpg",
        ifStock: true,
        rating: 3.1,
        price: 259,
        discount: null,
        category: 'selective',
        id: 5
    },
    {
        productName: "Wild Mangal Discus",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/02/Mangal-2.jpg",
        ifStock: true,
        rating: 3.1,
        price: 391,
        discount: null,
        category: 'wild',
        id: 6
    },
    {
        productName: "F1 Ica Red Discus",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/10/3a1da0_4f699f7e5cdc455f8429a5a3c91964a9mv2_d_4032_3024_s_4_2.jpg",
        ifStock: true,
        rating: 3.1,
        price: 159,
        discount: 3,
        category: 'wild',
        id: 7
    },
    {
        productName: "Wild Brazilian Blue Heckel Discus",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/02/38473807_2253715281335114_3975187301272649728_n.jpg",
        ifStock: true,
        rating: 3.1,
        price: 159,
        discount: 3,
        category: 'wild',
        id: 8
    },
    {
        productName: "Royal Heckel Cross Discus",
        src: "https://discuscom.b-cdn.net/wp-content/uploads/sites/11/2019/06/heckel_royal.jpg",
        ifStock: true,
        rating: 3.1,
        price: 159,
        discount: 3,
        category: 'selective',
        id: 9
    },
]

export function getNewPrice(discount: number | null, price: number) {
    if (discount !== null) return Math.ceil(price * (1 - discount / 100))
    return price
}