import i18n from "i18next";

export const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);

}