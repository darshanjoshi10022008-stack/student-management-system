
import { Pencil, Trash2, Users } from "lucide-react";
import type { Student } from "../types/student";

interface StudentListProps {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

function StudentList({
  students,
  onEdit,
  onDelete,
}: StudentListProps) {
  if (students.length === 0) {
    return (
      <div className="mt-6 rounded-xl bg-white p-10 text-center shadow-sm">
        <Users size={40} className="mx-auto text-gray-400" />
        <h2 className="mt-3 text-lg font-semibold text-gray-700">
          No Students Found
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Add your first student to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto rounded-xl bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-sm text-gray-600">
          <tr>
            <th className="p-4">Student Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Course</th>
            <th className="p-4">City</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t border-gray-100">
              <td className="p-4 font-medium text-gray-800">
                {student.fullName}
              </td>
              <td className="p-4 text-gray-600">{student.email}</td>
              <td className="p-4 text-gray-600">{student.course}</td>
              <td className="p-4 text-gray-600">{student.city}</td>
              <td className="p-4">
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit(student)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit Student"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(student.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete Student"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
