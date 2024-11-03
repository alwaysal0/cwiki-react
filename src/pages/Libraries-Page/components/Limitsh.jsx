import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Limitsh() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    return(
        <>
        <div className="libraries-div" id="math-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;limits.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;limits.h&gt;</span>{t("limits.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;limits.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">CHAR_BIT</span>{t("char_bit-function")}</li>
                <li><span className="functions-span">CHAR_MIN</span>, <span className="functions-span">CHAR_MAX</span>{t("char_min&char_max-function")}</li>
                <li><span className="functions-span">SCHAR_MIN</span>, <span className="functions-span">SCHAR_MAX</span>{t("schar_min&schar_max-function")}</li>
                <li><span className="functions-span">UCHAR_MAX</span>{t("uchar_max-function")}</li>
                <li><span className="functions-span">SHRT_MIN</span>, <span className="functions-span">SHRT_MAN</span>{t("shrt_min&shrt_max-function")}</li>
                <li><span className="functions-span">USHRT_MAX</span>{t("ushrt_max-function")}</li>
                <li><span className="functions-span">INT_MIN</span>, <span className="functions-span">INT_MAX</span>{t("int_min&int_max-function")}</li>
                <li><span className="functions-span">UINT_MAX</span>{t("uint_max-function")}</li>
                <li><span className="functions-span">LONG_MIN</span>, <span className="functions-span">LONG_MAX</span>{t("long_min&long_max-function")}</li>
                <li><span className="functions-span">ULONG_MAX</span>{t("ulong_max-function")}</li>
                <li><span className="functions-span">LLONG_MIN</span>, <span className="functions-span">LLONG_MAX</span>{t("llong_min&llong_max-function")}</li>
                <li><span className="functions-span">ULLONG_MAX</span>{t("ullong_max-function")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-limits.h1")}<span className="libraries-span">&lt;limits.h&gt;</span>{t("example-code-limits.h2")}</p>
            <div id="gist-embed">
                <GistEmbed gistId="a1478e8a68474970056eb606b3789ca1" />
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">#include &lt;limits.h&gt;</span>{t("1.limits.h")}</li>
                <li><span className="explanation-span">CHAR_MIN</span>, <span className="explanation-span">CHAR_MAX</span>{t("2.limits.h")}</li>
                <li><span className="explanation-span">SCHAR_MIN</span>, <span className="explanation-span">SCHAR_MAX</span>{t("3.limits.h")}</li>
                <li><span className="explanation-span">UCHAR_MAX</span>{t("4.limits.h")}</li>
                <li><span className="explanation-span">SHRT_MIN</span>, <span className="explanation-span">SHRT_MAX</span>, <span className="explanation-span">USHRT_MAX</span>{t("5.limits.h")}</li>
                <li><span className="explanation-span">INT_MIN</span>, <span className="explanation-span">INT_MAX</span>{t("6.limits.h")}</li>
                <li><span className="explanation-span">LONG_MIN</span>, <span className="explanation-span">LONG_MAX</span>, <span className="explanation-span">ULONG_MAX</span>{t("7.limits.h")}</li>
                <li><span className="explanation-span">LLONG_MIN</span>, <span className="explanation-span">LLONG_MAX</span>, <span className="explanation-span">ULLONG_MAX</span>{t("8.limits.h")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Limitsh
