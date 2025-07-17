import React from 'react';
import { useTranslation } from 'react-i18next';
import CarPrices from './carPrices.jsx';

function App() {
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const dropdownStyle = {
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    backgroundColor: '#fff',
    color: '#008080',
    cursor: 'pointer'
  };

  return (
    <div style={{ backgroundColor: '#f3f3f3', minHeight: '100vh' }}>

      {/* 🔷 NAVIGATION BAR */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 30px',
        backgroundColor: '#008080',
        color: '#fff',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        flexWrap: 'wrap'
      }}>
        <div style={{ fontSize: '24px', marginRight: '20px' }}>{t('title')}</div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '18px' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>{t('Home')}</a>

          {/* ▼ Car Types Dropdown */}
          <select style={dropdownStyle}>
            <option>{t('carTypes')}</option>
            <option>{t('typeSUV')}</option>
            <option>{t('typeSedan')}</option>
            <option>{t('typeCoupe')}</option>
          </select>

          {/* ▼ Car Models Dropdown */}
          <select style={dropdownStyle}>
            <option>{t('carModels')}</option>
            <option>{t('modelCamry')}</option>
            <option>{t('modelCivic')}</option>
            <option>{t('modelMustang')}</option>
          </select>

          {/* ▼ Price Range Dropdown */}
          <select style={dropdownStyle}>
            <option>{t('priceRange')}</option>
            <option>{t('priceBelow25')}</option>
            <option>{t('priceBetween25And30')}</option>
            <option>{t('priceAbove30')}</option>
          </select>

          {/* 🌐 Language Switcher */}
          <select onChange={handleChangeLanguage} style={{ ...dropdownStyle, backgroundColor: '#fff', color: '#000' }}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </nav>

      {/* 📊 Main Dashboard Content */}
      <CarPrices />
    </div>
  );
}

export default App;
