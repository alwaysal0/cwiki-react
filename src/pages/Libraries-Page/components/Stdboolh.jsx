import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CodeHighlight from "../../../CodeHighlight";

function Stdbool() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const code=`
    #include <stdio.h>     // Include stdio.h for input/output
    #include <stdbool.h>   // Include stdbool.h for working with boolean values

    int main() {
        // Define a boolean variable
        bool is_even = false;   // Initially set to false

        int number = 4;

        // Check if the number is even
        if (number % 2 == 0) {
            is_even = true;    // Set is_even to true if the number is even
        }

        // Output the result
        if (is_even) {
            printf("The number %d is even.\\n", number);
        } else {
            printf("The number %d is odd.\\n", number);
        }

        return 0;  // End the program
    }
    `
    return(
        <>
        <div className="libraries-div" id="stdbool-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;stdbool.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;stdbool.h&gt;</span>{t("stdbool.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;stdbool.h&gt;</span> :</p>
            <ul>
            <li>
                <span className="key-definition-name">{t("stdbool.h-key-definition-head-1")}</span><span className="key-definition-keys">bool</span> :
                <span className="key-definition-text">{t("stdbool.h-key-definition-text-1")}</span>
            </li>
            <li>
                <span className="key-definition-name">{t("stdbool.h-key-definition-head-2")}</span><span className="key-definition-keys">true</span>, <span className="key-definition-keys">false</span> :
                <ul>
                    <li><span className="key-definition-keys">true</span><span className="text-for-key-definition">{t("stdbool.h-text-for-definition-2-1")}</span></li>
                    <li><span className="key-definition-keys">false</span><span className="text-for-key-definition">{t("stdbool.h-text-for-definition-2-2")}</span></li>
                </ul>
            </li>
            <li>
                <span className="key-definition-name">{t("stdbool.h-key-definition-head-3")}</span>
                <span className="key-definition-text">{t("stdbool.h-key-definition-text-3")}</span>
            </li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-stdbool.h1")}<span className="libraries-span">&lt;stdbool.h&gt;</span>{t("example-code-stdbool.h2")}</p>
            <div id="code">
                <CodeHighlight code={code}/>
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
            <li><span className="key-definition-name">{t("name.1.stdbool.h")}</span><span className="key-definition-keys">bool</span> :{t("1.stdint.h")}</li>
            <li><span className="key-definition-name">{t("name.2.stdbool.h")}</span><span className="key-definition-keys">true</span>, <span className="key-definition-keys">false</span> :{t("2.stdbool.h")}</li>
            <li><span className="key-definition-name">{t("name.3.stdbool.h")}</span>{t("3.stdbool.h")}</li>
            </ol>
        </div>
        </>
    )
}
export default Stdbool