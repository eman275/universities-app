import { UniversityInterface } from "../@types";

export const URLS = {
  home: "/",
  course: {
    url: "/courses/:id",
    view: (course: UniversityInterface) => `/courses/${course.name}`,
  },
  notFound: "*",
};
