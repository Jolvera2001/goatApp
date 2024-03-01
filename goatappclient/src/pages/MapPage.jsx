//pk.eyJ1IjoibXJkZWVkcyIsImEiOiJjbHB0aTIxaHYwYmRyMmtyb3p5aWRzdDY1In0.iqVP1-QJmTJ6KER883blXA

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'; // Import Mapbox Directions CSS
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'; // Import Mapbox Directions
import 'mapbox-gl/dist/mapbox-gl.css';


export default function MapPage() {
    const bounds = [
        [-97.762752, 30.225416],
        [-97.745457, 30.235323]
    ];

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibXJkZWVkcyIsImEiOiJjbHB0aTIxaHYwYmRyMmtyb3p5aWRzdDY1In0.iqVP1-QJmTJ6KER883blXA';

        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-97.753537, 30.229543],
            zoom: 17,
            maxBounds: bounds,
            maxBoundsViscosity: 0.8,
            bearing: 30
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        document.getElementById('search-bar').appendChild(geocoder.onAdd(map));

        // Initialize Mapbox Directions
        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric', // Use metric units
            profile: 'mapbox.driving', // Use driving profile
            controls: { instructions: true } // Show turn-by-turn instructions
        });

        map.addControl(directions, 'top-left');

        // Add default marker layer
        map.on('load', () => {
            map.addLayer({
                id: 'poi-markers',
                type: 'symbol',
                source: 'composite',
                'source-layer': 'poi_label',
                layout: {
                    'icon-image': '{maki}-15',
                    'icon-allow-overlap': true,
                    'icon-size': 1.5
                },
                paint: {
                    'icon-color': '#FF6347'
                }
            });

            // Add click event listener to each marker
            map.on('click', 'poi-markers', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const name = e.features[0].properties.name;

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(`<h3>${name}</h3>`)
                    .addTo(map);
            });

            // Change cursor to pointer when hovering over marker
            map.on('mouseenter', 'poi-markers', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change cursor back to default when leaving marker
            map.on('mouseleave', 'poi-markers', () => {
                map.getCanvas().style.cursor = '';
            });
        });

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLocation = [position.coords.longitude, position.coords.latitude];
                new mapboxgl.Marker()
                    .setLngLat(userLocation)
                    .addTo(map);
            });
        }

        return () => map.remove(); // Cleanup when component unmounts
    }, []);

    return (
        <div className="map-wrapper">
            <div className="search-bar-wrapper">
                <div id="search-bar"></div>
            </div>
            <div className="map-container-wrapper">
                <div id="map-container" style={{ width: '100%', height: '600px' }}></div>
            </div>
        </div>
    );
}
