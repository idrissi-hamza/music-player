import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CiSearch } from 'react-icons/ci';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    searchTerm.length > 1 && navigate(`/search/${searchTerm}`)
    setSearchTerm('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" px-6 text-gray-100 focus-within:text-gray-600 "
    >
      <label
        htmlFor="search-field"
        className="sr-only"
      >
        Search option
      </label>
      <div className="p-2 rounded-md flex flex-row justify-start items-center bg-slate-600/10 hover:bg-slate-600/30 transition-all group  ">
        <CiSearch
          aria-hidden="true"
          className="w-5 h-5 group-hover:"
        />
        <input
          name="search-field"
          id="search-field"
          className=" bg-transparent flex-1 border-none placeholder-gray-500 outline-none text-base text-white ml-3 "
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
