import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar
} from 'recharts';
import { toyotaPriceTrend, brandComparison } from './carPricesData';
import { useTranslation } from 'react-i18next'; // ✅ translation hook

function CarPrices() {
  const { t } = useTranslation(); // ✅ initialize translator

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('title')}</h2> {/* ✅ translated dashboard title */}

      <h3>{t('chart1')}</h3> {/* ✅ translated Toyota chart title */}
      <LineChart
        width={500}
        height={300}
        data={toyotaPriceTrend}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>

      <h3>{t('chart2')}</h3> {/* ✅ translated brand comparison title */}
      <BarChart
        width={500}
        height={300}
        data={brandComparison}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="brand" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default CarPrices;
