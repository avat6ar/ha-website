export interface AllInstructor {
  name: string;
  category: string;
  cover: string;
  facebook: string | null;
  linkeding: string | null;
  youtube: string | null;
  instagram: string | null;
  email: string;
  link: string;
}

export interface ResponseInstruct {
  instructor_details: InstructorDetails;
  courses: InstructorCourses[];
}

export interface InstructorDetail {
  name: string;
  cover: string;
  category: string;
  link: string;
  rate: string;
  n_courses: number;
  facebook: string | null;
  youtube: string | null;
  linkedin: string | null;
  instagram: string | null;
  email: string | null;
  text: string;
}

export interface InstructorCourses {
  name: string;
  cover: string;
  category: string;
  n_lessons: number;
  new_price: number;
  old_price: number;
  rate: number;
  join: number;
  link: string;
  duration: string;
}
