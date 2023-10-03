import { ItemsType } from '@/types/types';
import React from 'react';
import { BsFillGrid3X2GapFill, BsGeoAlt } from 'react-icons/bs';
import { FaBath } from 'react-icons/fa';
import { IoMdBed } from 'react-icons/io';
import Link from 'next/link';

const Card = ({ property }: { property: ItemsType }) => {
  return (
    <Link href={`/details/${property.id}`}>
      <div className='bg-white rounded-md shadow-md mt-12'>
        <div className="overflow-hidden rounded ">
          <div className="relative overflow-hidden">
            <img src={property.image} alt='house' className='h-[200px] w-full' />
            <div className="absolute capitalize top-0 px-3 py-1 m-4 text-white bg-green-500 rounded start-0">{property.propertyInfo}</div>
            <div className="absolute capitalize bottom-0 px-3 pt-1 mx-4 text-green-500 bg-white rounded start-0">{property.propertyType}</div>
          </div>
          <div className="p-4 pb-0">
            <h5 className="mb-3 font-semibold text-green-500">${property.price}</h5>
            <a className="block mb-2 text-lg capitalize font-bold" href="">{property.name}</a>
            <p className='flex items-center pb-4 text-gray-800'><BsGeoAlt className="text-green-500 me-2" />{property.location}</p>
          </div>
          <div className="flex items-center justify-around text-gray-800 border-t">
            <small className="flex items-center py-2 pr-3 text-center border-r"><BsFillGrid3X2GapFill className="text-green-500 me-2" />{property.measurement} Sqft</small>
            <small className="flex items-center py-2 pr-3 text-center border-r"><IoMdBed className="text-green-500 me-2" />{property.bed} Bed</small>
            <small className="flex items-center py-2 text-center"><FaBath className="text-green-500 me-2" />{property.bath} Bath</small>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card;