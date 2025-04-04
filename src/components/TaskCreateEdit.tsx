import { useState } from 'react';
import { MdCreate } from 'react-icons/md';

interface TaskFormData {
  name: string;
  startDate: string;
  endDate: string;
  link: string;
  description: string;
  taskCategories: string;
  taskPriority: string;
}

export const TaskCreateEdit = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<TaskFormData>({
    name: '',
    startDate: '',
    endDate: '',
    link: '',
    description: '',
    taskCategories: 'work',
    taskPriority: 'low'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowForm(false);

    console.log('✅ Task Created:', formData);

    // Simulate a delay (e.g., API call)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-md p-5 mt-5">
      {showForm ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold">Task Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter task name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Start Date</label>
              <input
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold">End Date</label>
              <input
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Link</label>
            <input
              name="link"
              type="text"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="Enter a link (optional)"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <input
              name="description"
              type="text"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter a short description"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Task Category and Priority */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="taskCategories" className="mb-1 font-semibold">Task Category</label>
              <select
                name="taskCategories"
                id="taskCategories"
                value={formData.taskCategories}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
                <option value="finance">Finance</option>
                <option value="learning">Learning</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="taskPriority" className="mb-1 font-semibold">Task Priority</label>
              <select
                name="taskPriority"
                id="taskPriority"
                value={formData.taskPriority}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Create Task
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            <span>Create Task</span>
            <MdCreate size={20} />
          </button>
        </div>
      )}

      {/* Loader or success message */}
      {loading && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          ✅ Your Task Has Been Created!
        </div>
      )}
    </div>
  );
};

