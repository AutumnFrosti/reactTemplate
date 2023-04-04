import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 引入你所需的语言资源，这里只是举例
import translationEN from './lang/en.json';
import translationCN from './lang/cn.json';

const resources = {
  en: {
    translation: translationEN
  },
  cn: {
    translation: translationCN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en', // 如果找不到语言资源则使用默认语言
    interpolation: {
      escapeValue: false // 如果使用React，需要设置为false
    }
  });

export default i18n;
