import { nanoid } from "nanoid";

export const CATEGORIES = [
  { name: "All", value: "all", id: nanoid(10) },
  { name: "Health", value: "health", id: nanoid(10) },
  { name: "Sport", value: "sport", id: nanoid(10) },
  { name: "Technology", value: "technology", id: nanoid(10) },
  { name: "Education", value: "education", id: nanoid(10) },
  { name: "Culture", value: "culture", id: nanoid(10) },
];
export const LINKS = [
  { title: "Terms of Use", link: "terms" },
  { title: "About the News", link: "about" },
  { title: "Privacy Policy", link: "privacy" },
  { title: "Contact the News", link: "contact" },
];
