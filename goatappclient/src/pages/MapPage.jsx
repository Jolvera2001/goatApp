import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; // Import Mapbox Geocoder
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // Import Mapbox Geocoder CSS

import Sidebar from '../components/Sidebar'; // Import the Sidebar component

export default function MapPage() {
    const bounds = [
        [-97.7686, 30.2231], // Top-left corner
        [-97.7227, 30.2338]  // Bottom-right corner
    ];

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibXJkZWVkcyIsImEiOiJjbHB0aTIxaHYwYmRyMmtyb3p5aWRzdDY1In0.iqVP1-QJmTJ6KER883blXA'; 
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11', // Choose a map style
            center: [-97.753537, 30.229543], // Set the center to the calculated center
            zoom: 14, // Starting zoom level
            maxBounds: bounds,
            maxBoundsViscosity: 0.5,
            bearing: 30 // Adjust the viscosity if needed
        });

        // Add the Mapbox Geocoder
        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        document.getElementById('search-bar').appendChild(geocoder.onAdd(map));

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
                    'icon-color': '#FF6347' // Marker color
                }
            });

            // Add click event listener to each marker
            map.on('click', 'poi-markers', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const name = e.features[0].properties.name;

                // Create popup
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
                <div id="search-bar"></div> {/* Container for the search bar */}
            </div>
            <div className="map-container-wrapper">
                <div id="map-container" style={{ width: '100%', height: '600px' }}></div>
            </div>
        </div>
    );
}
