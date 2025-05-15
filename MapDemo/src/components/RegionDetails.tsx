import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from './ui/button';
import { RegionProperties } from '@/data/dataTypes';

interface RegionDetailsProps {
  regionData: RegionProperties | null;
  selectedCrop: string;
  onCropChange: (crop: string) => void;
}

const RegionDetails: React.FC<RegionDetailsProps> = ({
  regionData,
  selectedCrop,
  onCropChange,
}) => {
  if (!regionData) {
    return (
      <Card className="flex-grow overflow-y-scroll">
        <CardHeader>
          <CardTitle>Region Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Select a region on the map to view details
          </p>
        </CardContent>
      </Card>
    );
  }

  // Helper function to get trend icon
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing':
        return '↗️';
      case 'decreasing':
        return '↘️';
      case 'stable':
        return '➡️';
      default:
        return '➡️';
    }
  };

  // Helper function to get CSS class for trend
  const getTrendClass = (trend: string) => {
    switch (trend) {
      case 'increasing':
        return 'text-green-600';
      case 'decreasing':
        return 'text-red-600';
      case 'stable':
        return 'text-amber-600';
      default:
        return '';
    }
  };

  // Handling the "All Crops" selection
  if (selectedCrop === 'all') {
    const allCropsData = regionData.crops.all;

    return (
      <Card className="flex-grow overflow-y-scroll">
        <CardHeader>
          <CardTitle>
            CropCast Yield Insights - {regionData.region_name} - All Crops
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">
              Aggregate Yield Projection:
              <span
                className={`ml-2 ${getTrendClass(allCropsData.yield_trend)}`}
              >
                {getTrendIcon(allCropsData.yield_trend)}
              </span>
            </h3>
            <Progress
              value={allCropsData.relative_yield_score}
              className="h-2 mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Overall score: {allCropsData.relative_yield_score}/100
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">
              Top Viable Crops + Yield Trend
            </h3>
            <div className="space-y-3">
              {allCropsData.top_crops.map((crop) => (
                <div key={crop.id} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      {crop.name}
                      <span className={getTrendClass(crop.trend)}>
                        {getTrendIcon(crop.trend)}
                      </span>
                    </span>
                    <span className="text-sm font-medium">
                      {crop.score}/100
                    </span>
                  </div>
                  <Progress value={crop.score} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Best Varieties</h3>
            <div className="space-y-3">
              {allCropsData.varieties.map((variety) => (
                <div key={variety.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span>{variety.name}</span>
                    <span className="text-sm font-medium">
                      {variety.score}/100
                    </span>
                  </div>
                  <Progress value={variety.score} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Crop name formatting
  const crop = selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1);

  // Get varieties for the selected crop
  const selectedCropData = regionData.crops[selectedCrop];
  const varieties = selectedCropData?.varieties || [];
  const inputs = selectedCropData?.inputs || [];

  return (
    <Card className="flex-grow overflow-y-scroll">
      <CardHeader>
        <CardTitle>
          CropCast Yield Insights - {regionData.region_name} - {crop}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {varieties.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">{crop} Varieties</h3>
            <div className="space-y-3">
              {varieties
                .sort((v1, v2) => v2.score - v1.score)
                .map((variety) => (
                  <div key={variety.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">
                        <span>
                          {variety.name
                            .replace('_', ' ')
                            .split(' ')
                            .map(
                              (word: string) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(' ')}
                        </span>
                        <Button size="sm" variant="secondary">
                          Plant It!
                        </Button>
                      </span>
                      <span className="text-sm font-medium">
                        {variety.score}/100
                      </span>
                    </div>
                    <Progress value={variety.score} className="h-2" />
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* {inputs.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">{crop} Inputs</h3>
            <div className="space-y-3">
              {inputs.map((input: any) => (
                <div key={input.input} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span>{input.input}</span>
                    <span className="text-sm font-medium">
                      {input.relativeAmount}/100
                    </span>
                  </div>
                  <Progress value={input.relativeAmount} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};

export default RegionDetails;
