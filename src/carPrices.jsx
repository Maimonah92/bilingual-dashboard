// CarPrices.jsx
import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import { useTranslation } from 'react-i18next';
import { priceTrends, brandComparison } from './carPricesData';

function CarPrices({ searchBrand }) {
  const { t } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState('Toyota');

  const knownBrands = Object.keys(priceTrends);
  const actualBrand = knownBrands.includes(searchBrand) ? searchBrand : selectedBrand;

  const axisTickStyle = { fill: '#333', fontSize: 16, fontWeight: 'bold' };
  const labelStyle = { fill: '#333', fontSize: 16 };

  const handleBrandChange = (e) => setSelectedBrand(e.target.value);

  const pieData = [
    { year: '2019', color: '#0088FE' },
    { year: '2022', color: '#00C49F' },
    { year: '2024', color: '#FFBB28' }
  ].map(({ year, color }) => {
    const yearData = priceTrends[actualBrand].find((item) => item.year === year);
    return {
      name: year,
      value: yearData ? yearData.price : 0,
      fill: color
    };
  });

  return (
    <div style={{ width: '100%', padding: '0 20px' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', padding: '30px 10px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#004d4d', marginBottom: '15px' }}>{t('title')}</h2>
        <p style={{ fontSize: '1.3rem', color: '#333', maxWidth: '800px', margin: '0 auto' }}>{t('description')}</p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '50px',
        paddingBottom: '50px',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>

        {/* Left Panel: Image + Info + Pie */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', width: '360px' }}>
          {!searchBrand && (
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#111' }}>
              {t('selectBrand')}:
              <select
                onChange={handleBrandChange}
                value={selectedBrand}
                style={{ marginLeft: '10px', padding: '8px 14px', fontSize: '16px', borderRadius: '6px' }}
              >
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
              </select>
            </div>
          )}

          <img
            src={`/assets/cars/${actualBrand.toLowerCase()}.gif`}
            alt={`${actualBrand} car`}
            style={{ height: '340px', width: '340px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 6px 16px rgba(0,0,0,0.2)' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />

          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '20px', width: '340px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '20px', color: '#111', marginBottom: '12px' }}>{t('factsTitle', { brand: actualBrand })}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '16px', color: '#111' }}>
              <li>🌐 {t('country')}: {actualBrand === 'Toyota' || actualBrand === 'Honda' ? '🇯🇵 Japan' : '🇺🇸 USA'}</li>
              <li>🚗 {t('model')}: {actualBrand === 'Toyota' ? 'Camry' : actualBrand === 'Honda' ? 'Civic' : 'Mustang'}</li>
              <li>💲 {t('avgPrice')}: {actualBrand === 'Toyota' ? '$25,000' : actualBrand === 'Honda' ? '$24,500' : '$26,000'}</li>
              <li>🛠 Engine: V6</li>
              <li>⚡ Hybrid: {actualBrand === 'Ford' ? 'No' : 'Yes'}</li>
              <li>⭐ Rating: 4.8/5</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '20px', width: '340px', textAlign: 'center', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '20px', color: '#111', marginBottom: '16px' }}>{t('pieTitle')}</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name }) => name}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Panel: Charts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', width: '800px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '30px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '24px', color: '#111', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>{t('chart1', { brand: actualBrand })}</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={priceTrends[actualBrand]}
                margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis
                  dataKey="year"
                  label={{ value: t('xYear'), position: 'insideBottom', offset: -5, ...labelStyle }}
                  tick={axisTickStyle}
                />
                <YAxis
                  label={{ value: t('yPrice'), angle: -90, position: 'insideLeft', offset: -10, ...labelStyle }}
                  tick={axisTickStyle}
                />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  wrapperStyle={{ paddingTop: 10, fontSize: '14px', color: '#333' }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#6a0dad"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 6 }}
                  name={t('price')}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '30px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '24px', color: '#111', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>{t('chart2')}</h3>
            <ResponsiveContainer width="100%" height={420}>
              <BarChart
                data={brandComparison}
                margin={{ top: 20, right: 30, left: 30, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis
                  dataKey="brand"
                  label={{ value: t('xBrand'), position: 'insideBottom', offset: -10, ...labelStyle }}
                  tick={axisTickStyle}
                />
                <YAxis
                  label={{ value: t('yPrice'), angle: -90, position: 'insideLeft', offset: -10, ...labelStyle }}
                  tick={axisTickStyle}
                />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  height={40}
                  wrapperStyle={{ fontSize: '14px', paddingTop: 10 }}
                />
                <Bar dataKey="price" fill="#00b8d9" name={t('price')} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPrices;
