import {Users, Plus} from "lucide-react";

interface HeaderProps{
    totalStudents: number;
    onAddStudent: () => void;
}

function Header ({totalStudents, onAddStudent}: HeaderProps) {
    return (
        <header className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Student Management System
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                    Manage your student easily
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3">
                    <Users className="text-blue-600" size={20} />
                    <div>
                    <p className="text-xs text-gray-500">Total Students</p>
                    <p className="text-lg font-bold text-gray-800">
                        {totalStudents}
                    </p>
                </div>
            </div>

            <button onClick={onAddStudent}
            className="flex items-center gap-2 rouded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700">
                <Plus size={20} />
                Add Student
            </button>
            </div>
        </header>

    );
}
export default Header;