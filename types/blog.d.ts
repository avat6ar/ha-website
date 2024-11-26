export interface Blog {
  id: number;
  title: string;
  seen: number;
  text: string;
  cover: string;
  category: string;
  link: string;
  created_at: string;
}

export interface BlogDetails {
  id: number;
  user_id: number;
  title: string;
  text: string;
  cover: string;
  link: string;
  seen: number;
  category_id: number;
  status: number;
  category_name: string;
  category_link: string;
  created_by: string;
  created_date: string;
  images: string[];
  goals: string[];
}

export interface BlogCategory {
  id: number;
  name: string;
  text: string;
  cover: string;
  link: string;
  status: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface RelatedBlog {
  title: string;
  link: string;
  cover: string;
  date: string;
}

export interface BlogResponse {
  blog_details: BlogDetails;
  blog_categories: BlogCategory[];
  realted_blogs: RelatedBlog[];
  next_blog: NextBlog;
  prev_blog: PrevBlog;
  writer: Writer;
}

export interface NextBlog {
  title: string;
  link: string;
  date: string;
  cover: string;
}

export interface PrevBlog {
  title: string;
  link: string;
  date: string;
  cover: string;
}

export interface Writer {
  name: string;
  cover: string;
}
