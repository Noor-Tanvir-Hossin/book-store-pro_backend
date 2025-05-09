export type TBook = {
    title: string;
    author: string;
    image : string;
    price: number;
    category: "Fiction" | "Science" | "SelfDevelopment" | "Poetry" | "Religious";
    description: string;
    quantity: number;
    inStock: boolean;
  }
  