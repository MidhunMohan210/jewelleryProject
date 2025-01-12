import { Edit, Trash2 } from "lucide-react";

const users = [
  { name: "John Doe", email: "john.doe@example.com", role: "Admin" },
  { name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
  { name: "Alice Brown", email: "alice.brown@example.com", role: "Viewer" },
  { name: "Bob Johnson", email: "bob.johnson@example.com", role: "Editor" },
  { name: "Emma Wilson", email: "emma.wilson@example.com", role: "Admin" },
  { name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },

];

function UserData() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-200">{user.name}</h3>
            <p className="text-sm text-gray-400">{user.email}</p>
            <p className="text-sm text-gray-300">Role: {user.role}</p>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            {/* Edit Icon */}
            <button
              className="text-blue-400 hover:text-blue-600"
              aria-label={`Edit ${user.name}`}
            >
              <Edit className="w-5 h-5" />
            </button>
            {/* Delete Icon */}
            <button
              className="text-red-400 hover:text-red-600"
              aria-label={`Delete ${user.name}`}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserData;
