export const getBrowserLang = () => {
    // let browserLang = navigator.language ? navigator.language : navigator?.browserLanguage;
    let browserLang = navigator.languages && navigator.languages.length ? navigator.languages[0] : (navigator.language || navigator.language);
    let defaultBrowserLang = "";
    if (browserLang && (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn")) {
        defaultBrowserLang = "zh";
    } else {
        defaultBrowserLang = "en";
    }
    return defaultBrowserLang;
};
