import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../../general components/ObserverFunction";
import CodeHighlight from "../../../CodeHighlight";

function HelloWorldCoursePage() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };

    const [isInView1, setInView1] = useState(false);
    const [isInView2, setInView2] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);

    const helloworld = `
    #include <stdio.h>

    int main() {
        // Print the string to the screen
        printf("Hello, World!\\n");

        return 0;  // Return 0 to indicate successful program completion
    }

    `;
    const output = `
    Hello, World!
    `;
    return (
        <>
        <div id="hello-world-router">
            <p className="name-of-lesson">{t("introduction")}</p>
            <p ref={setObservedElementRef1} className={`part-of-lesson ${isInView1 ? "in-view" : ""}`}>{t("hello-world-router")}</p>
            <div className="information-of-lesson">
                <div ref={setObservedElementRef2} className={`observer-div-course ${isInView2 ? "in-view" : ""}`}>
                    <p className="chapter-description">{t("hello-world-")}</p>
                    <div className="code"><CodeHighlight code={helloworld} /></div>
                    <ul>
                        <li><span className="func-description">#include &lt;stdio.h&gt;</span>{t("course-stdio.h")}</li>
                        <li><span className="func-description">int main()</span>{t("course-int-main")}</li>
                        <li><span className="func-description">printf("Hello, World!\n");</span>{t("course-printf-helloworld")}</li>
                        <li><span className="func-description">return 0;</span>{t("course-return-0")}</li>
                    </ul>
                    <p className="prechapter-head">{t("output")}</p>
                    <div className="code"><CodeHighlight code={output} /></div>
                </div>
            </div>
         </div>
        </>
    )
}

export default HelloWorldCoursePage
