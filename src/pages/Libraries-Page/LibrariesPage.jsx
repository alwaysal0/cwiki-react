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
import Mathh from "./components/Mathh";
import Ctypeh from "./components/Ctypeh";
import Limitsh from "./components/Limitsh";
import Floath from "./components/Floath";
import Stddef from "./components/Stddefh";
import Stdint from "./components/Stdinth";
import Stdbool from "./components/Stdboolh";

function LibrariesPage() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const [isInView1, setInView1] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    return(
    <>
    <div id="libraries">
        <div id="standart-libraries">
            <p id="standart-libraries-head" ref={setObservedElementRef1} className={isInView1 ? 'in-view' : ''}>{t("standart-libraries")}<span>C</span></p>
            <div id="standart-libraries-main-box">
                <div id="libraries-left">
                    <p id="head-of-list-libraries">Libraries</p>
                    <a href="#stdio-h-div" className="list-libraries">&lt;stdio.h&gt;</a>
                    <a href="#stdlib-h-div" className="list-libraries">&lt;stdlib.h&gt;</a>
                    <a href="#string-h-div" className="list-libraries">&lt;string.h&gt;</a>
                    <a href="#math-h-div" className="list-libraries">&lt;math.h&gt;</a>
                    <a href="#ctype-h-div" className="list-libraries">&lt;ctype.h&gt;</a>
                    <a href="#limits-h-div" className="list-libraries">&lt;limits.h&gt;</a>
                    <a href="#float-h-div" className="list-libraries">&lt;float.h&gt;</a>
                    <a href="#stddef-h-div" className="list-libraries">&lt;stddef.h&gt;</a>
                    <a href="#stdint-h-div" className="list-libraries">&lt;stdint.h&gt;</a>
                    <a href="#stdbool-h-div" className="list-libraries">&lt;stdbool.h&gt;</a>
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
                    <div id="math-h-div">
                        <Mathh />
                    </div>
                    <div id="ctype-h-div">
                        <Ctypeh />
                    </div>
                    <div id="limits-h-div">
                        <Limitsh/>
                    </div>
                    <div id="float-h-fiv">
                        <Floath />
                    </div>
                    <div id="stddef-h-div">
                        <Stddef />
                    </div>
                    <div id="stdint-h-div">
                        <Stdint />
                    </div>
                    <div id="stdbool-h-div">
                        <Stdbool />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default LibrariesPage
