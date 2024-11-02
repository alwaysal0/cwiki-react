import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Stdioh() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    return(
        <>
        <div className="libraries-div" id="stdio-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;stdio.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;stdio.h&gt;</span>{t("stdio.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;stdio.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">printf</span>{t("printf-function")}</li>
                <li><span className="functions-span">scanf</span>{t("scanf-function")}</li>
                <li><span className="functions-span">fopen</span>, <span className="functions-span">fclose</span>{t("fopen-fclose-function")}</li>
                <li><span className="functions-span">fwrite</span>, <span className="functions-span">fclose</span>{t("fread-fwrite-function")}</li>
                <li><span className="functions-span">fprintf</span>, <span className="functions-span">fscanf</span>{t("fprintf-fscanf-function")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-stdio.h1")}<span className="libraries-span">&lt;stdio.h&gt;</span>{t("example-code-stdio.h2")}</p>
            <div id="gist-embed">
                <GistEmbed gistId="3666817e35b24f904c918d59383db5dc" />
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">#include &lt;stdio.h&gt;</span>{t("stdio.h-explanation")}</li>
                <li><span className="explanation-span">int main()</span>{t("main-explanation")}</li>
                <li><span className="explanation-span">int number;</span>{t("number-explanation")}</li>
                <li><span className="explanation-span">printf("Enter an integer: ");</span>{t("printf-enter-explanation")}</li>
                <li><span className="explanation-span">scanf("%d", &number);</span>{t("scanf-explanation")}</li>
                <li><span className="explanation-span">printf("You entered: %d\n", number);</span>{t("printf-entered-explanation")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}

export default Stdioh