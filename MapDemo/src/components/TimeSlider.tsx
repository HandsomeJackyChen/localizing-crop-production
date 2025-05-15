
import React from 'react';
import { Slider } from "@/components/ui/slider";

interface TimeSliderProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

const TimeSlider: React.FC<TimeSliderProps> = ({ selectedYear, onYearChange }) => {
  // Generate years from 2025 to 2100 in 5-year increments
  const years = Array.from({ length: 16 }, (_, i) => 2025 + i * 5);
  
  const handleSliderChange = (value: number[]) => {
    // Convert the slider value (0-15) to a year
    const yearIndex = value[0];
    const year = 2025 + yearIndex * 5;
    onYearChange(year);
  };

  // Convert year back to slider value (0-15)
  const sliderValue = (selectedYear - 2025) / 5;

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Year: {selectedYear}</h3>
        <span className="text-sm text-muted-foreground">2025 - 2100</span>
      </div>

      <Slider
        defaultValue={[sliderValue]}
        max={15}
        step={1}
        onValueChange={handleSliderChange}
        className="w-full"
      />

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>2025</span>
        <span>2050</span>
        <span>2075</span>
        <span>2100</span>
      </div>
    </div>
  );
};

export default TimeSlider;
