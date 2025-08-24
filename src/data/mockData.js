// src/data/mockData.js
export const coursesData = [
  {
    id: "CS101",
    name: "Introduction to Computer Science",
    credits: 4,
    grade: "A",
    gradePoints: 4.0,
    completed: true
  },
  {
    id: "MATH202",
    name: "Advanced Calculus",
    credits: 3,
    grade: "B+",
    gradePoints: 3.3,
    completed: true
  },
  {
    id: "ENG150",
    name: "English Composition",
    credits: 3,
    grade: "A-",
    gradePoints: 3.7,
    completed: true
  },
  {
    id: "PHYS301",
    name: "Quantum Physics",
    credits: 4,
    grade: "B",
    gradePoints: 3.0,
    completed: true
  },
  {
    id: "CS405",
    name: "Machine Learning",
    credits: 4,
    grade: "Ongoing",
    gradePoints: 0,
    completed: false
  }
]

export const assignmentsData = [
  {
    id: "A101",
    title: "Programming Assignment 1",
    courseId: "CS101",
    courseName: "Introduction to Computer Science",
    dueDate: "2023-10-15",
    status: "completed",
    weightage: 15
  },
  {
    id: "A202",
    title: "Calculus Problem Set 3",
    courseId: "MATH202",
    courseName: "Advanced Calculus",
    dueDate: "2023-10-20",
    status: "completed",
    weightage: 10
  },
  {
    id: "A305",
    title: "Research Paper Draft",
    courseId: "ENG150",
    courseName: "English Composition",
    dueDate: "2023-11-05",
    status: "ongoing",
    weightage: 20
  },
  {
    id: "A409",
    title: "Quantum Mechanics Lab Report",
    courseId: "PHYS301",
    courseName: "Quantum Physics",
    dueDate: "2023-11-10",
    status: "pending",
    weightage: 25
  },
  {
    id: "A501",
    title: "Neural Network Implementation",
    courseId: "CS405",
    courseName: "Machine Learning",
    dueDate: "2023-11-20",
    status: "ongoing",
    weightage: 30
  }
]