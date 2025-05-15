import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CropSelector from './CropSelector';
import TimeSlider from './TimeSlider';
import RegionDetails from './RegionDetails';
import { Popover } from './ui/popover';
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { Cross2Icon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import { RegionProperties } from '@/data/dataTypes';

interface InfoPanelProps {
  selectedCrop: string;
  onCropChange: (crop: string) => void;
  selectedYear: number;
  onYearChange: (year: number) => void;
  selectedRegion: RegionProperties | null;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  selectedCrop,
  onCropChange,
  selectedYear,
  onYearChange,
  selectedRegion,
}) => {
  return (
    <div className="h-full flex flex-row gap-4">
      <Card className="flex-shrink-0 overflow-y-scroll">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Controls</CardTitle>
          <Popover>
            <PopoverTrigger asChild>
              <button className="IconButton" aria-label="Update dimensions">
                <MixerHorizontalIcon />
              </button>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent className="PopoverContent" sideOffset={5}>
                <h3 className="text-lg font-medium mb-2">Yield Legend</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center">
                    <span className="legend-box yield-increase-strong"></span>
                    <span>High Yield Increase (70-100)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="legend-box yield-increase-moderate"></span>
                    <span>Moderate Yield Increase (60-70)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="legend-box yield-stable"></span>
                    <span>Stable Yield (40-60)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="legend-box yield-decrease-moderate"></span>
                    <span>Moderate Yield Decrease (30-40)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="legend-box yield-decrease-strong"></span>
                    <span>High Yield Decrease (0-30)</span>
                  </div>
                </div>
                <PopoverClose className="PopoverClose" aria-label="Close">
                  <Cross2Icon />
                </PopoverClose>
                <PopoverArrow className="PopoverArrow" />
              </PopoverContent>
            </PopoverPortal>
          </Popover>
        </CardHeader>
        <CardContent className="space-y-6">
          <CropSelector
            selectedCrop={selectedCrop}
            onCropChange={onCropChange}
          />
          <TimeSlider selectedYear={selectedYear} onYearChange={onYearChange} />
          {/* <div>
            <h3 className="text-lg font-medium mb-2">Yield Legend</h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center">
                <span className="legend-box yield-increase-strong"></span>
                <span>High Yield Increase (70-100)</span>
              </div>
              <div className="flex items-center">
                <span className="legend-box yield-increase-moderate"></span>
                <span>Moderate Yield Increase (60-70)</span>
              </div>
              <div className="flex items-center">
                <span className="legend-box yield-stable"></span>
                <span>Stable Yield (40-60)</span>
              </div>
              <div className="flex items-center">
                <span className="legend-box yield-decrease-moderate"></span>
                <span>Moderate Yield Decrease (30-40)</span>
              </div>
              <div className="flex items-center">
                <span className="legend-box yield-decrease-strong"></span>
                <span>High Yield Decrease (0-30)</span>
              </div>
            </div>
          </div> */}
        </CardContent>
      </Card>

      <RegionDetails
        regionData={selectedRegion}
        selectedCrop={selectedCrop}
        onCropChange={onCropChange}
      />
    </div>
  );
};

export default InfoPanel;
