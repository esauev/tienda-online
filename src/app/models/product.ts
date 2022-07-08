import { Category } from "./category";

export class Product {
    productId!: number;
    name!: string;
    price!: number;
    image!: string;
    category!: Category;
}
