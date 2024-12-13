'use client'
import Link from 'next/link';
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Cards from "./components/Cards"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function FerryOperators() {

    const [isFiltersVisible, setFiltersVisible] = useState(true);
  
    const toggleFiltersVisibility = () => {
      setFiltersVisible(!isFiltersVisible);
    };
  return (
    <div>

      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ferry Operators</h1>
        </div>
      </header>

      <main className="container px-4 xl:px-44 py-16 mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="text-lg">
          <Link href="/" passHref>
            <span className="text-sky-500 hover:underline">FerryTickets</span>
          </Link>
          {' > '}
          <span className="text-gray-700">Operators</span>
        </nav>

        {/* Content of the page */}
        <section className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Ferry operators</h2>
            <button className="hidden lg:block bg-sky-500 hover:bg-sky-700 text-white  py-2 px-8 rounded">
              &gt; Book your tickets
            </button>
          </div>
          <p>
            Discover the <span className="font-bold">57 ferry operators</span>{' '}
            we work with
          </p>

          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center border rounded px-4 py-2 text-sm">
                <TuneIcon />
                Filters
              </div>
              <div className="border rounded flex items-center space-x-2">
                <SortOutlinedIcon />
                <button className="flex items-center py-2 rounded text-xs">
                  <span className="text-gray-700 font-medium">Sort By: Reviews </span>
                  <span className='hidden lg:block'>(High to Low)</span>
                  <KeyboardArrowDownOutlinedIcon/>
                </button>
              </div>
              <div className="hidden lg:flex items-center border rounded px-4 py-2 text-sm">
                <SearchOutlinedIcon /> Search
              </div>
            </div>
            <button className="hidden lg:flex px-6 py-2 rounded border text-sky-500  gap-2 items-center">
              <LanguageOutlinedIcon sx={{ color: 'sky' }} />
              Live map view
            </button>
          </div>

          <div>
            <div className="flex mt-6 space-x-4">
            {isFiltersVisible && (
              <div className="hidden lg:block w-[250px] h-[280px] p-4 border rounded border-gray-300">
                <div className="flex justify-between item-center font-bold">
                  <h2>Filters</h2> <CloseOutlinedIcon className="pointer cursor-pointer" onClick={toggleFiltersVisibility}/>
                </div>

                <h2>operating in </h2>
                <div className="flex items-center justify-between border rounded p-2 mr-2 mt-2">
                  <FmdGoodOutlinedIcon />
                  <select className="form-select ">
                    <option value="s">Select a country</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
                <div className="border-t-2 mt-4">
                  <h2>Ferry types</h2>
                  <label className="mt-2 block">
                    <input type="checkbox" className="mr-2" /> Fast Ferry
                  </label>
                  <label className="block mt-2">
                    <input type="checkbox" className="mr-2" /> Luxury Ferry
                  </label>
                </div>
              </div>
                    )}
              <Cards />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-700 py-6">
        <div className="container mx-auto text-center">
          <p>© FerryTickets. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
