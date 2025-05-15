
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Sprout } from 'lucide-react';

interface CropSelectorProps {
  selectedCrop: string;
  onCropChange: (crop: string) => void;
}

const CropSelector: React.FC<CropSelectorProps> = ({ selectedCrop, onCropChange }) => {
  const crops = [
    { id: 'all', name: 'All Crops', icon: <Sprout className="h-5 w-5" /> },
    { id: 'corn', name: 'Corn', icon: '🌽' },
    { id: 'soybeans', name: 'Soybeans', icon: '🫘' },
    { id: 'wheat', name: 'Wheat', icon: '🌾' }
  ];

  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg font-medium">Select Crop</h3>
      <div className="flex flex-wrap gap-2">
        {crops.map((crop) => (
          <Button
            key={crop.id}
            onClick={() => onCropChange(crop.id)}
            variant={selectedCrop === crop.id ? "default" : "outline"}
            className={cn(
              "flex items-center gap-2",
              selectedCrop === crop.id ? "bg-primary text-primary-foreground" : ""
            )}
          >
            <span className="text-lg">{typeof crop.icon === 'string' ? crop.icon : crop.icon}</span>
            {crop.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CropSelector;
