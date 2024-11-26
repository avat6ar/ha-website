export const Error = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <section className="min-h-screen bg-white w-full flex justify-center items-center">
      <div className="text-left">
        <h2 className="text-3xl text-gray-800 font-medium font-heading mb-2">
          Error
        </h2>
        <p className="text-gray-600 text-lg">
          An error occurred. Please try again.
        </p>
        <button
          type="button"
          className="py-1 px-8 mt-4 bg-gray-500 text-white rounded hover:bg-gray-700 cursor-pointer"
          onClick={handleReload}
        >
          Reload
        </button>
      </div>
    </section>
  );
};
