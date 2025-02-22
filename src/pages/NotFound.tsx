
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
