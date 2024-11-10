import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useObserver from "../../../general components/ObserverFunction";
import CodeHighlight from "../../../CodeHighlight";

function Arrays() {
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
    const setObservedElementRef1 = useObserver(setInView1);
    const setObservedElementRef2 = useObserver(setInView2);
    const setObservedElementRef3 = useObserver(setInView3);
    const setObservedElementRef4 = useObserver(setInView4);
    const setObservedElementRef5 = useObserver(setInView5);
    const setObservedElementRef6 = useObserver(setInView6);
    const setObservedElementRef7 = useObserver(setInView7);
    const setObservedElementRef8 = useObserver(setInView8);
    const setObservedElementRef9 = useObserver(setInView9);

    const declareArray = `
    type array_name[size];
    `;
    const arrayExample1 = `
    #include <stdio.h>

    int main() {
        int numbers[5]; // Declaring an array of 5 integers

        // Now the "numbers" array can store 5 integers
        return 0;
    }
    `;
    const arrayExample2 = `
    #include <stdio.h>

    int main() {
        int numbers[5] = {1, 2, 3, 4, 5}; // Array with initial values

        // Printing elements of the array
        printf("First element: %d\\n", numbers[0]);
        printf("Second element: %d\\n", numbers[1]);

        return 0;
    }
    `;
    const arrayExample3 = `
    #include <stdio.h>

    int main() {
        int numbers[5] = {10, 20, 30, 40, 50};

        // Accessing array elements and printing them
        printf("Element at index 0: %d\\n", numbers[0]);
        printf("Element at index 1: %d\\n", numbers[1]);
        printf("Element at index 2: %d\\n", numbers[2]);

        return 0;
    }
    `;
    const arrayExample4 = `
    #include <stdio.h>

    int main() {
        int numbers[3] = {10, 20, 30};

        // Changing the second element
        numbers[1] = 50;

        printf("New value of the second element: %d\\n", numbers[1]);

        return 0;
    }
    `;
    const arrayExample5 = `
    #include <stdio.h>

    int main() {
        int numbers[5] = {1, 2, 3, 4, 5};
        int sum = 0;

        // Loop through each element in the array and add to the sum
        for (int i = 0; i < 5; i++) {
            sum += numbers[i]; // sum = sum + numbers[i]
        }

        printf("Sum of array elements: %d\\n", sum);

        return 0;
    }
    `;
    const arrayExample6 = `
    #include <stdio.h>

    int main() {
        char greeting[] = "Hello";

        printf("%s\\n", greeting); // Output the string

        return 0;
    }
    `;
    const arrayExample7 = `
    #include <stdio.h>

    int main() {
        int numbers[5] = {3, 9, 2, 5, 8};
        int max = numbers[0];

        // Loop through the array, starting from the second element
        for (int i = 1; i < 5; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }

        printf("Maximum element: %d\\n", max);

        return 0;
    }
    `;
    return (
        <>
        <div id="arrays-router">
            <p className="name-of-lesson">{t("introduction")}</p>
            <p ref={setObservedElementRef1} className={`part-of-lesson ${isInView1 ? "in-view" : ""}`}>{t("arrays")}</p>
            <div className="information-of-lesson">
                <div>
                    <div id="arrays-main" ref={setObservedElementRef2} className={isInView2 ? 'in-view' : ''}>
                        <p className="chapter-description">{t("arrays-description")}</p>
                        <p className="prechapter-head">{t("key-points-arrays")}</p>
                        <ul>
                            <li><span className="text-description">{t("data-type-arrays")}</span>{t("data-type-arrays-desc")}</li>
                            <li><span className="text-description">{t("array-size-arrays")}</span>{t("array-size-arrays-desc")}</li>
                            <li><span className="text-description">{t("indexing-arrays")}</span>{t("indexing-arrays-desc")}</li>
                        </ul>
                    </div>
                    <div id="declare-and-initializing" ref={setObservedElementRef3} className={isInView3 ? 'in-view' : ''}>
                        <p className="prechapter-head">{t("declare-and-initializing")}</p>
                        <p className="chapter-description">{t("declare-and-initializing-description")}</p>
                        <p className="prechapter-head">{t("syntax")}</p>
                        <div className="code"><CodeHighlight code={declareArray} /></div>
                        <p className="prechapter-head">{t("example")}</p>
                        <div className="code"><CodeHighlight code={arrayExample1} /></div>
                        <p className="chapter-description">{t("arrays-example-1-description")}</p>
                    </div>
                    <div id="initializing-an-array" ref={setObservedElementRef4} className={isInView4 ? 'in-view' : ''}>
                        <p className="prechapter-head">{t("initializing-an-array")}</p>
                        <p className="chapter-description">{t("initializing-an-array-description")}</p>
                        <p className="prechapter-head">{t("example")}</p>
                        <div className="code"><CodeHighlight code={arrayExample2} /></div>
                        <p className="chapter-description">{t("arrays-example-2-description")}</p>
                    </div>
                    <div id="accessing-array-elements" ref={setObservedElementRef5} className={isInView5 ? 'in-view' : ''}>
                        <p className="prechapter-head">{t("accessing-array-elements")}</p>
                        <p className="chapter-description">{t("accessing-array-elements-description")}</p>
                        <p className="prechapter-head">{t("example")}</p>
                        <div className="code"><CodeHighlight code={arrayExample3} /></div>
                    </div>
                    <div id="modifying-array-values" ref={setObservedElementRef6} className={isInView6 ? 'in-view' : ''}>
                        <p className="prechapter-head">{t("modifying-array-values")}</p>
                        <p className="chapter-description">{t("modifying-array-values-description")}</p>
                        <p className="prechapter-head">{t("example")}</p>
                        <div className="code"><CodeHighlight code={arrayExample4} /></div>
                        <p className="chapter-description">{t("arrays-example-3-description")}</p>
                    </div>
                    <div id="using-loops-with-arrays" ref={setObservedElementRef7} className={isInView7 ? 'in-view' : ''}>
                        <p className="prechapter-head">{t("using-loops-with-arrays")}</p>
                        <p className="chapter-description">{t("using-loops-with-arrays-description")}</p>
                        <p className="prechapter-head">{t("example")}</p>
                        <div className="code"><CodeHighlight code={arrayExample5} /></div>
                        <p className="prechapter-head">{t("explanation-loops")}</p>
                        <ul className="explanation-list">
                            <li>{t("using-loops-with-arrays-explanation-1")}</li>
                            <li>{t("using-loops-with-arrays-explanation-2")}</li>
                            <li>{t("using-loops-with-arrays-explanation-3")}</li>
                        </ul>
                    </div>
                    <div id="character-arrays" ref={setObservedElementRef8} className={isInView8 ? 'in-view' : ''}>
                        <p className="prechapter-head">{t("character-arrays(strings)")}</p>
                        <p className="chapter-description">{t("character-arrays(strings)-description")}</p>
                        <p className="prechapter-head">{t("example")}</p>
                        <div className="code"><CodeHighlight code={arrayExample6} /></div>
                        <p className="chapter-description">{t("arrays-example-4-description")}</p>
                    </div>  
                    <div id="finding-maximum-in-an-array" ref={setObservedElementRef9} className={isInView9 ? 'in-view' : ''}>
                        <p className="prechapter-head">{t("finding-maximum-in-an-array")}</p>
                        <p className="chapter-description">{t("finding-maximum-in-an-array-description")}</p>
                        <p className="prechapter-head">{t("example")}</p>
                        <div className="code"><CodeHighlight code={arrayExample7} /></div>
                        <p className="prechapter-head">{t("explanation-loops")}</p>
                        <ul className="explanation-list">
                            <li>{t("finding-maximum-in-an-array-explanation-1")}</li>
                            <li>{t("finding-maximum-in-an-array-explanation-2")}</li>
                            <li>{t("finding-maximum-in-an-array-explanation-3")}</li>
                            <li>{t("finding-maximum-in-an-array-explanation-4")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Arrays
