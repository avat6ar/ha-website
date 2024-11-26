export interface Filter {
  name: string;
  count: number;
}

export * from "./course";
export * from "./blog";
export * from "./course-details";
export * from "./auth";
export * from "./home";
export * from "./cart";
export * from "./instructor";
export * from "./about";

export interface CourseCardSwiperProps {
  id: number;
  name: string;
  text: string;
  short_text: string;
  category: string;
  cover: string;
  icon: string;
  price: number;
  link: string;
  type: string;
  difficulty: string;
  instructor: InstructorSwiper;
  duration: string;
  joined: number;
  rate: number;
}
export interface InstructorSwiper {
  name: string;
  title: string;
  text: string;
  link: string;
  experience: number;
  cover: string;
}

export interface Invoice {
  courses: { name: string; price: number }[];
  total_price: number;
  invoice_number: string;
}
