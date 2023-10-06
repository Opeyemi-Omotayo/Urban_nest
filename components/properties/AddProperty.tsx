import React from 'react';
import Input from '../elements/input/Input';
import { VALIDATOR_REQUIRE } from '@/validation/Validation';

const AddProperty = () => {
  return (
    <div>
      <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
        </div> 
        <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            placeholder="Enter the description of the property"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your correct email address."
            onInput={}
          />
        <div>
            <h1>Property Type</h1>
        <select id="propertyType" name="propertyType" className='w-[80%] mb-2 lg:mb-0 lg:w-[33%] px-4 py-3 rounded-lg outline-none'>
                <option value="apartment">Apartment</option>
                <option value="building">Building</option>
                <option value="office">Office</option>
            </select>
        </div> 
        <div>
        <h1>Property Info</h1>

        <select id="propertyInfo" name="propertyInfo" className='w-[80%] mb-2 lg:mb-0 lg:w-[33%] px-4 py-3 rounded-lg outline-none'>
                <option value="rent">rent</option>
                <option value="buy">Buy</option>
            </select>
        </div> 
        <div>
        <h1>Location</h1>
        <select id="location" name="location" className='w-[80%] mb-2 lg:mb-0 lg:w-[33%] px-4 py-3 rounded-lg outline-none'>
                <option value="berlin">Berlin</option>
                <option value="munich">Munich</option>
                <option value="hamburg">Hamburg</option>
                <option value="cologne">Cologne</option>
            </select>
        </div> 
        <div>
            <label htmlFor='price'>Price</label>
            <input type='text' id='price' />
        </div> 
        <div>
            <label htmlFor='bed'>Bed</label>
            <input type='text' id='bed' />
        </div> 
        <div>
            <label htmlFor='bath'>Bath</label>
            <input type='text' id='bath' />
        </div> 
        <div>
            <label htmlFor='measurement'>Measurement</label>
            <input type='text' id='measurement' />
        </div> 
        <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            placeholder="Enter your email address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your correct email address."
            onInput={inputHandler}
          />
      </form>
    </div>
  )
}

export default AddProperty;
