import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Floath() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    return(
        <>
        <div className="libraries-div" id="float-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;float.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;float.h&gt;</span>{t("float.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;float.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">FLT_RADIX</span>{t("flt_radix-function")}</li>
                <li><span className="functions-span">FLT_MANT_DIG</span>, <span className="functions-span">DBL_MANT_DIG</span>, <span className="functions-span">LDBL_MANT_DIG</span>{t("flt_mant_dig&dbl_mant_dig&ldbl_mant_dig-function")}</li>
                <li><span className="functions-span">FLT_DIG</span>, <span className="functions-span">DBL_DIG</span>, <span className="functions-span">LDBL_DIG</span>{t("flt_dig&dbl_dig&ldbl_dig-function")}</li>
                <li><span className="functions-span">FLT_MIN</span>, <span className="functions-span">DBL_MIN</span>, <span className="functions-span">LDBL_MIN</span>{t("flt_min&dbl_min&ldbl_min-function")}</li>
                <li><span className="functions-span">FLT_MAX</span>, <span className="functions-span">DBL_MAX</span>, <span className="functions-span">LDBL_MAX</span>{t("flt_max&dbl_max&ldbl_max-function")}</li>
                <li><span className="functions-span">FLT_EPSILON</span>, <span className="functions-span">DBL_EPSILON</span>, <span className="functions-span">LDBL_EPSILON</span>{t("flt_epsilon&dbl_epsilon&ldbl_epsilon-function")}</li>
                <li><span className="functions-span">FLT_MIN_EXP</span>, <span className="functions-span">DBL_MIN_EXP</span>, <span className="functions-span">LDBL_MIN_EXP</span>{t("flt_min_exp&dbl_min_exp&ldbl_min_exp-function")}</li>
                <li><span className="functions-span">FLT_MAX_EXP</span>, <span className="functions-span">DBL_MAX_EXP</span>, <span className="functions-span">LDBL_MAX_EXP</span>{t("flt_max_exp&dbl_max_exp&ldbl_max_exp")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-float.h1")}<span className="libraries-span">&lt;float.h&gt;</span>{t("example-code-float.h2")}</p>
            <div id="gist-embed">
                <GistEmbed gistId="e8607f08de71c9a65282fc3243e803b6" />
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">#include &lt;limits.h&gt;</span>{t("1.float.h")}</li>
                <li><span className="explanation-span">FLT_MIN</span>, <span className="explanation-span">FLT_MAX</span>{t("2.float.h")}</li>
                <li><span className="explanation-span">FLT_DIG</span>{t("3.float.h")}</li>
                <li><span className="explanation-span">FLT_EPSILON</span>{t("4.float.h")}</li>
                <li><span className="explanation-span">DBL_MIN</span>, <span className="explanation-span">DBL_MAX</span>{t("5.float.h")}</li>
                <li><span className="explanation-span">DBL_DIG</span>{t("6.float.h")}</li>
                <li><span className="explanation-span">DBL_EPSILON</span>{t("7.float.h")}</li>
                <li><span className="explanation-span">LDBL_MIN</span>, <span className="explanation-span">LDBL_MAX</span>{t("8.float.h")}</li>
                <li><span className="explanation-span">LDBL_DIG</span>{t("9.float.h")}</li>
                <li><span className="explanation-span">LDBL_EPSILON</span>{t("10.float.h")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Floath
