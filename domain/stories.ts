interface HomeComtent {
  stories: Category[];
}

interface Category {
  name: string;
  stories: StorySummary[];
  type: CategoryType;
  age: ageRange;
}

interface StorySummary {
  id: string;
  title: string;
  image: string;
  description: string;
  ageCategory: ageRange;
  favorite: boolean;
  genre: CategoryType;
}

interface Story {
  title: string;
  image: string;
  description: string;
  ageCategory: ageRange;
  favorite: boolean;
  genre: CategoryType;
  pages: Page[];
  author: string;
}

interface Page {
    text: string;
    image: string;
    backgroundSound: string;
    audioReading: string;
    videoReading: string;
  }

type CategoryType =
  | "Action"
  | "Adventure"
  | "Comedy"
  | "Drama"
  | "Fantasy"
  | "Horror"
  | "Mystery"
  | "Romance"
  | "Sci-Fi"
  | "Thriller";
type ageRange = "0-3" | "3-5" | "5-8" | "8-12";


