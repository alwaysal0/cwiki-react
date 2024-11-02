import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Definition() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    return(
        <>
        <div className="libraries-div" id="definition">
            <p className="headers-of-libraries-right">{t("definition")}</p>
            <p className="text-of-libraries-right">{t("useful-libraries")}</p>
            <ul>
                <li><span className="pre">{t("pre-simlification-of-development")}</span>{t("simplification-of-development")}</li>
                <li><span className="pre">{t("pre-reliability-and-code-quality")}</span>{t("reliability-and-code-quality")}</li>
                <li><span className="pre">{t("pre-portability-libraries")}</span>{t("portability-libraries")}</li>
                <li><span className="pre">{t("pre-perfomance-optimization")}</span>{t("perfomance-optimization")}</li>
                <li><span className="pre">{t("pre-simplification-of-OS-interaction")}</span>{t("simplification-of-OS-interaction")}</li>
                <li><span className="pre">{t("pre-error-managment")}</span>{t("error-managment")}</li>
                <li><span className="pre">{t("pre-code-reduction")}</span>{t("code-reduction")}</li>
            </ul>
        </div>  
        </>
    )
}

export default Definition