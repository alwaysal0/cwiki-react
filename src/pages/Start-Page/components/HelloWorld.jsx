import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import '../styles/HelloWorld.css'
import useObserver from "../../../general components/ObserverFunction.jsx";

function HelloWorld() { 
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const [isInView2, setInView2] = useState(false);
    const setObservedElementRef = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);

    return (
        <>
        <div id="hello-world-main">
            <div id="hello-world-main-text"><code>"Hello World"</code>{t("on")}<span>C</span></div>
            <div id="hello-world-content">
                <div id="hello-world-code" ref={setObservedElementRef} className={isInView1 ? 'in-view' : ''} data-delay="250">
                    <p id="hello-world-code-head">Code</p>
                    <div id="hello-world-code-body">
                        <code>
                            <p id="p1">#<span id="include">include</span>&nbsp;&lt;<span id="stdioh">stdio.h</span>&gt;</p>
                            <p id="p2"><span id="int">int</span>&nbsp;<span id="main">main()</span>&#123;</p>
                            <p id="p3">&nbsp;<span id="char">char</span>&nbsp;<span id="a">a</span>[]="<span id="hello-world-span">Hello World</span>";</p>
                            <p id="p4">&nbsp;<span id="printf">printf</span>{"("}<span id="s">"%s"</span>, <span id="a">a</span>{");"}</p>
                            <p id="p5"><span>&#125;</span></p>
                        </code>
                    </div>
                </div>
                <div id="hello-world-explanation" ref={setObservedElementRef2} className={isInView2 ? 'in-view' : ''}data-delay="500">
                    <div id="hello-world-explanation-head">{t("explanation")}</div>
                    <div id="hello-world-explanation-body">
                        <p><code><span id="include">#include</span> &lt;stdio.h&gt;</code>{t("stdio")}</p>
                        <p><code><span id="int">int</span><span id="main"> main()</span></code>{t("int-main")}</p>
                        <p><code><span id="char">char</span><span id="a"> a</span><span id="brackets">[]</span>="<span id="hello-world-span">Hello World</span>"</code>{t("char")}</p>
                        <p><code id="p5"><span id="printf">printf</span>(<span id="s">"%s"</span>,<span id="a"> a</span>)</code>{t("printf")}</p>
                    </div>
                </div>
            </div>
            <div id="intrested">{t("intrested1")}<a className="otherLinks" href="#">&lt;{t("libraries")}&gt;</a>&nbsp;<a className="otherL  inks" href="#">&lt;{t("course")}&gt;</a>{t("intrested2")}</div>
        </div>
        </>
    )
}

export default HelloWorld
