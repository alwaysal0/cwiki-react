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
    const [isInView2, setInView2] = useState(false);
    const [isInView3, setInView3] = useState(false);
    const [isInView4, setInView4] = useState(false);
    const [isInView5, setInView5] = useState(false);
    const [isInView6, setInView6] = useState(false);
    const [isInView7, setInView7] = useState(false);
    const [isInView8, setInView8] = useState(false);
    const [isInView9, setInView9] = useState(false);
    const [isInView10, setInView10] = useState(false);
    const [isInView11, setInView11] = useState(false);
    const [isInView12, setInView12] = useState(false);
    const setObservedElementRef1 = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);
    const setObservedElementRef3 = useObserver(setInView3);
    const setObservedElementRef4 = useObserver(setInView4);
    const setObservedElementRef5 = useObserver(setInView5);
    const setObservedElementRef6 = useObserver(setInView6);
    const setObservedElementRef7 = useObserver(setInView7);
    const setObservedElementRef8 = useObserver(setInView8);
    const setObservedElementRef9 = useObserver(setInView9);
    const setObservedElementRef10 = useObserver(setInView10);
    const setObservedElementRef11 = useObserver(setInView11);
    const setObservedElementRef12 = useObserver(setInView12);
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
                    <div ref={setObservedElementRef2} className={isInView2 ? 'in-view' : ''} id="definition">
                        <Definition />
                    </div>
                    <div ref={setObservedElementRef3} className={isInView3 ? 'in-view' : ''} id="stdio-h-div">
                        <Stdioh />
                    </div>
                    <div ref={setObservedElementRef4} className={isInView4 ? 'in-view' : ''} id="stdlib-h-div">
                        <Stdlibh />
                    </div>
                    <div ref={setObservedElementRef5} className={isInView5 ? 'in-view' : ''} id="string-h-div">
                        <Stringh />
                    </div>
                    <div ref={setObservedElementRef6} className={isInView6 ? 'in-view' : ''} id="math-h-div">
                        <Mathh />
                    </div>
                    <div ref={setObservedElementRef7} className={isInView7 ? 'in-view' : ''} id="ctype-h-div">
                        <Ctypeh />
                    </div>
                    <div ref={setObservedElementRef8} className={isInView8 ? 'in-view' : ''} id="limits-h-div">
                        <Limitsh/>
                    </div>
                    <div ref={setObservedElementRef9} className={isInView9 ? 'in-view' : ''} id="float-h-fiv">
                        <Floath />
                    </div>
                    <div ref={setObservedElementRef10} className={isInView10 ? 'in-view' : ''} id="stddef-h-div">
                        <Stddef />
                    </div>
                    <div ref={setObservedElementRef11} className={isInView11 ? 'in-view' : ''} id="stdint-h-div">
                        <Stdint />
                    </div>
                    <div ref={setObservedElementRef12} className={isInView12 ? 'in-view' : ''} id="stdbool-h-div">
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
