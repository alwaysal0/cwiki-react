import React from "react";
import './styles/LibrariesPage.css'
import GistEmbed from "../../GistEmbed"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../general components/ObserverFunction";

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
                    <a href="#" className="list-libraries">&lt;string.h&gt;</a>
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
                        <p className="headers-of-libraries-right">{t("definition")}</p>
                        <p className="text-of-libraries-right">{t("useful-libraries")}</p>
                        <ul>
                            <li><span className="pre">{t("pre-simlification-of-development")}</span>{t("simplification-of-development")}</li>
                            <li><span className="pre">{t("pre-reliability-and-code-quality")}</span>{t("reliability-and-code-quality")}</li>
                            <li><span className="pre">{t("pre-portability-libraries")}</span>{t("portability-libraries")}</li>
                            <li><span className="pre">{t("pre-perfomance-optimization")}</span>{t("perfomance-optimization")}</li>
                            <li><span className="pre">{t("pre-simplification-of-OS-interaction")}</span>{t("simplification-of-OS-interaction")}</li>
                            <li><span className="pre">{t("pre-error-managment")}</span>{t("error-managment")}</li>
                            <li><span className="pre">{t("pre-code-reduction")}</span>{t("code-reduction")}</li>
                        </ul>
                    </div>
                    <div id="stdio-h-div">
                        <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;stdio.h&gt;</span></p>
                        <p className="text-of-libraries-right"><span className="libraries-span">&lt;stdio.h&gt;</span>{t("stdio.h")}</p>
                        <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;stdio.h&gt;</span> :</p>
                        <ul>
                            <li><span className="functions-span">printf</span>{t("printf-function")}</li>
                            <li><span className="functions-span">scanf</span>{t("scanf-function")}</li>
                            <li><span className="functions-span">fopen</span>, <span className="functions-span">fclose</span>{t("fopen-fclose-function")}</li>
                            <li><span className="functions-span">fwrite</span>, <span className="functions-span">fclose</span>{t("fread-fwrite-function")}</li>
                            <li><span className="functions-span">fprintf</span>, <span className="functions-span">fscanf</span>{t("fprintf-fscanf-function")}</li>
                        </ul>
                        <p className="text-of-libraries-right example-code">{t("example-code")}</p>
                        <p className="text-of-libraries-right">{t("example-code-stdio.h1")}<span className="libraries-span">&lt;stdio.h&gt;</span>{t("example-code-stdio.h2")}</p>
                        <div id="gist-embed">
                            <GistEmbed gistId="3666817e35b24f904c918d59383db5dc" />
                        </div>
                        <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
                        <ol>
                            <li><span className="explanation-span">#include &lt;stdio.h&gt;</span>{t("stdio.h-explanation")}</li>
                            <li><span className="explanation-span">int main()</span>{t("main-explanation")}</li>
                            <li><span className="explanation-span">int number;</span>{t("number-explanation")}</li>
                            <li><span className="explanation-span">printf("Enter an integer: ");</span>{t("printf-enter-explanation")}</li>
                            <li><span className="explanation-span">scanf("%d", &number);</span>{t("scanf-explanation")}</li>
                            <li><span className="explanation-span">printf("You entered: %d\n", number);</span>{t("printf-entered-explanation")}</li>
                            <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
                        </ol>
                    </div>
                    <div id="stdlib-h-div">
                        <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;stdlib.h&gt;</span></p>
                        <p className="text-of-libraries-right"><span className="libraries-span">&lt;stdlib.h&gt;</span>{t("stdlib.h")}</p>
                        <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;stdlib.h&gt;</span> :</p>
                        <ul>
                            <li><span className="functions-span">malloc</span>, <span className="functions-span">calloc</span>, <span className="functions-span">realloc</span>, <span className="functions-span">free</span>{t("malloc-calloc-realloc-free-function")}</li>
                            <li><span className="functions-span">exit</span>{t("exit-function")}</li>
                            <li><span className="functions-span">atoi</span>, <span className="functions-span">atof</span>, <span className="functions-span">strtol</span>, <span className="functions-span">strtod</span>{t("atoi-atof-strtol-strtod-function")}</li>
                            <li><span className="functions-span">rand</span>, <span className="functions-span">srand</span>{t("rand-srand-function")}</li>
                            <li><span className="functions-span">system</span>{t("system-function")}</li>
                        </ul>
                        <p className="text-of-libraries-right example-code">{t("example-code")}</p>
                        <p className="text-of-libraries-right">{t("example-code-stdlib.h1")}<span className="libraries-span">&lt;stdlib.h&gt;</span>{t("example-code-stdlib.h2")}</p>
                        <div id="gist-embed">
                            <GistEmbed gistId="7d561359e7514b234b3b9ac67766cd6d" />
                        </div>
                        <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
                        <ol>
                            <li><span className="explanation-span">#include &lt;stdlib.h&gt;</span>{t("stdlib.h-explanation")}</li>
                            <li><span className="explanation-span">int *array;</span>{t("int-array-explanation")}</li>
                            <li><span className="explanation-span">int size;</span>{t("int-size-explanation")}</li>
                            <li><span className="explanation-span">printf("Enter the size of the array: ");</span>{t("printf-enter-size-of-array-explanation")}</li>
                            <li><span className="explanation-span">scanf("%d", &size);</span>{t("scanf-d-explanation")}</li>
                            <li><span className="explanation-span">array = (int *)malloc(size * sizeof(int));</span>{t("array-int-malloc-explanation")}</li>
                            <li><span className="explanation-span">if (array == NULL)</span>{t("array-NULL-explanation")}</li>
                            <li><span className="explanation-span">printf("Memory allocation failed!\n");</span>{t("printf-memory-explanation")}</li>
                            <li><span className="explanation-span">for (int i = 0; i &lt; size; i++)</span>{t("for-i-explanation")}</li>
                            <li><span className="explanation-span">array[i] = i * 2;</span>{t("array[i]-explanation")}</li>
                            <li><span className="explanation-span">printf("array[%d] = %d\n", i, array[i]);</span>{t("printf(array[d])-explanation")}</li>
                            <li><span className="explanation-span">free(array);</span>{t("free(array)-explanation")}</li>
                            <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default LibrariesPage
