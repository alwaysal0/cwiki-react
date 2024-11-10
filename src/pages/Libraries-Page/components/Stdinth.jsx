import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CodeHighlight from "../../../CodeHighlight";

function Stdint() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const code=`
    #include <stdio.h>    // Include stdio.h for input/output
    #include <stdint.h>   // Include stdint.h for fixed-width integer types

    int main() {
        // Using exact-width integer types
        int8_t small_number = -100;      // 8-bit signed integer
        uint16_t medium_number = 50000;  // 16-bit unsigned integer

        // Using minimum-width integer types
        int_least32_t large_number = 1000000;  // At least 32-bit signed integer

        // Using maximum-width integer types
        intmax_t max_signed = INTMAX_MAX;
        uintmax_t max_unsigned = UINTMAX_MAX;

        // Display the values and limits
        printf("small_number (int8_t): %d\\n", small_number);
        printf("medium_number (uint16_t): %u\\n", medium_number);
        printf("large_number (int_least32_t): %d\\n", large_number);
        printf("Max signed integer (intmax_t): %jd\\n", max_signed);
        printf("Max unsigned integer (uintmax_t): %ju\\n", max_unsigned);

        return 0; // End the program
    }
    `
    return(
        <>
        <div className="libraries-div" id="stdint-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;stdint.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;stdint.h&gt;</span>{t("stdint.h")}</p>
            <p className="text-of-libraries-right">{t("key-definition")}<span className="libraries-span">&lt;stdint.h&gt;</span> :</p>
            <ul>
                <li>
                    <span className="key-definition-name">{t("stdint.h-key-definition-head-1")}</span>
                    <span className="key-definition-text">{t("stdint.h-key-definition-text-1")}</span>
                    <ul>
                        <li><span className="key-definition-keys">int8_t</span>, <span className="key-definition-keys">int16_t</span>, <span className="key-definition-keys">int32_t</span>, <span className="key-definition-keys">int64_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-1-1")}</span></li>
                        <li><span className="key-definition-keys">uint8_t</span>, <span className="key-definition-keys">uint16_t</span>, <span className="key-definition-keys">uint32_t</span>, <span className="key-definition-keys">uint64_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-1-2")}</span></li>
                    </ul>
                </li>
                <li>
                    <span className="key-definition-name">{t("stdint.h-key-definition-head-2")}</span>
                    <span className="key-definition-text">{t("stdint.h-key-definition-text-2")}</span>
                    <ul>
                        <li><span className="key-definition-keys">int_least8_t</span>, <span className="key-definition-keys">int_least16_t</span>, <span className="key-definition-keys">int_least32_t</span>, <span className="key-definition-keys">int_least64_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-2-1")}</span></li>
                        <li><span className="key-definition-keys">uint_least8_t</span>, <span className="key-definition-keys">uint_least16_t</span>, <span className="key-definition-keys">uint_least32_t</span>, <span className="key-definition-keys">uint_least64_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-2-2")}</span></li>
                    </ul>
                </li>
                <li>
                    <span className="key-definition-name">{t("stdint.h-key-definition-head-3")}</span>
                    <span className="key-definition-text">{t("stdint.h-key-definition-text-3")}</span>
                    <ul>
                        <li><span className="key-definition-keys">int_fast8_t</span>, <span className="key-definition-keys">int_fast16_t</span>, <span className="key-definition-keys">int_fast32_t</span>, <span className="key-definition-keys">int_fast64_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-3-1")}</span></li>
                        <li><span className="key-definition-keys">uint_fast8_t</span>, <span className="key-definition-keys">uint_fast16_t</span>, <span className="key-definition-keys">uint_fast32_t</span>, <span className="key-definition-keys">uint_fast64_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-3-2")}</span></li>
                    </ul>
                </li>
                <li>
                    <span className="key-definition-name">{t("stdint.h-key-definition-head-4")}</span>
                    <ul>
                        <li><span className="key-definition-keys">intptr_t</span>, <span className="key-definition-keys">uintptr_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-4-1")}</span></li>
                    </ul>
                </li>
                <li>
                    <span className="key-definition-name">{t("stdint.h-key-definition-head-5")}</span>
                    <span className="key-definition-text">{t("stdint.h-key-definition-text-5")}</span>
                    <ul>
                        <li><span className="key-definition-keys">intmax_t</span>, <span className="key-definition-keys">uintmax_t</span><span className="text-for-key-definition">{t("stdint.h-text-for-definition-5-1")}</span></li>
                    </ul>
                </li>
                <li>
                    <span className="key-definition-name">{t("stdint.h-key-definition-head-6")}</span>
                    <span className="key-definition-text">{t("stdint.h-key-definition-text-6")}</span>
                </li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-stdint.h1")}<span className="libraries-span">&lt;stdint.h&gt;</span>{t("example-code-stdint.h2")}</p>
            <div id="code">
                <CodeHighlight code={code}/>
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="key-definition-name">{t("name.1.stdint.h")}</span>{t("1.stdint.h")}</li>
                <li><span className="key-definition-name">{t("name.2.stdint.h")}</span>{t("2.stdint.h")}</li>
                <li><span className="key-definition-name">{t("name.3.stdint.h")}</span>{t("3.stdint.h")}</li>
                <li><span className="key-definition-name">{t("name.4.stdint.h")}</span>{t("4.stdint.h")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Stdint
