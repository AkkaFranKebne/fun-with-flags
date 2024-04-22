
import React, { useState } from 'react';
import { MapPointType } from '../../utils/dataForMap';
import './MapPoint.scss'

type MapPoint = {
  data: MapPointType;
  onClickHandler: (mapPoint: MapPointType) => void;
}

export const MapPoint: React.FC<MapPoint> = (props)  => {
  const [ clicked, setClicked ] = useState<boolean>(false);
  const handleClick = () => {
    props.onClickHandler(props.data);
    setClicked(true);
  };

  return (
    <div onClick={handleClick} className='map-point' id={clicked ? 'clicked' : undefined}>
      {props.data.name}
    </div>
  );
}