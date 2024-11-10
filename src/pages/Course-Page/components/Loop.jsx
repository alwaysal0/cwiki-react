import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../../general components/ObserverFunction";
import CodeHighlight from "../../../CodeHighlight";

function Loop() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const [isInView2, setInView2] = useState(false);
    const [isInView3, setInView3] = useState(false);
    const [isInView4, setInView4] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);
    const setObservedElementRef3 = useObserver(setInView3);
    const setObservedElementRef4 = useObserver(setInView4);

    const forConditions = `
    for (initialization; condition; counter_update) {
    // loop body
    }
    `
    const example1 = `
    #include <stdio.h>

    int main() {
        // Print numbers from 1 to 5
        for (int i = 1; i <= 5; i++) {
            printf("%d\\n", i);
        }
        
        return 0;
    }
    `
    const whileConditions = `
    while (condition) {
    // loop body
    }
    `
    const example2 = `
    #include <stdio.h>

    int main() {
        int i = 1;

        // Print numbers from 1 to 5
        while (i <= 5) {
            printf("%d\\n", i);
            i++;  // increment i
        }

        return 0;
    }
    `
    const doWhileConditions = `
    do {
    // loop body
    } while (condition);
    `
    const example3 = `
    #include <stdio.h>

    int main() {
        int i = 1;

        // Print numbers from 1 to 5
        do {
            printf("%d\n", i);
            i++;  // increment i
        } while (i <= 5);

        return 0;
    }
    `
    return (
        <>
        <div id="loop-router">
            <p className="name-of-lesson">{t("introduction")}</p>
            <p ref={setObservedElementRef1} className={`part-of-lesson ${isInView1 ? "in-view" : ""}`}>{t("loop-router")}</p>
            <div className="information-of-lesson">
                <div id="for-loop" ref={setObservedElementRef2} className={`${isInView2 ? "in-view" : ""}`}>
                    <p className="chapter-description">{t("loop-desc")}</p>
                    <p className="prechapter-head">1. {t("the-loop")}<span className="func-description head-tag">for</span>:</p>
                    <p className="prechapter-description"><span className="func-description">for</span>{t("for-description")}</p>
                    <div className="code"><CodeHighlight code={forConditions} /></div>
                    <ul>
                        <li><span className="text-description">initialization</span>{t("initialization-description")}</li>
                        <li><span className="text-description">condition</span>{t("condition-description")}</li>
                        <li><span className="text-description">counter_update</span>{t("counter_update-description")}</li>
                    </ul>
                    <p className="prechapter-head">{t("example-loops")}</p>
                    <div className="code"><CodeHighlight code={example1} /></div>
                    <p className="prechapter-head">{t("explanation-loops")}</p>
                    <ul className="explanation-list">
                        <li>{t("explanation-example-for-1")}</li>
                        <li>{t("explanation-example-for-2")}</li>
                        <li>{t("explanation-example-for-3")}</li>
                        <li>{t("explanation-example-for-4")}</li>
                    </ul>
                </div>
                <div id="while-loop" ref={setObservedElementRef3} className={`${isInView3 ? "in-view" : ""}`}>
                    <p className="prechapter-head">2. {t("the-loop")}<span className="func-description head-tag">while</span>:</p>
                    <p className="prechapter-description"><span className="func-description">while</span>{t("while-description")}</p>
                    <div className="code"><CodeHighlight code={whileConditions} /></div>
                    <p className="prechapter-head">{t("example-loops")}</p>
                    <div className="code"><CodeHighlight code={example2} /></div>
                    <p className="prechapter-head">{t("explanation-loops")}</p>
                    <ul className="explanation-list">
                        <li>{t("explanation-example-while-1")}</li>
                        <li>{t("explanation-example-while-2")}</li>
                        <li>{t("explanation-example-while-3")}</li>
                        <li>{t("explanation-example-while-4")}</li>
                    </ul>
                </div>
                <div id="do_while-loop" ref={setObservedElementRef4} className={`${isInView4 ? "in-view" : ""}`}>
                    <p className="prechapter-head">3. {t("the-loop")}<span className="func-description head-tag">do...while</span>:</p>
                    <p className="prechapter-description"><span className="func-description">do...while</span>{t("do_while-description")}</p>
                    <div className="code"><CodeHighlight code={doWhileConditions} /></div>
                    <p className="prechapter-head">{t("example-loops")}</p>
                    <div className="code"><CodeHighlight code={example3} /></div>
                    <p className="prechapter-head">{t("explanation-loops")}</p>
                    <ul className="explanation-list">
                        <li>{t("explanation-example-do_while-1")}</li>
                        <li>{t("explanation-example-do_while-2")}</li>
                        <li>{t("explanation-example-do_while-3")}</li>
                        <li>{t("explanation-example-do_while-4")}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Loop
