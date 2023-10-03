import React from 'react';
import Button from '../elements/button/Button';

const Search = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center justify-between py-6 bg-green-500 px-4 lg:px-[8rem]'>
            <select id="propertyType" name="propertyType" className='w-[80%] mb-2 lg:mb-0 lg:w-[33%] px-4 py-3 rounded-lg outline-none'>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
            </select>
            <select id="location" name="location" className='w-[80%] mb-2 lg:mb-0 lg:w-[33%] px-4 py-3 rounded-lg outline-none'>
                <option value="berlin">Berlin</option>
                <option value="munich">Munich</option>
                <option value="hamburg">Hamburg</option>
                <option value="cologne">Cologne</option>
            </select>
            <Button className="w-[70%] lg:w-[23%] bg-primary px-4 py-3 text-white bg-green-700 shadow-lg rounded-lg">Search</Button>
        </section>
    )
}

export default Search;