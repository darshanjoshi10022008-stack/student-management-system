
import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import StudentModal from "./components/StudentModal";
import StudentForm from "./components/StudentForm";

import type { Student } from "./types/student";
import { getStudents, saveStudents } from "./utils/storage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [students, setStudents] = useState<Student[]>(getStudents);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);

  useEffect(() => {
    saveStudents(students);
  }, [students]);

  const filteredStudents = students.filter((student) => {
    const search = searchTerm.toLowerCase();

    return (
      student.fullName.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search) ||
      student.course.toLowerCase().includes(search)
    );
  });

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setIsModalOpen(true);
  };

  const handleEditStudent = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleSubmit = (studentData: Omit<Student, "id">) => {
    if (selectedStudent) {
      setStudents((previousStudents) =>
        previousStudents.map((student) =>
          student.id === selectedStudent.id
            ? { ...studentData, id: selectedStudent.id }
            : student
        )
      );
    } else {
      const newStudent: Student = {
        ...studentData,
        id: crypto.randomUUID(),
      };

      setStudents((previousStudents) => [
        ...previousStudents,
        newStudent,
      ]);
    }

    handleCloseModal();
  };

  const handleDeleteStudent = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmed) {
      setStudents((previousStudents) =>
        previousStudents.filter((student) => student.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <Header
          totalStudents={students.length}
          onAddStudent={handleAddStudent}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <StudentList
          students={filteredStudents}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />

        <StudentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedStudent ? "Update Student" : "Add New Student"}
        >
          <StudentForm
            initialData={selectedStudent}
            onSubmit={handleSubmit}
            onCancel={handleCloseModal}
          />
        </StudentModal>
      </div>
    </div>
  );
}

export default App;
