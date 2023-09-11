'use client';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const MapBox = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-74.5, 40], // Replace with your desired center coordinates
      zoom: 9, // Adjust the zoom level as needed
    });

    return () => {
      map.remove(); // Cleanup when the component unmounts
    };
  }, []);

  return <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />;
};

export default MapBox;
