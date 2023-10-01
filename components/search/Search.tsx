import React from 'react';
import Button from '../elements/button/Button';

const Search = () => {
    return (
        <section className='flex items-center justify-between py-6 bg-green-500 px-4 lg:px-[8rem]'>
            <select id="propertyType" name="propertyType" className='w-[33%] px-4 py-3 rounded-lg outline-none'>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
            </select>
            <select id="location" name="location" className='w-[33%] px-4 py-3 rounded-lg outline-none'>
                <option value="rent">Berlin</option>
                <option value="buy">Munich</option>
                <option value="rent">Hamburg</option>
                <option value="buy">Cologne</option>
            </select>
            <Button className=" w-[23%] bg-primary px-4 py-3 text-white bg-green-700 shadow-lg rounded-lg">Search</Button>
        </section>
    )
}

export default Search;