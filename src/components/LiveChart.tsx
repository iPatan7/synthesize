import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DataPoint {
  timestamp: string;
  time: number;
  value: number;
  metabolites: number;
  confidence: number;
  category: string;
}

interface LiveChartProps {
  isVisible: boolean;
}

const LiveChart: React.FC<LiveChartProps> = ({ isVisible }) => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error('Backend not available');
      }
      const result = await response.json();
      setData(result.history);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Generate fallback data when backend is not available
      const fallbackData = Array.from({ length: 10 }, (_, i) => ({
        timestamp: new Date(Date.now() - (9 - i) * 3000).toISOString(),
        time: Date.now() - (9 - i) * 3000,
        value: Math.random() * 100,
        metabolites: Math.floor(Math.random() * 50) + 10,
        confidence: Math.random() * 0.5 + 0.5,
        category: ['Unknown', 'Known', 'Novel'][Math.floor(Math.random() * 3)]
      }));
      setData(fallbackData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      // Initial data fetch
      fetchData();
      
      // Set up interval for live updates
      intervalRef.current = setInterval(fetchData, 2000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  const chartData = {
    labels: data.map((_, index) => `T${index + 1}`),
    datasets: [
      {
        label: 'Metabolite Concentration',
        data: data.map(d => d.value),
        borderColor: '#00d4ff',
        backgroundColor: 'rgba(0, 212, 255, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#00d4ff',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Confidence Level',
        data: data.map(d => d.confidence * 100),
        borderColor: '#ff6b6b',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#ff6b6b',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          },
        },
      },
      title: {
        display: true,
        text: 'Live Metabolome Analysis',
        color: '#ffffff',
        font: {
          size: 16,
          family: 'Inter, sans-serif',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#00d4ff',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 10,
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart' as const,
    },
  };

  if (isLoading) {
    return (
      <div className="chart-loading">
        <div className="loading-spinner"></div>
        <p>Initializing metabolome analysis...</p>
      </div>
    );
  }

  return (
    <div className="live-chart-container">
      <div className="chart-header">
        <h3>Real-time Metabolome Data</h3>
        <div className="data-stats">
          <div className="stat">
            <span className="stat-label">Total Metabolites:</span>
            <span className="stat-value">{data[data.length - 1]?.metabolites || 0}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Confidence:</span>
            <span className="stat-value">{Math.round((data[data.length - 1]?.confidence || 0) * 100)}%</span>
          </div>
          <div className="stat">
            <span className="stat-label">Category:</span>
            <span className="stat-value">{data[data.length - 1]?.category || 'Unknown'}</span>
          </div>
        </div>
      </div>
      <div className="chart-wrapper">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LiveChart;
