import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useEffect, useRef, useState } from 'react';
import { aggregatedYearData, mockGeoJSON, yearData } from '../data/mockData';
import { RegionProperties } from '@/data/dataTypes';

interface MapProps {
  selectedYear: number;
  selectedCrop: string;
  onRegionClick: (regionData: RegionProperties) => void;
}

// Extended Map type to include our custom property
interface ExtendedMap extends maplibregl.Map {
  hasClickEvent?: boolean;
}

const yieldIncreaseStrong = 'hsl(122 39% 24%)';
const yieldIncreaseModerate = 'hsl(122 32% 64%)';
const yieldStable = 'hsl(25 19% 47%)';
const yieldDecreaseModerate = 'hsl(0 65% 68%)';
const yieldDecreaseStrong = 'hsl(0 73% 41%)';

const Map: React.FC<MapProps> = ({
  selectedYear,
  selectedCrop,
  onRegionClick,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<ExtendedMap | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const selectedRegion = useRef<string>('');

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // OpenStreetMap style
      center: [-95.7129, 40.0902], // Center of US
      zoom: 4,
    }) as ExtendedMap;

    map.current.on('load', () => {
      setMapLoaded(true);

      // Add navigation controls
      map.current?.addControl(new maplibregl.NavigationControl(), 'top-right');

      // Add the initial GeoJSON source
      if (map.current) {
        // Explicitly cast the mockGeoJSON as GeoJSON to satisfy TypeScript
        map.current.addSource('crop-data', {
          type: 'geojson',
          data: mockGeoJSON,
        });

        // Add the fill layer
        map.current.addLayer({
          id: 'crop-fill',
          type: 'fill',
          source: 'crop-data',
          paint: {
            'fill-color': [
              'match',
              ['get', 'yield_trend'],
              'increasing',
              yieldIncreaseModerate,
              'stable',
              yieldStable,
              'decreasing',
              yieldDecreaseModerate,
              yieldStable, // default
            ],
            'fill-opacity': 0.7,
          },
        });

        for (const { properties } of mockGeoJSON.features) {
          const { region_id } = properties;

          // Add outline layer
          map.current.addLayer({
            id: `crop-outline-${region_id}`,
            type: 'line',
            source: 'crop-data',
            paint: {
              'line-color': '#333',
              'line-width': 1,
            },
          });
        }
      }
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Update map data when year or crop selection changes
  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    const yearIndex = (selectedYear - 2025) / 5;

    // Use aggregatedYearData when 'all' is selected, otherwise use regular yearData
    const currentYearData =
      selectedCrop === 'all'
        ? aggregatedYearData[yearIndex]
        : yearData[yearIndex];

    // Update the GeoJSON data with properties adjusted for the selected crop
    const displayData: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: currentYearData.features.map((feature: GeoJSON.Feature) => {
        // Create a display version of the feature with simplified properties
        const cropData = feature.properties.crops[selectedCrop];
        return {
          type: 'Feature',
          properties: {
            ...feature.properties,
            region_id: feature.properties.region_id,
            region_name: feature.properties.region_name,
            yield_score: cropData.relative_yield_score,
            yield_trend: cropData.yield_trend,
            // Keep the original data structure for clicking
            original_data: feature.properties,
          },
          geometry: feature.geometry,
        };
      }),
    };

    // Update the map source with new data
    if (map.current.getSource('crop-data')) {
      (map.current.getSource('crop-data') as maplibregl.GeoJSONSource).setData(
        displayData
      );

      // Update the fill layer paint property based on the selected crop data
      map.current.setPaintProperty('crop-fill', 'fill-color', [
        'interpolate',
        ['linear'],
        ['get', 'yield_score'],
        0,
        yieldDecreaseStrong,
        40,
        yieldDecreaseModerate,
        50,
        yieldStable,
        60,
        yieldIncreaseModerate,
        100,
        yieldIncreaseStrong,
      ]);
    }

    if (!map.current.hasClickEvent) {
      map.current.on('click', 'crop-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const originalData = JSON.parse(feature.properties.original_data);
          onRegionClick(originalData);
          if (selectedRegion.current) {
            map.current.removeLayer(`crop-select-${selectedRegion.current}`);
          }
          map.current.addLayer({
            id: `crop-select-${originalData.region_id}`,
            type: 'line',
            source: 'crop-data',
            paint: {
              'line-color': '#FFDF00',
              'line-width': 3,
              'line-gap-width': 2,
            },
            filter: ['==', 'region_id', originalData.region_id],
          });
          selectedRegion.current = originalData.region_id;
        }
      });

      map.current.on('mouseenter', 'crop-fill', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer';
      });

      map.current.on('mouseleave', 'crop-fill', () => {
        if (map.current) map.current.getCanvas().style.cursor = '';
      });

      // Set the flag on our extended map type
      map.current.hasClickEvent = true;
    }
  }, [mapLoaded, selectedYear, selectedCrop, onRegionClick]);

  return (
    <div className="w-full h-full rounded-md overflow-hidden border border-border">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
