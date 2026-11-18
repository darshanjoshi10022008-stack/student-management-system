
import type { Student } from "../types/student";

const STORAGE_KEY = "student-management-data";

export const getStudents = (): Student[] => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) {
      return [];
    }

    return JSON.parse(storedData) as Student[];
  } catch (error) {
    console.error("Error loading students:", error);
    return [];
  }
};

export const saveStudents = (students: Student[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  } catch (error) {
    console.error("Error saving students:", error);
  }
};
