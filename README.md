# Metabolome Lab - Scroll-Reactive Discovery Website

A stunning, interactive single-page website that tells the story of scientific discovery by animating the transition from the "Dark Metabolome" to the "Metabolome" through scroll-triggered animations.

## 🌟 Features

- **Scroll-Reactive 3D Globe**: Transforms from dark, mysterious wireframe to vibrant, data-rich visualization
- **Smooth Scroll Experience**: Powered by Lenis for buttery-smooth scrolling
- **Live Data Visualization**: Real-time charts showing simulated metabolome analysis
- **Futuristic AI-sthetic Design**: Clean, sleek interface with glowing accents and fluid motion
- **Responsive Design**: Optimized for all device sizes
- **Interactive Elements**: Hover effects and animated molecular structures

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd metabolome-lab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start both the React frontend (port 3000) and Express backend (port 3001) simultaneously.

### Alternative Commands

- **Frontend only:** `npm start`
- **Backend only:** `npm run server`
- **Production build:** `npm run build:prod`

## 🏗️ Project Structure

```
metabolome-lab/
├── src/
│   ├── components/
│   │   ├── MetabolomeSphere.tsx    # 3D globe component
│   │   ├── ScrollContainer.tsx     # Scroll management
│   │   └── LiveChart.tsx           # Data visualization
│   ├── App.tsx                     # Main application
│   └── App.css                     # Styling
├── server.js                       # Express backend
└── package.json
```

## 🎨 Design Philosophy

The website embodies an "AI-sthetic" design language with:

- **Dark to Light Journey**: Visual progression from mysterious dark metabolome to illuminated knowledge
- **Fluid Animations**: Smooth, physics-based transitions using Framer Motion
- **Glowing Accents**: Cyan/blue color scheme with subtle glow effects
- **3D Interactions**: Immersive Three.js globe that responds to scroll
- **Data Storytelling**: Live charts that simulate real laboratory analysis

## 🔧 Technology Stack

- **Frontend**: React 19 + TypeScript
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Data Visualization**: Chart.js + React Chart.js 2
- **Backend**: Node.js + Express
- **Styling**: CSS3 with custom properties

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

## 🎯 Key Components

### MetabolomeSphere
- 3D sphere that transforms based on scroll progress
- Wireframe mode for "dark metabolome"
- Filled mode with glowing data points for "metabolome"
- Smooth material transitions and lighting effects

### ScrollContainer
- Manages smooth scrolling with Lenis
- Tracks scroll progress for animations
- Provides scroll-based state to child components

### LiveChart
- Real-time data visualization
- Simulates live laboratory analysis
- Updates every 2 seconds with new data points
- Responsive chart design

## 🎬 Animation Sequence

1. **Hero Section**: Dark metabolome globe with mysterious atmosphere
2. **Scroll Transition**: Globe gradually transforms as user scrolls
3. **Discovery Process**: Molecular structures appear with staggered animations
4. **Knowledge Section**: Fully illuminated metabolome with live data dashboard

## 🔌 API Endpoints

- `GET /api/data` - Returns current metabolome data with history
- `GET /api/initial` - Returns initial dataset for chart initialization

## 🎨 Customization

The design can be easily customized by modifying:
- Color scheme in `App.css`
- Animation timing in component files
- 3D materials in `MetabolomeSphere.tsx`
- Chart styling in `LiveChart.tsx`

## 🚀 Deployment

For production deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm run server
   ```

The built React app will be served by the Express server on port 3001.

## 📄 License

This project is created for educational and demonstration purposes.

---

**Experience the journey from the unknown to the known through the power of discovery!** 🔬✨