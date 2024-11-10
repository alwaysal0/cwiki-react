import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CodeHighlight from "../../../CodeHighlight";

function Stringh() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const code = `
    #include <stdio.h>      // Include the stdio.h library for input/output
    #include <string.h>     // Include the string.h library for string functions

    int main() {
        char str1[50]; // Declare an array for the first string
        char str2[50]; // Declare an array for the second string

        // Prompt the user for the first string
        printf("Enter the first string: ");
        fgets(str1, sizeof(str1), stdin); // Read a string from standard input

        // Prompt the user for the second string
        printf("Enter the second string: ");
        fgets(str2, sizeof(str2), stdin); // Read a string from standard input

        // Remove the newline character if it exists
        str1[strcspn(str1, "\\n")] = '\\0'; 
        str2[strcspn(str2, "\\n")] = '\\0'; 

        // Compare the strings
        int result = strcmp(str1, str2); // Compare str1 and str2
        if (result == 0) {
            printf("The strings are equal.\\n");
        } else if (result < 0) {
            printf("The first string is less than the second.\\n");
        } else {
            printf("The first string is greater than the second.\\n");
        }

        // Concatenate the strings
        strcat(str1, str2); // Append str2 to str1
        printf("Result of concatenation: %s\\n", str1); // Output the result

        // Output the length of the first string
        printf("Length of the first string: %lu\\n", strlen(str1)); // Output the length

        return 0; // End of the program
    }
    `
    return(
        <>
        <div className="libraries-div" id="string-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;string.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;string.h&gt;</span>{t("string.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;string.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">strlen</span>{t("strlen-function")}</li>
                <li><span className="functions-span">strcpy</span>{t("strcpy-function")}</li>
                <li><span className="functions-span">strncpy</span>{t("strncpy-function")}</li>
                <li><span className="functions-span">strcat</span>{t("strcat-function")}</li>
                <li><span className="functions-span">strcmp</span>{t("strcmp-function")}</li>
                <li><span className="functions-span">strchr</span>{t("strchr-function")}</li>
                <li><span className="functions-span">strstr</span>{t("strstr-function")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-string.h1")}<span className="libraries-span">&lt;string.h&gt;</span>{t("example-code-string.h2")}</p>
            <div id="code">
                <CodeHighlight code={code} />
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">#include &lt;string.h&gt;</span>{t("1.string.h")}</li>
                <li><span className="explanation-span">char str1[50]; & char str2[50]</span>{t("2.string.h")}</li>
                <li><span className="explanation-span">printf("Enter the first string: ");</span>{t("3.string.h")}</li>
                <li><span className="explanation-span">fgets(str1, sizeof(str1), stdin);</span>{t("4.string.h")}</li>
                <li><span className="explanation-span">printf("Enter the second string: ");</span>{t("5.string.h")}</li>
                <li><span className="explanation-span">fgets(str2, sizeof(str2), stdin);</span>{t("6.string.h")}</li>
                <li><span className="explanation-span">str1[strcspn(str1, "\n")] = '\0';</span>{t("7.string.h")}</li>
                <li><span className="explanation-span">str2[strcspn(str2, "\n")] = '\0';</span>{t("8.string.h")}</li>
                <li><span className="explanation-span">int result = strcmp(str1, str2);</span>{t("9.string.h")}</li>
                <li><span className="explanation-span">The conditional "if" statement </span>{t("10.string.h")}</li>
                <li><span className="explanation-span">strcat(str1, str2);</span>{t("11.string.h")}</li>
                <li><span className="explanation-span">printf("Result of concatenation: %s\n", str1);</span>{t("12.string.h")}</li>
                <li><span className="explanation-span">printf("Length of the first string: %lu\n", strlen(str1));</span>{t("13.string.h")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Stringh
