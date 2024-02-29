import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactDom from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initailize just once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/jolvera6/cln4s4kp806q801p7ak2q8c6v',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('move', () => {
            setLat(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div ref={mapContainer} className='mapContainer' />
    )
}

export default Map