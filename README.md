# 🌱 Climate-Aware Crop Localization Platform
Localizing Crop Production with Climate, Soil, and Land Use Data

**Hackathon Project | Seattle Climate Hackathon 2025**  
*By "Jacky" Chen Xu, Ph.D.*

---

## 🚀 Project Overview

This project aims to identify viable locations for local crop production as a strategy to reduce dependence on imported crops and enhance regional food security. By integrating multi-source environmental data — including climate, soil, and land use — we will develop a data-driven tool that pinpoints optimal regions for cultivating crops traditionally sourced from outside a given country or region.

The core idea is to build a data-driven platform that helps **localize the production of imported crops** by identifying environmentally suitable growing regions using climate, soil, and land use data. By assessing and matching agro-ecological requirements of key crops with spatial environmental data using machine learning, geospatial analysis, and remote sensing, our target is to visualize the results in an intuitive, interactive format, and offer users cost-reduction incentives.

The long-term vision is to empower **small business owners** (restaurants, retailers, tea houses, etc.) to shift away from global imports and source their crops locally or domestically — supporting climate resilience, cost savings, and sustainable food systems.

---

## 🌍 Why This Matters

- 🌾 **Food Security**: Localizing agriculture mitigates risks tied to global supply chains, price shocks, and geopolitical instability  
- 🌱 **Sustainability**: Reducing food miles contributes to lower carbon emissions and improved environmental resilience
- 💸 **Cost Efficiency**: Helping businesses bypass import tariffs by sourcing closer to home  
- 📊 **Data-Driven Planning**: Guiding strategic decisions with spatial intelligence to guide land-use decisions 
---

## 📊 Data Sources

| Parameter             | Description                          | Source |
|-----------------------|--------------------------------------|--------|
| 🌡️ Climate            | Temp, precipitation, radiation       | [NASA POWER](https://power.larc.nasa.gov/), [ERA5](https://www.ecmwf.int/en/forecasts/datasets/reanalysis-datasets/era5), [CHIRPS](https://www.chc.ucsb.edu/data/chirps) |
| 🌱 Soil               | Moisture, nutrients, texture         | [SoilGrids](https://soilgrids.org/), [SMAP](https://smap.jpl.nasa.gov/), [ESA CCI](https://www.esa-soilmoisture-cci.org/) |
| 🗺️ Land Cover        | Crop types, land use                 | [Copernicus LC](https://lcviewer.vito.be/), [MODIS LULC](https://modis.gsfc.nasa.gov/data/dataprod/mod12.php), [GLAD](https://glad.umd.edu/dataset/crop-mask) |
| 🏔️ Topography        | Elevation, slope                     | [SRTM](https://www2.jpl.nasa.gov/srtm/), [Copernicus DEM](https://spacedata.copernicus.eu/web/cscda/datasets?search=DEM), [ASTER GDEM](https://earthdata.nasa.gov/) |
| 🌿 Vegetation Index  | NDVI/EVI, crop health/phenology     | [MODIS NDVI](https://modis.gsfc.nasa.gov/data/dataprod/mod13.php), [Sentinel-2](https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2), [GIMMS NDVI3g](https://ecocast.arc.nasa.gov/data/pub/gimms/) |

---

## 🧠 Core Methodology

1. **Crop Environmental Profiling**  
   Define ideal growth conditions for imported crops (e.g., avocado, tea).

2. **Suitability Analysis**  
   Match those conditions to spatial datasets using geospatial analysis and ML tools.

3. **Business-Driven Mapping**  
   Connect small business owners to nearby regions capable of crop production.

4. **Cost Comparison**  
   Estimate savings from domestic production vs. importing (e.g., tariffs, transport).

---

## 🧩 Commercialization Vision

Instead of targeting farmers directly, the platform **empowers small businesses** to influence farming decisions:
- Leverages community demand through **restaurant alliances**, **tea houses**, and **chambers of commerce**
- Encourages farmers to adjust cropping strategies when **demand certainty** is high
- Builds a scalable solution to eventually license to larger enterprises (e.g., Starbucks)
- Supports USDA engagement to shape **climate-aligned subsidy policies**

---

## 💻 Technologies & Tools

- 🌍 **Google Earth Engine** – Remote sensing & spatial processing  
- 🧪 **Python/R** – Data wrangling, ML models, cost analysis  
- 🗺️ **QGIS / ArcGIS** – Geospatial visualization  
- 🧰 **GitHub + Streamlit or React** – (Planned) front-end or dashboard  
- 📂 **Jupyter Notebooks** – Model prototyping and documentation

---

## 🧑‍🤝‍🧑 Team Roles

We're looking for collaborators with experience or interest in:
- **Machine Learning** (crop zone classification)
- **Geospatial Analysis** (remote sensing, GIS)
- **Frontend/UX** (dashboard or web app)
- **Climate/Agri/Env Economics or Policy Thinker** (for real-world alignment)

> 👍 DM @Jacky or drop a comment in the channel if you’re interested in contributing!

---

## ✅ Hackathon Goals

- [x] Draft concept & validate use cases  
- [x] Meet with potential collaborators  
- [ ] Finalize core datasets and preprocessing  
- [ ] Build suitability scoring model  
- [ ] Estimate cost-savings model for selected crops  
- [ ] Create early-stage dashboard or prototype  
- [ ] Pitch to judges + submit MVP

---

## 📌 Example Use Cases

- 🥑 **Avocados**: Can brunch spots in California source them domestically instead of from Mexico?  
- 🍵 **Tea**: Can U.S. tea houses shift from Chinese imports to U.S. climate-compatible tea zones?

---

## 📄 License

TBD – For hackathon demo and research purposes only (patent pending strategy in development).

---

## 🙋 About the Team
(Feel free to put down your name, your background, and your proposed contribution to the project)

“Jacky” Chen Xu: I'm a recent Ph.D. in Civil Engineering from Washington State University. I specialize in water resources, climate and hydrologic modeling, GIS/remote sensing, and stakeholder-driven research. My work spans agricultural water demand forecasting, soil moisture modeling, and cross-sector communication. Let’s team up to build something real and impactful! 🌾📡

Theertha Shetty: I’m a Product and UX Designer. I have a Master’s in Human Centered Design and Engineering and can take a product from 0-1. My specialties include user research, competitor research, UX + UI Design. My contributions will be the presentation of our research findings and the dashboard prototype.   

Colin Wilson: I'm a mechanical engineer with many years of industry experience, and more recently I completed a masters degree at UW. Much of my career has been focused on structural design, as well as product concept and prototyping. My contribution to this project will be in product concept development, product testing, presentation work, business plan development, and deep dive research into any issues relevant to the project.

---
