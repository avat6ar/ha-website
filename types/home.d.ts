export interface Post {
  id: number;
  cover: string;
  title: string;
  category: string;
  created_at: string;
  link: string;
}

export interface HomeCourse {
  id: number;
  name: string;
  text: string;
  short_text: string;
  category: string;
  cover: string;
  icon: string;
  old_price: number;
  new_price: number;
  type: string;
  difficulty: string;
  n_lessons: number;
  duration: string;
  rate: number;
  joined: number;
  link: string;
  instructor: {
    name: string;
    profile: string;
  };
  in_cart: boolean;
}

export interface HomeReviews {
  review: string;
  user_name: string;
  category_name: string;
  course_name: string;
}

export interface HomeCategories {
  category_name: string;
  n_courses: number;
}
