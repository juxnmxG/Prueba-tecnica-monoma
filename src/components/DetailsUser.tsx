import useAuth from "../Hooks/UseAuth";

function DetailsUser() {
  const { user } = useAuth();
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400 mt-36">
      <div className="relative w-full flex justify-center mt-2">
        <img
          className="h-full rounded-xl object-cover"
          src={user.image}
          alt="Profile Image"
        />
      </div>
      <div className="px-6 py-4">
        <div className="text-xl font-semibold text-gray-800">{user.name}</div>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">
          {user.create_at}
        </span>
        <span className="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">
          {user.date}
        </span>
      </div>
    </div>
  );
}

export default DetailsUser;
