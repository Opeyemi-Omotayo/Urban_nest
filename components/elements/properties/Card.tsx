import { ItemsType } from '@/types/types';
import React from 'react';
import Image from 'next/image';
import { BsFillGeoAltFill, BsFillGrid3X2GapFill, BsGeoAlt } from 'react-icons/bs';
import { FaBath } from 'react-icons/fa';
import { IoMdBed } from 'react-icons/io';

const Card = ({ property }: { property: ItemsType }) => {
  return (
    <div className='bg-white rounded-md shadow-md'>
      <div className="overflow-hidden rounded ">
        <div className="relative overflow-hidden">
          <Image src={property.image} width={350} height={150} alt='house ' />
          <div className="absolute top-0 px-3 py-1 m-4 text-white bg-green-500 rounded start-0">For {property.propertyInfo}</div>
          <div className="absolute bottom-0 px-3 pt-1 mx-4 text-green-500 bg-white rounded start-0">{property.propertyType}</div>
        </div>
        <div className="p-4 pb-0">
          <h5 className="mb-3 font-semibold text-green-500">${property.price}</h5>
          <a className="block mb-2 text-xl font-bold" href="">{property.name}</a>
          <p className='flex items-center pb-4 text-gray-800'><BsGeoAlt className="text-green-500 me-2" />{property.location}</p>
        </div>
        <div className="flex items-center justify-around text-gray-800 border-t">
          <small className="flex items-center py-2 pr-3 text-center border-r"><BsFillGrid3X2GapFill className="text-green-500 me-2"/>{property.measurement} Sqft</small>
          <small className="flex items-center py-2 pr-3 text-center border-r"><FaBath className="text-green-500 me-2"/>{property.bed} Bed</small>
          <small className="flex items-center py-2 text-center"><IoMdBed className="text-green-500 me-2"/>{property.bath} Bath</small>
        </div>
      </div>
    </div>
  )
}

export default Card;