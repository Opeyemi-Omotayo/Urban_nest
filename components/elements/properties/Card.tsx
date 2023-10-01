import { ItemsType } from '@/types/types';
import React from 'react';

const Card = ({property}: {property : ItemsType}) => {
  return (
    <div>
        <h1>{property.name}</h1>
    </div>
  )
}

export default Card;