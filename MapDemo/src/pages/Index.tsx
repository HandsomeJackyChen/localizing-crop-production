import InfoPanel from '@/components/InfoPanel';
import Map from '@/components/Map';
import { RegionProperties } from '@/data/dataTypes';
import { aggregatedYearData, yearData } from '@/data/mockData';
import { useState } from 'react';

const Index = () => {
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedRegion, setSelectedRegion] = useState<RegionProperties | null>(
    null
  );

  const getCurrentYearData = (
    crop: string,
    year: number,
    regionData: RegionProperties | null
  ) => {
    const yearIndex = (year - 2025) / 5;
    // Use aggregatedYearData when 'all' is selected, otherwise use regular yearData
    const currentYearData =
      crop === 'all' ? aggregatedYearData[yearIndex] : yearData[yearIndex];
    return regionData
      ? currentYearData.features.find(
          (f) => f.properties.region_id === regionData.region_id
        )?.properties
      : null;
  };

  const handleCropChange = (crop: string) => {
    setSelectedCrop(crop);
    setSelectedRegion(getCurrentYearData(crop, selectedYear, selectedRegion));
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setSelectedRegion(getCurrentYearData(selectedCrop, year, selectedRegion));
  };

  const handleRegionClick = (regionData: RegionProperties) => {
    setSelectedRegion(
      getCurrentYearData(selectedCrop, selectedYear, regionData)
    );
  };

  return (
    <div className="container mx-auto py-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">CropCast</h1>

      <div className="flex flex-col gap-4 h-[calc(100%-2rem)] overflow-hidden">
        <div className="flex-1 min-h-[400px] lg:h-full">
          <Map
            selectedYear={selectedYear}
            selectedCrop={selectedCrop}
            onRegionClick={handleRegionClick}
          />
        </div>

        <div className="h-full overflow-auto">
          <InfoPanel
            selectedCrop={selectedCrop}
            onCropChange={handleCropChange}
            selectedYear={selectedYear}
            onYearChange={handleYearChange}
            selectedRegion={selectedRegion}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
