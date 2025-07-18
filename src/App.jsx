// App.jsx
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
    <div style={{ backgroundColor: '#f3f3f3', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <nav style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 30px', backgroundColor: '#008080', color: '#fff', fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '24px', marginRight: '20px' }}>{t('title')}</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', fontSize: '16px' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>{t('Home')}</a>

          <select style={dropdownStyle}>
            <option>{t('carTypes')}</option>
            <option>{t('typeSUV')}</option>
            <option>{t('typeSedan')}</option>
            <option>{t('typeCoupe')}</option>
          </select>

          <select style={dropdownStyle}>
            <option>{t('carModels')}</option>
            <option>{t('modelCamry')}</option>
            <option>{t('modelCivic')}</option>
            <option>{t('modelMustang')}</option>
          </select>

          <select style={dropdownStyle}>
            <option>{t('priceRange')}</option>
            <option>{t('priceBelow25')}</option>
            <option>{t('priceBetween25And30')}</option>
            <option>{t('priceAbove30')}</option>
          </select>

          <select onChange={handleChangeLanguage} style={{ ...dropdownStyle, backgroundColor: '#fff', color: '#000' }}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </nav>

      <main style={{ display: 'flex', justifyContent: 'center', padding: '30px 20px' }}>
        <div style={{ width: '100%', maxWidth: '1600px' }}>
          <CarPrices />
        </div>
      </main>
    </div>
  );
}

export default App;
