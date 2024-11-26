import type { Filter } from ".";

export interface Instructor {
  name: string;
  title: string;
  text: string;
  link: string;
  experience: string;
  cover: string;
}

export interface Course {
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
  duration: string;
  rate: number;
  joined: number;
  link: string;
  instructor: {
    name: string;
    cover: string;
    link: string;
  };
}

export interface CourseFiltersProps {
  categories: Filter[];
  difficulty: Filter[];
  type: Filter[];
  onCategoryChange: (categoryName: string) => void;
  onDifficultyChange: (difficultyName: string) => void;
  onTypeChange: (typeName: string) => void;
  selectedCategories: string[];
  selectedDifficulty: string[];
  selectedType: string[];
}

export interface CourseDetails {
  id: number;
  name: string;
  text: string;
  goals: string[];
  requirements: string[];
  category: string;
  cover: string;
  icon: string;
  new_price: number;
  old_price: number;
  difficulty: string;
  n_seats: number;
  stars: string | number;
  joined: number;
  n_lessons: number;
  duration: string;
  link: string;
  Curriculum: Chapter[];
  instructor: InstructorDetails;
  related_courses: Related[];
  reviews: ReviewsResponse[];
  rating_counts: {
    [key: string]: number;
  };
  type: string;
  type_course: string;
}

export interface Chapter {
  name: string;
  lessons: {
    name: string;
  }[];
}

export interface InstructorDetails {
  name: string;
  profile: string;
  instructor_category: string;
  instructor_rate: string | number;
  instructor_n_students: number;
  instructor_link: string;
  instructor_desc: string;
}

export interface Related {
  name: string;
  link: string;
  new_price: number;
  old_price: number;
  cover: string;
}

export interface ReviewsResponse {
  review: string;
  user_name: string;
  profile: string;
  category_name: string;
  rate: string | number;
  course_name: string;
  created_at: string;
}

export interface Videos {
  chapters: {
    chapter_name: string;
    lessons: { name: string; link: string }[];
    quizz: {
      final_grade: number;
      title: string;
      success_rate: number;
      id: number;
      has_tested: boolean;
      result: string;
    }[];
  }[];
  cover: string;
  Course_Files: {
    link: string;
    name: string;
    id: number;
    file: string;
  }[];
  end_quizz: {
    final_grade: number;
    title: string;
    success_rate: number;
    id: number;
    has_tested: boolean;
    result: string;
  }[];
}

export interface Questions {
  id: number;
  question: string;
  answer: {
    id: number;
    answer: string;
  }[];
}
