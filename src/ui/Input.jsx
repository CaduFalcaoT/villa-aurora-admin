export default function Input({ type, defaultValue = null, id = "" }) {
  switch (type) {
    case "text":
      return (
        <input
          type="text"
          defaultValue={defaultValue}
          id={id}
          className="w-full rounded-sm border border-gray-300 bg-white p-[0.4rem_0.6rem] shadow-sm"
        />
      );

    case "number":
      return (
        <input
          type="number"
          defaultValue={defaultValue}
          id={id}
          className="w-full rounded-sm border border-gray-300 bg-white p-[0.4rem_0.6rem] shadow-sm"
        />
      );

    case "image":
      return (
        <input
          type="file"
          accept="image/*"
          defaultValue={defaultValue}
          id={id}
          className="rounded-sm text-base transition-all duration-300 file:mr-[1.2rem] file:cursor-pointer file:rounded-sm file:border-none file:bg-indigo-600 file:p-[0.8rem_1.2rem] file:font-medium file:text-indigo-50 file:hover:bg-indigo-700"
        />
      );

    case "textarea":
      return (
        <textarea
          defaultValue={defaultValue}
          id={id}
          className="h-[8rem] w-full rounded-sm border border-gray-300 bg-white p-[0.8rem_1.2rem] shadow-sm"
        ></textarea>
      );

    default:
      return <input type="text" />;
  }
}
