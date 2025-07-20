import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
