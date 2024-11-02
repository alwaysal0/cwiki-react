import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Stdlibh() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    return(
        <>
        <div className="libraries-div" id="stdlib-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;stdlib.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;stdlib.h&gt;</span>{t("stdlib.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;stdlib.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">malloc</span>, <span className="functions-span">calloc</span>, <span className="functions-span">realloc</span>, <span className="functions-span">free</span>{t("malloc-calloc-realloc-free-function")}</li>
                <li><span className="functions-span">exit</span>{t("exit-function")}</li>
                <li><span className="functions-span">atoi</span>, <span className="functions-span">atof</span>, <span className="functions-span">strtol</span>, <span className="functions-span">strtod</span>{t("atoi-atof-strtol-strtod-function")}</li>
                <li><span className="functions-span">rand</span>, <span className="functions-span">srand</span>{t("rand-srand-function")}</li>
                <li><span className="functions-span">system</span>{t("system-function")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-stdlib.h1")}<span className="libraries-span">&lt;stdlib.h&gt;</span>{t("example-code-stdlib.h2")}</p>
            <div id="gist-embed">
                <GistEmbed gistId="7d561359e7514b234b3b9ac67766cd6d" />
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">#include &lt;stdlib.h&gt;</span>{t("stdlib.h-explanation")}</li>
                <li><span className="explanation-span">int *array;</span>{t("int-array-explanation")}</li>
                <li><span className="explanation-span">int size;</span>{t("int-size-explanation")}</li>
                <li><span className="explanation-span">printf("Enter the size of the array: ");</span>{t("printf-enter-size-of-array-explanation")}</li>
                <li><span className="explanation-span">scanf("%d", &size);</span>{t("scanf-d-explanation")}</li>
                <li><span className="explanation-span">array = (int *)malloc(size * sizeof(int));</span>{t("array-int-malloc-explanation")}</li>
                <li><span className="explanation-span">if (array == NULL)</span>{t("array-NULL-explanation")}</li>
                <li><span className="explanation-span">printf("Memory allocation failed!\n");</span>{t("printf-memory-explanation")}</li>
                <li><span className="explanation-span">for (int i = 0; i &lt; size; i++)</span>{t("for-i-explanation")}</li>
                <li><span className="explanation-span">array[i] = i * 2;</span>{t("array[i]-explanation")}</li>
                <li><span className="explanation-span">printf("array[%d] = %d\n", i, array[i]);</span>{t("printf(array[d])-explanation")}</li>
                <li><span className="explanation-span">free(array);</span>{t("free(array)-explanation")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Stdlibh
