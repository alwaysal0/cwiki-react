import React from "react";
import '../styles/LibrariesPage.css'
import GistEmbed from "../../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CodeHighlight from "../../../CodeHighlight";

function Stddef() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const code=`
    #include <stdio.h>     // Include stdio.h for input/output
    #include <stddef.h>    // Include stddef.h for standard type definitions

    struct MyStruct {
        int id;
        double value;
        char label;
    };

    int main() {
        // Example of using NULL
        int *p = NULL;  // Pointer p initialized to NULL
        if (p == NULL) {
            printf("Pointer p is NULL\\n");
        }

        // Example of using size_t
        size_t array_size = 5;
        printf("Array size: %zu\\n", array_size);

        // Example of using ptrdiff_t
        int arr[10];
        ptrdiff_t diff = &arr[5] - &arr[0];
        printf("Pointer difference: %td elements\\n", diff);

        // Example of using offsetof
        printf("Offset of 'value' in MyStruct: %zu bytes\\n", offsetof(struct MyStruct, value));

        return 0; // End the program
    }
    `
    return(
        <>
        <div className="libraries-div" id="stddef-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;stddef.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;stddef.h&gt;</span>{t("stddef.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;stddef.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">NULL</span>{t("null-function")}</li>
                <li><span className="functions-span">size_t</span>{t("size_t-function")}</li>
                <li><span className="functions-span">ptrddif_t</span>{t("ptrddif_f-function")}</li>
                <li><span className="functions-span">offsetof(type,member))</span>{t("offsetof-function")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-stddef.h1")}<span className="libraries-span">&lt;stddef.h&gt;</span>{t("example-code-stddef.h2")}</p>
            <div id="code">
                <CodeHighlight code={code}/>
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">NULL</span>{t("1.stddef.h")}</li>
                <li><span className="explanation-span">size_t</span>{t("2.stddef.h")}</li>
                <li><span className="explanation-span">ptrddif_t</span>{t("3.stddef.h")}</li>
                <li><span className="explanation-span">offsetof</span>{t("4.stddef.h")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Stddef
