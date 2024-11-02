import React from "react";
import './styles/LibrariesPage.css'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../general components/ObserverFunction";

// LIBRARIES

import Definition from "./components/Definition";
import Stdioh from "./components/stdioh";
import Stdlibh from "./components/Stdlibh"
import Stringh from "./components/Stringh";

function LibrariesPage() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const setObservedElementRef = useObserver(setInView1);
    return(
    <>
    <div id="libraries">
        <div id="standart-libraries">
            <p id="standart-libraries-head" ref={setObservedElementRef} className={isInView1 ? 'in-view' : ''}>{t("standart-libraries")}<span>C</span></p>
            <div id="standart-libraries-main-box">
                <div id="libraries-left">
                    <p id="head-of-list-libraries">Libraries</p>
                    <a href="#stdio-h-div" className="list-libraries">&lt;stdio.h&gt;</a>
                    <a href="#stdlib-h-div" className="list-libraries">&lt;stdlib.h&gt;</a>
                    <a href="#string-h-div" className="list-libraries">&lt;string.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;math.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;ctype.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;math.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;assert.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;errno.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;limits.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;float.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;stddef.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;stdint.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;stdbool.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;complex.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;tgmath.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;stdarg.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;signal.h&gt;</a>
                    <a href="#" className="list-libraries">&lt;locale.h&gt;</a>
                </div>
                <div id="libraries-right">
                    <div id="definition">
                        <Definition />
                    </div>
                    <div id="stdio-h-div">
                        <Stdioh />
                    </div>
                    <div id="stdlib-h-div">
                        <Stdlibh />
                    </div>
                    <div id="string-h-div">
                        <Stringh />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default LibrariesPage
