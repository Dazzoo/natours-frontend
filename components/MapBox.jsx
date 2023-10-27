'use client';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PreloaderCycling from '@/components/preloaders/PreloaderCycling';
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const revalidate = true;
export const dynamic = 'auto';

const MapBox = ({ locations, className, boundsPadding, boundsPaddingForMobile }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const savedTheme = typeof window !== 'undefined' && localStorage ? localStorage.getItem('natours-theme') : null;
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: savedTheme === 'dark' ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/light-v11',
      center: locations[0].coordinates,
      zoom: 8,
    });
    // map.current.on('move', () => {
    //   setLng(map.current.getCenter().lng.toFixed(4));
    //   setLat(map.current.getCenter().lat.toFixed(4));
    //   setZoom(map.current.getZoom().toFixed(2));
    // });

    const bounds = new mapboxgl.LngLatBounds();

    locations.map(l => {
      bounds.extend(l.coordinates);
    });

    const mobilePadding =
      window.innerWidth < 768 && boundsPaddingForMobile ? boundsPaddingForMobile : null;

    map.current.fitBounds(bounds, {
      padding: mobilePadding || boundsPadding, // You can adjust the padding as needed
    });

    locations.map(l => {
      new mapboxgl.Marker().setLngLat(l.coordinates).addTo(map.current);
    });

    return () => {
      map.current.remove(); // Cleanup when the component unmounts
    };
  }, [locations]);

  return (
    <>
      {!locations?.length > 0 ? (
        <div className='mt-[30vh]'>
          <PreloaderCycling />
        </div>
      ) : (
        <div>
          <div ref={mapContainer} className={`${className} min-h-[50rem] w-[100%]`} />
          {/* <div className='absolute top-[35rem]'>{window.innerWidth}</div> */}
        </div>
      )}
    </>
  );
};

export default MapBox;
