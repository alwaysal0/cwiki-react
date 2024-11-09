import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../../general components/ObserverFunction";
import CodeHighlight from "../../../CodeHighlight";

function DataTypes() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const [isInView2, setInView2] = useState(false);
    const [isInView3, setInView3] = useState(false);
    const [isInView4, setInView4] = useState(false);
    const [isInView5, setInView5] = useState(false);
    const [isInView6, setInView6] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);
    const setObservedElementRef3 = useObserver(setInView3);
    const setObservedElementRef4 = useObserver(setInView4);
    const setObservedElementRef5 = useObserver(setInView5);
    const setObservedElementRef6 = useObserver(setInView6);
    
    const integerTypes = `
    #include <stdio.h>

    int main() {
        int age = 25; // Standard integer
        unsigned int days = 365; // Unsigned integer (positive values only)
        short temperature = -15; // Smaller integer

        printf("Age: %d\\n", age);
        printf("Days: %u\\n", days);
        printf("Temperature: %d\\n", temperature);
        return 0;
    }
    `;
    const floatingPointTypes = `
    #include <stdio.h>

    int main() {
        float pi = 3.14f; // Single-precision float
        double e = 2.718281828; // Double-precision float
        long double golden_ratio = 1.61803398875L; // High precision

        printf("Pi: %f\\n", pi);
        printf("Euler's number: %lf\\n", e);
        printf("Golden ratio: %Lf\\n", golden_ratio);
        return 0;
    }
    `;
    const chararcterTypes = `
    #include <stdio.h>

    int main() {
        char letter = 'A';
        char digit = '5';

        printf("Letter: %c\\n", letter);
        printf("Digit: %c\\n", digit);
        return 0;
    }
    `;
    const specialDataTypes = `
    #include <stdio.h>
    #include <stdbool.h> // For boolean types

    int main() {
        bool isStudent = true;
        printf("Is student: %d\\n", isStudent); // Outputs 1 (true)
        return 0;
    }
    `;
    return (
        <>
         <div id="data-types-router">
            <p className="name-of-lesson">{t("introduction")}</p>
            <p ref={setObservedElementRef1} className={`part-of-lesson ${isInView1 ? "in-view" : ""}`}>{t("data-types-router")}</p>
            <div className="information-of-lesson">
                <div id="integer-types-div" ref={setObservedElementRef2} className={`${isInView2 ? "in-view" : ""}`}>
                    <p className="chapter-description">{t("data-types")}</p>
                    <p className="prechapter-head">1. {t("integer-types")}</p>
                    <p className="prechapter-description">{t("integer-types-description")}</p>
                    <ul>
                        <li><span className="func-description">int:</span>{t("int-description")}</li>
                        <li><span className="func-description">short:</span>{t("short-description")}</li>
                        <li><span className="func-description">long:</span>{t("long-description")}</li>
                        <li><span className="func-description">unsigned:</span>{t("unsigned-description")}</li>
                    </ul>
                    <div className="code"><CodeHighlight code={integerTypes} /></div>
                </div>
                <div id="floating-point-types-div" ref={setObservedElementRef3} className={`${isInView3 ? "in-view" : ""}`}>
                    <p className="prechapter-head">2. {t("floating-point-types")}</p>
                    <p className="prechapter-description">{t("floating-point-types-description")}</p>
                    <ul>
                        <li><span className="func-description">float:</span>{t("float-description")}</li>
                        <li><span className="func-description">double:</span>{t("double-description")}</li>
                        <li><span className="func-description">long double:</span>{t("long-double-description")}</li>
                    </ul>
                    <div className="code"><CodeHighlight code={floatingPointTypes} /></div>
                </div>
                <div id="character-types-div" ref={setObservedElementRef4} className={`${isInView4 ? "in-view" : ""}`}>
                    <p className="prechapter-head">3. {t("character-types")}</p>
                    <p className="prechapter-description">{t("character-types-description")}</p>
                    <ul>
                        <li><span className="func-description">char:</span>{t("char-description")}</li>
                        <li><span className="func-description">unsigned char & signed char:</span>{t("unsigned-and-signed-char-description")}</li>
                    </ul>
                    <div className="code"><CodeHighlight code={chararcterTypes} /></div>
                </div>
                <div id="special-data-types-div" ref={setObservedElementRef5} className={`${isInView5 ? "in-view" : ""}`}>
                    <p className="prechapter-head">4. {t("special-data-types")}</p>
                    <ul>
                        <li><span className="func-description">void:</span>{t("void-description")}</li>
                        <li><span className="func-description">_Bool:</span>{t("bool-description")}</li>
                    </ul>
                    <div className="code"><CodeHighlight code={specialDataTypes} /></div>
                </div>
                <div id="summary-div" ref={setObservedElementRef6} className={`${isInView6 ? "in-view" : ""}`}>
                    <p className="prechapter-head">{t("summary-data-types")}</p>
                    <p className="prechapter-description">{t("summary-data-types-description")}</p>
                </div>
            </div>
         </div>
        </>
    )
}

export default DataTypes
