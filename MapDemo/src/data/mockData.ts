import { RegionProperties } from './dataTypes';

export const mockGeoJSON: GeoJSON.FeatureCollection<
  GeoJSON.Geometry,
  RegionProperties
> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        region_id: 'agricultural_region_1',
        region_name: 'Agricultural Region 1',
        year: 2025,
        crops: {
          corn: {
            relative_yield_score: 85,
            yield_trend: 'increasing',
            varieties: [
              {
                name: 'drought_tolerant',
                score: 90,
              },
              {
                name: 'conventional',
                score: 80,
              },
            ],
          },
          soybeans: {
            relative_yield_score: 78,
            yield_trend: 'stable',
            varieties: [
              {
                name: 'high_protein',
                score: 82,
              },
              {
                name: 'early_maturity',
                score: 75,
              },
            ],
          },
          wheat: {
            relative_yield_score: 65,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'winter_hardy',
                score: 68,
              },
              {
                name: 'standard',
                score: 62,
              },
            ],
          },
        },
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-84.5070934, 35.1433888],
            [-84.5186806, 35.1271043],
            [-84.6585846, 35.1499859],
            [-84.7684479, 35.1679499],
            [-84.8014069, 35.1679499],
            [-84.9332428, 35.1948883],
            [-85.0032806, 35.2324749],
            [-85.1461029, 35.2683623],
            [-85.1461029, 35.2683623],
            [-85.2339935, 35.2414482],
            [-85.2559662, 35.2055489],
            [-85.2889252, 35.1516702],
            [-85.2889252, 35.0527999],
            [-85.2120209, 35.0078192],
            [-85.2010345, 34.9988201],
            [-85.0911713, 34.9267916],
            [-85.0801849, 34.8727287],
            [-85.014267, 34.7464436],
            [-84.9922943, 34.6651583],
            [-84.9703217, 34.5747475],
            [-84.9373627, 34.4570665],
            [-84.91539, 34.3754977],
            [-84.8055267, 34.2847724],
            [-84.7945404, 34.1939491],
            [-84.7725677, 34.1394081],
            [-84.7024012, 34.0974131],
            [-84.5705652, 34.0792159],
            [-84.5595789, 34.0883149],
            [-84.521513, 34.115251],
            [-84.4775677, 34.1879854],
            [-84.4522047, 34.2330577],
            [-84.4192457, 34.3782604],
            [-84.463191, 34.405458],
            [-84.49615, 34.4688845],
            [-84.5181227, 34.5232118],
            [-84.5181227, 34.6136786],
            [-84.463191, 34.6679114],
            [-84.430232, 34.7221087],
            [-84.4192457, 34.7401666],
            [-84.3643141, 34.8303969],
            [-84.3093824, 34.8484311],
            [-84.2324781, 34.8754749],
            [-84.1665173, 34.8734329],
            [-84.0127087, 34.864419],
            [-83.9358044, 34.8734329],
            [-83.8479137, 34.9545132],
            [-83.7929821, 35.0175203],
            [-83.6941051, 35.0445084],
            [-83.6391735, 35.0535025],
            [-83.5183239, 35.1164333],
            [-83.4524059, 35.1344047],
            [-83.3755016, 35.1703354],
            [-83.3425426, 35.2062502],
            [-83.2766247, 35.3318272],
            [-83.2985973, 35.3766289],
            [-83.3315563, 35.4393095],
            [-83.3095837, 35.492997],
            [-83.353529, 35.5734609],
            [-83.4414196, 35.6002643],
            [-83.5183239, 35.5823964],
            [-83.6721325, 35.5466486],
            [-83.8149548, 35.5019414],
            [-83.9687634, 35.4303581],
            [-84.056654, 35.2959679],
            [-84.0786266, 35.269063],
            [-84.2214489, 35.2152265],
            [-84.3972301, 35.1613542],
            [-84.5070934, 35.1433888],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        region_id: 'agricultural_region_2',
        region_name: 'Agricultural Region 2',
        year: 2025,
        crops: {
          corn: {
            relative_yield_score: 88,
            yield_trend: 'stable',
            varieties: [
              {
                name: 'drought_tolerant',
                score: 86,
              },
              {
                name: 'conventional',
                score: 90,
              },
            ],
          },
          soybeans: {
            relative_yield_score: 82,
            yield_trend: 'increasing',
            varieties: [
              {
                name: 'high_protein',
                score: 85,
              },
              {
                name: 'early_maturity',
                score: 79,
              },
            ],
          },
          wheat: {
            relative_yield_score: 70,
            yield_trend: 'stable',
            varieties: [
              {
                name: 'winter_hardy',
                score: 72,
              },
              {
                name: 'standard',
                score: 68,
              },
            ],
          },
        },
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-91.3346672, 39.6798443],
            [-91.3799429, 39.6871102],
            [-91.4603662, 39.6057543],
            [-91.4713526, 39.4956296],
            [-91.4510536, 39.4433851],
            [-91.2423134, 39.2905017],
            [-91.1975213, 39.223749],
            [-91.0876491, 39.1556302],
            [-90.9008789, 38.8824812],
            [-90.769043, 38.7112325],
            [-90.7910156, 38.7283759],
            [-90.8239746, 38.4793947],
            [-90.8349609, 38.4449847],
            [-90.8898926, 38.4105583],
            [-90.9777832, 38.3588879],
            [-91.0876465, 38.315801],
            [-91.1975098, 38.2209198],
            [-91.2493086, 38.1960671],
            [-91.2822676, 38.0664398],
            [-91.3152266, 38.0058682],
            [-91.4580488, 37.9452466],
            [-91.5679121, 37.867231],
            [-91.5898848, 37.8238533],
            [-91.5247393, 37.7369874],
            [-91.4258623, 37.6152513],
            [-91.3371134, 37.5717257],
            [-91.1833048, 37.5543083],
            [-91.1064005, 37.5194614],
            [-91.0294962, 37.4933155],
            [-90.9745646, 37.4409963],
            [-90.9086466, 37.397369],
            [-90.8756876, 37.3624488],
            [-90.6010294, 37.4060965],
            [-90.5722761, 37.4311142],
            [-90.4843855, 37.5008742],
            [-90.3964949, 37.5531516],
            [-90.3339243, 37.6050522],
            [-90.2350473, 37.6833448],
            [-90.1647949, 37.7098994],
            [-89.9644661, 37.728027],
            [-89.753108, 37.7573478],
            [-89.7640944, 37.8354797],
            [-89.7970533, 37.8875217],
            [-89.851985, 37.922196],
            [-90.1106787, 38.0048876],
            [-90.154624, 38.0914042],
            [-90.2864599, 38.1864542],
            [-90.3668833, 38.247685],
            [-90.3744793, 38.3547149],
            [-90.330534, 38.4302613],
            [-90.2223015, 38.562462],
            [-90.1470709, 38.6374557],
            [-90.1056576, 38.7201396],
            [-90.0878906, 38.8311498],
            [-90.1538086, 38.908133],
            [-90.2307129, 38.9337755],
            [-90.4284668, 38.942321],
            [-90.4943848, 38.8910328],
            [-90.5493164, 38.8739285],
            [-90.6152344, 38.8995834],
            [-90.637207, 39.0277188],
            [-90.6769466, 39.1481677],
            [-90.7194328, 39.221748],
            [-90.8183098, 39.3068079],
            [-90.9062004, 39.340803],
            [-91.1149406, 39.5359539],
            [-91.1478996, 39.5528977],
            [-91.2577629, 39.6460147],
            [-91.3346672, 39.6798443],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        region_id: 'agricultural_region_3',
        region_name: 'Agricultural Region 3',
        year: 2025,
        crops: {
          corn: {
            relative_yield_score: 80,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'drought_tolerant',
                score: 85,
              },
              {
                name: 'conventional',
                score: 75,
              },
            ],
          },
          soybeans: {
            relative_yield_score: 75,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'high_protein',
                score: 78,
              },
              {
                name: 'early_maturity',
                score: 72,
              },
            ],
          },
          wheat: {
            relative_yield_score: 72,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'winter_hardy',
                score: 76,
              },
              {
                name: 'standard',
                score: 68,
              },
            ],
          },
        },
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-95.0746536, 42.2562372],
            [-95.1350784, 42.2399721],
            [-95.1790237, 42.2074294],
            [-95.2284622, 42.1789408],
            [-95.3053665, 42.1300734],
            [-95.3602982, 42.0607799],
            [-95.3712845, 41.9995757],
            [-95.1790237, 42.0199836],
            [-95.1240921, 42.0811682],
            [-94.9757767, 42.0893217],
            [-94.8659134, 42.085245],
            [-94.7835159, 42.0567014],
            [-94.6461868, 42.0444645],
            [-94.5308304, 42.0363053],
            [-94.3715286, 42.028145],
            [-94.2616653, 42.0363053],
            [-94.2396927, 42.068936],
            [-94.1518021, 42.0444645],
            [-94.0858841, 42.040385],
            [-94.014473, 42.0648581],
            [-93.9320755, 42.0607799],
            [-93.8167191, 42.0648581],
            [-93.7178421, 42.0526227],
            [-93.6903763, 42.0526227],
            [-93.6629105, 42.1259994],
            [-93.6189651, 42.2237029],
            [-93.6299515, 42.3090696],
            [-93.7081432, 42.3621748],
            [-93.7575817, 42.4230288],
            [-93.8378763, 42.4962922],
            [-93.8653421, 42.544876],
            [-93.9037943, 42.6095957],
            [-94.0411234, 42.5610622],
            [-94.0740824, 42.548923],
            [-94.2223978, 42.4679342],
            [-94.3217039, 42.4414002],
            [-94.4319963, 42.4342107],
            [-94.5118833, 42.4270203],
            [-94.6146011, 42.391595],
            [-94.8677373, 42.3236669],
            [-94.9822998, 42.2610492],
            [-95.0811768, 42.2569836],
            [-95.0746536, 42.2562372],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        region_id: 'agricultural_region_4',
        region_name: 'Agricultural Region 4',
        year: 2025,
        crops: {
          corn: {
            relative_yield_score: 72,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'drought_tolerant',
                score: 78,
              },
              {
                name: 'conventional',
                score: 66,
              },
            ],
          },
          soybeans: {
            relative_yield_score: 68,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'high_protein',
                score: 70,
              },
              {
                name: 'early_maturity',
                score: 66,
              },
            ],
          },
          wheat: {
            relative_yield_score: 85,
            yield_trend: 'stable',
            varieties: [
              {
                name: 'winter_hardy',
                score: 88,
              },
              {
                name: 'standard',
                score: 82,
              },
            ],
          },
        },
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-94.2904615, 45.5123769],
            [-94.2810631, 45.5428778],
            [-94.3250084, 45.546725],
            [-94.4019127, 45.5890262],
            [-94.4446993, 45.6004072],
            [-94.5428467, 45.6217217],
            [-94.7131348, 45.6754822],
            [-94.7287989, 45.6845372],
            [-94.8221827, 45.6845372],
            [-94.9540186, 45.7190647],
            [-94.9768066, 45.7291911],
            [-95.1306152, 45.7176864],
            [-95.1646256, 45.7134913],
            [-95.2195573, 45.7058197],
            [-95.3184342, 45.671284],
            [-95.3513932, 45.6290448],
            [-95.4337907, 45.6751223],
            [-95.4589391, 45.6898735],
            [-95.5138707, 45.7435686],
            [-95.5518937, 45.7568645],
            [-95.6225753, 45.7713248],
            [-95.7187486, 45.8150419],
            [-95.768187, 45.8112132],
            [-95.8615708, 45.8915614],
            [-95.8725572, 45.8341816],
            [-95.8725572, 45.7805738],
            [-95.8890367, 45.7154091],
            [-95.8938003, 45.6681651],
            [-95.8992934, 45.6105551],
            [-95.8992934, 45.5798056],
            [-95.8718276, 45.5605785],
            [-95.8278823, 45.5182559],
            [-95.8151579, 45.5066627],
            [-95.7767057, 45.4527403],
            [-95.7458496, 45.4230791],
            [-95.6854248, 45.392227],
            [-95.657959, 45.3690768],
            [-95.625, 45.3343338],
            [-95.6030273, 45.3188856],
            [-95.6030273, 45.2763813],
            [-95.6085205, 45.2284806],
            [-95.6140137, 45.1781648],
            [-95.6085205, 45.1355552],
            [-95.5535889, 45.1278045],
            [-95.4751825, 45.1200983],
            [-95.4147148, 45.1144655],
            [-95.3081989, 45.1105889],
            [-95.2092791, 45.1174637],
            [-95.1429105, 45.1255791],
            [-95.0887942, 45.1259424],
            [-95.0156879, 45.143562],
            [-94.9907541, 45.1749127],
            [-94.9653912, 45.2138349],
            [-94.9442554, 45.2455095],
            [-94.9112964, 45.3112202],
            [-94.888401, 45.3214807],
            [-94.7455788, 45.3755284],
            [-94.6969557, 45.3967775],
            [-94.6530104, 45.4237719],
            [-94.5596266, 45.4468997],
            [-94.4552565, 45.4507534],
            [-94.3618727, 45.4623129],
            [-94.2904615, 45.5123769],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        region_id: 'agricultural_region_5',
        region_name: 'Agricultural Region 5',
        year: 2025,
        crops: {
          corn: {
            relative_yield_score: 82,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'drought_tolerant',
                score: 84,
              },
              {
                name: 'conventional',
                score: 80,
              },
            ],
          },
          soybeans: {
            relative_yield_score: 80,
            yield_trend: 'decreasing',
            varieties: [
              {
                name: 'high_protein',
                score: 82,
              },
              {
                name: 'early_maturity',
                score: 78,
              },
            ],
          },
          wheat: {
            relative_yield_score: 68,
            yield_trend: 'stable',
            varieties: [
              {
                name: 'winter_hardy',
                score: 70,
              },
              {
                name: 'standard',
                score: 66,
              },
            ],
          },
        },
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-100.5616379, 42.7993683],
            [-100.5286789, 42.6864103],
            [-100.5067062, 42.5165875],
            [-100.5286789, 42.3625395],
            [-100.5396652, 42.2535531],
            [-100.5481195, 42.1010245],
            [-100.5151606, 42.0112951],
            [-100.3723383, 41.9459577],
            [-100.2502441, 41.8777415],
            [-100.071373, 41.8070212],
            [-100.0322342, 41.7547941],
            [-99.8894119, 41.5988847],
            [-99.7480488, 41.5315836],
            [-99.6789551, 41.4509614],
            [-99.5975018, 41.4284413],
            [-99.4107342, 41.3377671],
            [-99.2608738, 41.2938659],
            [-99.1955566, 41.228249],
            [-98.9756584, 41.1221681],
            [-98.8581562, 41.0600032],
            [-98.7043476, 41.0019901],
            [-98.4829903, 41.0038686],
            [-98.406086, 40.9872845],
            [-98.2522774, 41.0287369],
            [-98.0764961, 41.1115635],
            [-97.9181385, 41.1739379],
            [-97.6434803, 41.2565814],
            [-97.5585938, 41.3273263],
            [-97.4816895, 41.418015],
            [-97.3937988, 41.4427264],
            [-97.3278809, 41.4509614],
            [-97.0092773, 41.483891],
            [-96.8225098, 41.4756602],
            [-96.7126465, 41.4921208],
            [-96.6467285, 41.516804],
            [-96.5258789, 41.5332541],
            [-96.5039063, 41.5579216],
            [-96.6137695, 41.6400784],
            [-96.7126465, 41.7057285],
            [-96.7126465, 41.7795049],
            [-96.7236328, 41.8613792],
            [-96.8724203, 41.9305707],
            [-96.9332743, 41.9732749],
            [-97.0651102, 42.0385842],
            [-97.1960449, 42.041134],
            [-97.311101, 42.0684422],
            [-97.4227238, 42.1064374],
            [-97.4556828, 42.2041711],
            [-97.4666691, 42.3342478],
            [-97.4886417, 42.3504886],
            [-97.631464, 42.3748418],
            [-97.7783737, 42.3910051],
            [-97.922945, 42.4056503],
            [-98.0419922, 42.4234565],
            [-98.2398004, 42.4315756],
            [-98.4924316, 42.3910086],
            [-98.6210918, 42.4116074],
            [-98.7670898, 42.488302],
            [-98.8550138, 42.4721012],
            [-99.2504883, 42.4964029],
            [-99.4921875, 42.5611729],
            [-99.7094679, 42.5426469],
            [-99.8657227, 42.5206995],
            [-100.0854492, 42.5287963],
            [-100.2941895, 42.6097062],
            [-100.3710988, 42.6662863],
            [-100.6237793, 42.8437513],
            [-100.5616379, 42.7993683],
          ],
        ],
      },
    },
  ],
};

// ...existing code...

// Add inputs to the initial mockGeoJSON data
Object.values(mockGeoJSON.features).forEach((feature) => {
  Object.values(feature.properties.crops).forEach((crop) => {
    crop.inputs = [
      { input: 'Water', relativeAmount: 100 },
      { input: 'Fertilizer', relativeAmount: 100 },
      { input: 'Pest Control', relativeAmount: 100 },
    ];
  });
});

// Update the generateYearData function to include input variations
export const generateYearData = () => {
  const years = [];

  for (let year = 2025; year <= 2100; year += 5) {
    const yearData = {
      type: 'FeatureCollection',
      features: mockGeoJSON.features.map((feature) => {
        const yearsPassed = year - 2025;
        const yearFactor = yearsPassed / 15;

        const newFeature = JSON.parse(JSON.stringify(feature));
        newFeature.properties.year = year;

        Object.keys(newFeature.properties.crops).forEach((cropName) => {
          const crop = newFeature.properties.crops[cropName];
          let scoreModifier = 0;

          if (crop.yield_trend === 'increasing') {
            scoreModifier = Math.min(15, Math.round(10 * yearFactor));
          } else if (crop.yield_trend === 'decreasing') {
            scoreModifier = Math.max(-25, Math.round(-15 * yearFactor));
          } else {
            scoreModifier = Math.round((Math.random() * 10 - 5) * yearFactor);
          }

          crop.relative_yield_score = Math.max(
            0,
            Math.min(100, crop.relative_yield_score + scoreModifier)
          );

          crop.varieties.forEach((variety) => {
            const varietyModifier =
              scoreModifier + Math.round(Math.random() * 6 - 3);
            variety.score = Math.max(
              0,
              Math.min(100, variety.score + varietyModifier)
            );
          });

          // Update inputs based on yield trend
          crop.inputs.forEach((input) => {
            let inputModifier = 0;
            if (crop.yield_trend === 'increasing') {
              inputModifier = Math.round(-5 * yearFactor); // Decrease input usage
            } else if (crop.yield_trend === 'decreasing') {
              inputModifier = Math.round(10 * yearFactor); // Increase input usage
            } else {
              inputModifier = Math.round((Math.random() * 4 - 2) * yearFactor); // Small fluctuations
            }

            input.relativeAmount = Math.max(
              50,
              Math.min(150, input.relativeAmount + inputModifier)
            ); // Clamp between 50 and 150
          });
        });

        return newFeature;
      }),
    };

    years.push(yearData);
  }

  return years;
};

export const yearData: Array<typeof mockGeoJSON> = generateYearData();

// Function to generate aggregate yield data across all crops
export const generateAggregateYieldData = () => {
  const aggregatedData = yearData.map((yearFeatureCollection) => {
    // Deep clone the feature collection to avoid modifying original data
    const aggregatedFeatureCollection: typeof mockGeoJSON = JSON.parse(
      JSON.stringify(yearFeatureCollection)
    );

    // For each region in this year
    aggregatedFeatureCollection.features.forEach((feature) => {
      const crops = feature.properties.crops;
      const cropEntries = Object.entries(crops);

      // Define suitability threshold - crops with scores below this won't significantly impact aggregate score
      const SUITABILITY_THRESHOLD = 50;

      // Filter suitable crops (crops with sufficient yield scores)
      const suitableCrops = cropEntries.filter(
        ([_, cropData]) =>
          cropData.relative_yield_score >= SUITABILITY_THRESHOLD
      );

      // If no crops are suitable, use all crops but with lower weights
      const cropsToAggregate =
        suitableCrops.length > 0 ? suitableCrops : cropEntries;

      // Calculate weights based on relative yield scores (higher scores get more weight)
      const totalWeight = cropsToAggregate.reduce(
        (sum, [_, cropData]) => sum + cropData.relative_yield_score,
        0
      );

      // Calculate weighted average yield score
      let aggregateScore = 0;
      if (totalWeight > 0) {
        aggregateScore = Math.round(
          cropsToAggregate.reduce(
            (sum, [_, cropData]) =>
              sum +
              (cropData.relative_yield_score * cropData.relative_yield_score) /
                totalWeight,
            0
          )
        );
      }

      // Determine aggregate trend based on weighted voting
      const trendCounts = {
        increasing: 0,
        stable: 0,
        decreasing: 0,
      };

      cropsToAggregate.forEach(([_, cropData]) => {
        const weight = cropData.relative_yield_score / totalWeight;
        trendCounts[cropData.yield_trend] += weight;
      });

      let aggregateTrend;
      if (
        trendCounts.increasing > trendCounts.stable &&
        trendCounts.increasing > trendCounts.decreasing
      ) {
        aggregateTrend = 'increasing';
      } else if (
        trendCounts.decreasing > trendCounts.stable &&
        trendCounts.decreasing > trendCounts.increasing
      ) {
        aggregateTrend = 'decreasing';
      } else {
        aggregateTrend = 'stable';
      }

      // Generate top varieties across all suitable crops
      const allVarieties: { name: string; score: number; crop: string }[] = [];
      cropsToAggregate.forEach(([cropId, cropData]) => {
        cropData.varieties.forEach((variety) => {
          allVarieties.push({
            name: `${cropId}_${variety.name}`,
            score: variety.score,
            crop: cropId,
          });
        });
      });

      // Sort varieties by score and take top 5
      const topVarieties = allVarieties
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map((v) => ({
          name: `${v.crop.charAt(0).toUpperCase() + v.crop.slice(1)} - ${v.name
            .split('_')
            .slice(1)
            .join('_')
            .replace('_', ' ')
            .split(' ')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}`,
          score: v.score,
        }));

      // Add aggregate crop data to the feature
      feature.properties.crops.all = {
        relative_yield_score: aggregateScore,
        yield_trend: aggregateTrend,
        varieties: topVarieties,
        top_crops: cropsToAggregate
          .map(([cropId, cropData]) => ({
            id: cropId,
            name: cropId.charAt(0).toUpperCase() + cropId.slice(1),
            score: cropData.relative_yield_score,
            trend: cropData.yield_trend,
          }))
          .sort((a, b) => b.score - a.score),
      };
    });

    return aggregatedFeatureCollection;
  });

  return aggregatedData;
};

export const aggregatedYearData = generateAggregateYieldData();
