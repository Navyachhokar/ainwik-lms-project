export function ProfileView() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-primary text-3xl font-bold">
          JS
        </div>
        <div>
          <h1 className="text-2xl font-bold text-primary">John Smith</h1>
          <p className="text-gray-500">MERN Stack Intern @ Ainwik Infotech</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
          <p className="text-gray-700">john@example.com</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-400 uppercase font-bold">
            Student ID
          </p>
          <p className="text-gray-700">AIN-2026-0412</p>
        </div>
      </div>
    </div>
  );
}
