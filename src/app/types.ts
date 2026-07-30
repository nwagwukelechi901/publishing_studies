export type Page = "home" | "about" | "admissions" | "postgraduate" | "faq" | "events" | "newsletter";

export interface NavItem {
  label: string;
  page: Page;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tag: string;
}

export interface EventItem {
  id: number;
  title: string;
  month: string;
  day: string;
  fullDate: string;
  time: string;
  location: string;
  type: string;
  desc: string;
  free: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}
