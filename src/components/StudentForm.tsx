
import { useState } from "react";
import type { FormEvent } from "react";
import type { Student } from "../types/student";

interface StudentFormProps {
  initialData?: Student | null;
  onSubmit: (studentData: Omit<Student, "id">) => void;
  onCancel: () => void;
}

function StudentForm({
  initialData,
  onSubmit,
  onCancel,
}: StudentFormProps) {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName ?? "",
    email: initialData?.email ?? "",
    phone: initialData?.phone ?? "",
    age: initialData?.age?.toString() ?? "",
    gender: initialData?.gender ?? "Male",
    course: initialData?.course ?? "",
    city: initialData?.city ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      age: Number(formData.age),
      gender: formData.gender as Student["gender"],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Full Name</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Enter full name"
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter email"
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter phone number"
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
            placeholder="Enter age"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Course</label>
        <input
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          placeholder="Enter course"
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">City</label>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          placeholder="Enter city"
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border px-5 py-2.5 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          {initialData ? "Update Student" : "Add Student"}
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
