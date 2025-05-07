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
| 🌡️ Climate            | Temp, precipitation, radiation       | [Berkeley Earth Data](https://berkeleyearth.org/data/), [CHIRPS](https://www.chc.ucsb.edu/data/chirps), [NASA POWER](https://power.larc.nasa.gov/) |
| 💧 Water              | Precip, streamflow, irrigation       | [GPCC (Station)](https://psl.noaa.gov/data/gridded/data.gpcc.html), [GPCP (satellite+gauge)](https://psl.noaa.gov/data/gridded/data.gpcp.html), [GPM](https://gpm.nasa.gov/data), [GSCD](https://data.jrc.ec.europa.eu/dataset/09991d93-0336-4e34-9d3e-5927b9658a3d), [MIRCA-OS](https://github.com/MIRCA-OS/MIRCA-OS_Code​) |
| 🌱 Soil               | Nutrients, moisture, texture         | [SoilGrids](https://soilgrids.org/), [ESA CCI](https://www.esa-soilmoisture-cci.org/), [SMAP](https://smap.jpl.nasa.gov/) |
| 🗺️ Land Cover         | Land use, crop type                  | [MODIS LULC](https://modis.gsfc.nasa.gov/data/dataprod/mod12.php), [CROPGRIDS](https://figshare.com/articles/dataset/CROPGRIDS/22491997) |
| 🏔️ Topography         | Elevation, slope                     | [SRTM](https://www.earthdata.nasa.gov/data/instruments/srtm), [Copernicus DEM](https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM) |
| 🌿 Vegetation Index   | NDVI/EVI, crop health/phenology      | [MODIS NDVI](https://modis.gsfc.nasa.gov/data/dataprod/mod13.php), [GIMMS NDVI3g](https://climatedataguide.ucar.edu/climate-data/ndvi-normalized-difference-vegetation-index-3rd-generation-nasagfsc-gimms), [Sentinel-2](https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2) |

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

## 💼 Commercialization & Long-Term Vision

The long-term strategy behind this platform is to connect and empower small business owners, such as restaurants, tea houses, and specialty retailers — a group that vastly outnumbers farmers and collectively shapes significant food demand.

### 🔄 Demand-Driven Crop Strategy

Rather than trying to persuade farmers with climate data alone (which often doesn’t drive action due to the focus on profitability and subsidies), we flip the model:

- Aggregate demand from small businesses who want to reduce their costs and source more locally
- Help these businesses identify where key imported crops (e.g., tea, avocado) can be grown domestically
- Provide cost comparison insights, including the impact of tariffs (e.g., U.S.–Mexico avocado imports or U.S.–China tea tariffs)

This model reduces uncertainty for farmers, who gain confidence knowing there’s already local demand for specific crops, making them more likely to shift their production or use underutilized land areas (like gaps in center-pivot irrigation systems).

### 🥑🌿 Real-World Example Use Cases:

- Avocados: Inform Mexican/brunch restaurants where they could source from U.S.-grown avocados
- Tea: Inform local tea houses where U.S.-grown tea could substitute imported Chinese tea

### 🧩 Community Engagement & Market Entry

We can promote and advocate this platform directly to small business communities through:
- Regional restaurant alliances
- Local chambers of commerce
- Community business meetings and food cooperatives

These existing networks are ideal for presenting the tool, collecting feedback, and building an early user base. Their endorsement can serve as a powerful bridge between tech innovation and community-driven agricultural planning.

### 💡 Monetization & Policy Impact:
- Patent the platform and license it to large buyers (e.g., Starbucks, Whole Foods) as a sourcing intelligence tool
- Collaborate with the USDA to align crop suitability with agricultural subsidy planning
- Scale the platform to become a tool for climate-aligned supply chain management and food system resilience

---

## 💻 Technologies & Tools

- 🧪 **Python/R** – Data wrangling, ML models, visualization; classification, clustering, or matching crop zones, and cost analysis  
- 🌍 **Google Earth Engine** – Remote sensing & spatial processing  
- 🗺️ **Interactive map application / ArcGIS / QGIS** – Geospatial analysis and visualization  
- 🧰 **GitHub + Streamlit or React (dashboard prototype)** – (Planned) front-end or dashboard  
- 📂 **Jupyter Notebooks** – Model prototyping and documentation

---

## 🧑‍🤝‍🧑 Team Roles

Our collaborators specialize and are interested in:
- **Data Scientist/ML Developer** (classification, clustering, or matching crop zones, and cost analysis)
- **Geospatial Analysis** (remote sensing, GIS: preprocess spatial datasets)
- **Frontend/UX** (dashboard or web app: for visualization/dashboard)
- **Climate/Agri/Env Economics or Policy Thinker** (for real-world alignment)

---

## ✅ Hackathon Goals

- [x] Draft concept & validate use cases  
- [x] Meet with potential collaborators  
- [ ] Finalize core datasets and processing to match crop environmental requirements to spatial data 
- [ ] Build a proof-of-concept suitability scoring model  
- [ ] Create early-stage dashboard or prototype  
- [ ] Demonstrate cost-reduction potential for small businesses shifting from imports  
- [ ] Outline outreach strategy to local business networks and commercialization roadmap

---

## 📄 License/Patent

TBD – For hackathon demo and research purposes only (patent pending strategy in development).

---

## 🙋 About the Team
(Feel free to put down your name, your background, and your proposed contribution to the project)

“Jacky” Chen Xu: I'm a recent Ph.D. in Civil Engineering from Washington State University. I specialize in water resources, climate and hydrologic modeling, GIS/remote sensing, and stakeholder-driven research. My work spans agricultural water demand forecasting, soil moisture modeling, and cross-sector communication. Let’s team up to build something real and impactful! 🌾📡

Theertha Shetty: I’m a Product and UX Designer. I have a Master’s in Human Centered Design and Engineering and can take a product from 0-1. My specialties include user research, competitor research, UX + UI Design. My contributions will be the presentation of our research findings and the dashboard prototype.   

Colin Wilson: I'm a mechanical engineer with many years of industry experience, and more recently I completed a masters degree at UW. Much of my career has been focused on structural design, as well as product concept and prototyping. My contribution to this project will be in product concept development, product testing, presentation work, business plan development, and deep dive research into any issues relevant to the project.

Elham Afruzi: I have a Ph.D. in Industrial Engineering with experience in data science and machine learning. I can support data exploration, visualization, statistical analysis, and deploying ML models. Looking forward to working with you all!

Ben Schulz: I’m a frontend software engineer who loves making complex systems feel simple. I’m excited about putting together some map views and visualizations to help bring the data to life!

---
