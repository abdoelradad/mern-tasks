import { Search, X } from "lucide-react";

function SearchBar({ value, onChange, handleSearch, onClearSearch }) {
  return (
    <div className="flex w-full justify-center">
      <div className="relative w-full sm:w-[450px]">
        <input
          type="text"
          placeholder="Search Notes"
          className="w-full rounded-lg bg-gray-100 px-4 py-[11px] text-sm outline-none"
          value={value}
          onChange={onChange}
        />
        <div className="absolute right-3 top-2">
          <div className="flex items-center">
            <X className="mr-1 cursor-pointer text-gray-400 hover:text-black" />
            <Search className="size-5 cursor-pointer text-gray-400 hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
