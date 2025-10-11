const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Simulated metabolome data
let dataPoints = [];
let timeCounter = 0;

// Generate random metabolome data
function generateMetabolomeData() {
  timeCounter += 1;
  
  const baseValue = Math.sin(timeCounter * 0.1) * 50 + 100;
  const noise = (Math.random() - 0.5) * 20;
  
  return {
    timestamp: new Date().toISOString(),
    time: timeCounter,
    value: Math.max(0, baseValue + noise),
    metabolites: Math.floor(Math.random() * 50) + 20,
    confidence: Math.random() * 0.3 + 0.7,
    category: ['Lipids', 'Amino Acids', 'Carbohydrates', 'Nucleotides'][Math.floor(Math.random() * 4)]
  };
}

// Initialize with some data points
for (let i = 0; i < 20; i++) {
  dataPoints.push(generateMetabolomeData());
}

// API endpoint for live data
app.get('/api/data', (req, res) => {
  const newData = generateMetabolomeData();
  dataPoints.push(newData);
  
  // Keep only last 100 data points
  if (dataPoints.length > 100) {
    dataPoints = dataPoints.slice(-100);
  }
  
  res.json({
    current: newData,
    history: dataPoints.slice(-20), // Return last 20 points for chart
    total: dataPoints.length
  });
});

// API endpoint for initial data
app.get('/api/initial', (req, res) => {
  res.json({
    history: dataPoints,
    total: dataPoints.length
  });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/data`);
});
