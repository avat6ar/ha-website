import { CategoryDetailsResponse } from "./admin.d";

export interface IndexData {
  n_users: number;
  n_courses: number;
  n_courses_categories: number;
  n_blogs: number;
  n_blogs_categories: number;
  n_reviews: number;
}

export interface NumberLessons {
  tutorials: number;
  lessons: number;
  students: number;
  videos: number;
}

export interface Users {
  id: number;
  name: string;
  email: string;
  image: string;
  status: number;
  role: string;
  cartLength: number;
  n_orders: number;
}

export interface Course {
  id: number;
  name: string;
  cover: string;
  category: string;
  price: number;
  link: string;
  type: string;
  created_at: string;
  status: number;
}

export interface UserDetails {
  id: number;
  name: string;
  email: string;
  image: string;
  status: number;
  role: string;
  cartLength: number;
  n_orders: number;
  courses: Course[];
}

export interface Category {
  id: number;
  name: string;
  status: number;
  n_courses: number;
}

export interface CategoryDetails {
  id: number;
  name: string;
  status: number;
  n_courses: number;
  courses: Course[];
}

export interface Courses {
  id: number;
  name: string;
  cover: string;
  price: number;
  category: string;
  status: number;
  joined: number;
  link?: string;
}

export interface CourseDetails {
  id: number;
  name: string;
  text: string;
  short_text: string;
  category_id: number;
  status: number;
  cover: string;
  duration: string;
  seats: string;
  link: string;
  price: string;
  instructor_id: number;
  difficulty: string;
  gols: string[];
  requirements: string[];
}

export interface Options {
  id: number | string;
  name: string;
}

export interface Chapters {
  id: number;
  name: string;
  course_name: string;
  n_lessons: number;
  status: number;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  title: string;
  seen: number;
  message: string;
}

export interface Instructor {
  id: number;
  name: string;
  category: string;
  experience: number;
  rate: number;
  n_students: number;
  n_courses: number;
  status: number;
}

export interface InstructorDetails {
  id: number;
  name: string;
  title: string;
  category_id: number;
  category: string;
  experience: number;
  rate: string;
  text: string;
  n_students: number;
  status: number;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  email: string;
  link: string;
  cover: string;
  courses: Course[];
}

export interface BlogCategory {
  id: number;
  name: string;
  status: number;
  n_blogs: number;
}

export interface BlogCategoryDetails {
  id: number;
  name: string;
  status: number;
  n_blogs: number;
  blogs: BlogsDetails_Category[];
}

export interface BlogsDetails_Category {
  id: number;
  name: string;
  cover: string;
  category: string;
  writer: string;
  seen: number;
  link?: string;
  created_at: string;
}

export interface Discount {
  id: number;
  course_id: number;
  course_name: string;
  type: string;
  value: number;
}

export interface Blog {
  id: number;
  title: string;
  category: string;
  seen: number;
  writer: string;
}

export interface ChapterDetails {
  id: number;
  name: string;
  course_name: string;
  course_id: number;
  status: number;
  n_lessons: number;
  lessons: ChapterLessons[];
}

export interface ChapterLessons {
  id: number;
  name: string;
  status: number;
  link: string;
}

export interface Lesson {
  id: number;
  name: string;
  status: number;
  course_name: string;
  course_id: number;
  chapter_name: string;
  chapter_id: number;
  link: string;
}

export interface InstructorCourse_Details {
  id: number;
  name: string;
  profile: string;
}

export interface ChapterCourse_Details {
  name: string;
  id: number;
  n_lessons: number;
}

export interface ReviewCourse_Details {
  user_id: number;
  review: string;
  user_name: string;
  profile: string;
  rate: number;
  created_at: string;
}

export interface Course_Details {
  id: number;
  status: number;
  name: string;
  text: string;
  short_text: string;
  goals: string[];
  requirements: string[];
  category: string;
  category_id: number;
  cover: string;
  price: number;
  difficulty: string;
  n_seats: number;
  joined: number;
  duration: string;
  link: string;
  instructor: InstructorCourse_Details;
  chapters: ChapterCourse_Details[];
  reviews: ReviewCourse_Details[];
  type_course: string;
  type: string;
}

export interface BlogDetails {
  id: number;
  title: string;
  text: string;
  status: number;
  seen: number;
  category_id: number;
  link: string;
  writer: string;
  category: string;
  cover: string;
  goals: string[];
}

export interface ReviewCourse {
  id: number;
  review: string;
  rate: number;
  status: number;
  course_name: string;
}

export interface Consulting {
  id: number;
  name: string;
  email: string;
  whats_number: string;
  type: string;
  description: string;
  seen: number;
}

export interface Quizz {
  id: number;
  title: string;
  course_name: string;
  final_grade: string;
  success_rate: string;
  type: string;
  course_id?: number;
  chapter_id?: number;
}

export interface Question {
  id: number;
  question: string;
  quizz_title: string;
  answer: {
    answer: string;
    id: number;
    is_correct: boolean;
  }[];
  quizz_id?: number;
}

export interface File {
  id: number;
  name: string;
  file: string;
  link: string;
  course_name: string;
}

export interface Book {
  id: number;
  full_name: string;
  email: string;
  whatsapp: string;
  country: string;
}

export interface BookDetails extends Book {
  phone_number: string;
  current_work: string;
  course_name: string;
}
