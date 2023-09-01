export function Button ({ text, icon }) {
  return (
    <button className="flex items-center justify-center bg-[#C1EDCC] text-black rounded-md px-4 py-2 mt-4">
      <span className="mr-2">{text}</span>
    </button>
  );
};