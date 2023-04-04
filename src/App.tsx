import React, { useEffect, useState } from 'react'
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Router from '@/router';
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { getBrowserLang } from '@/utils/utlis'

import { useSelector, useDispatch } from 'react-redux';
import { CounterState, SetLanguage } from './redux/modules/global/action';
// import { handleChangeLanguage } from './utils/handleChangeLanguage';
import i18n from "@/i18n/index";

function App(props: any) {
  const [i18nLocale, setI18nLocale] = useState(zhCN);
  const ReduxLanguage = useSelector((store: { Global: CounterState }) => store.Global.language)
  const [language, setlang] = useState(ReduxLanguage);

  const dispatch = useDispatch()


  useEffect(() => {
    // 全局使用国际化
    setlang(language)
    console.log(language);
    
    if (!language) {
      if (getBrowserLang() === "zh") {
        return setI18nLocale(zhCN)
      } else {
        return setI18nLocale(enUS);
      }

    } else {
      if (language === "en") {
        setI18nLocale(enUS)
      } else {
        setI18nLocale(zhCN)
      }
      i18n.changeLanguage(language);
      dispatch(SetLanguage({ language: language }))
    }

  }, [language,dispatch])

  return (


    <HashRouter>
      <ConfigProvider locale={i18nLocale} >

        <Router />

      </ConfigProvider>
    </HashRouter>
  )
}

export default App
