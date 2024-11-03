import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Ctypeh() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    return(
        <>
        <div className="libraries-div" id="ctype-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;ctype.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;ctype.h&gt;</span>{t("ctype.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;ctype.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">isalpha</span>{t("isalpha-function")}</li>
                <li><span className="functions-span">isdigit</span>{t("isdigit-function")}</li>
                <li><span className="functions-span">isalnum</span>{t("isalnum-function")}</li>
                <li><span className="functions-span">isspace</span>{t("isspace-function")}</li>
                <li><span className="functions-span">islower</span>{t("islower-function")}</li>
                <li><span className="functions-span">isupper</span>{t("isupper-function")}</li>
                <li><span className="functions-span">tolower</span>{t("tolower-function")}</li>
                <li><span className="functions-span">toupper</span>{t("toupper-function")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-ctype.h1")}<span className="libraries-span">&lt;ctype.h&gt;</span>{t("example-code-ctype.h2")}</p>
            <div id="gist-embed">
                <GistEmbed gistId="24a86acb95a17090fa6640f0f13defb1" />
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">#include &lt;ctype.h&gt;</span>{t("1.ctype.h")}</li>
                <li><span className="explanation-span">char ch;</span>{t("2.ctype.h")}</li>
                <li><span className="explanation-span">printf("Enter a character: ");</span>{t("3.ctype.h")}</li>
                <li><span className="explanation-span">scanf("%c", &ch);</span>{t("4.ctype.h")}</li>
                <li><span className="explanation-span">isalpha(ch)</span>{t("5.ctype.h")}</li>
                <li><span className="explanation-span">isdigit(ch)</span>{t("6.ctype.h")}</li>
                <li><span className="explanation-span">islower(ch)</span> and <span className="explanation-span">isupper(ch)</span>{t("7.ctype.h")}</li>
                <li><span className="explanation-span">toupper(ch)</span>{t("8.ctype.h")}</li>
                <li><span className="explanation-span">tolower(ch)</span>{t("9.ctype.h")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Ctypeh