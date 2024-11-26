export interface CartCourse {
  id: number;
  name: string;
  category: string;
  cover: string;
  price: number;
  n_lessons: number;
  duration: string;
  link: string;
}

export interface InitialStateCart {
  carts: CartCourse[] | [];
  total_price: number;
}

export interface ResponseCart {
  my_courses: CartCourse[];
  total_price: number;
}

