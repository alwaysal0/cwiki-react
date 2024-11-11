import React from "react";
import '../styles/LibrariesPage.css'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CodeHighlight from "../../../CodeHighlight";

function Mathh() {
    // translator
    const { t, i18n } = useTranslation(); // получаем функции для перевода и смены языка

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // функция для смены языка
    };
    const code = `
    #include <stdio.h>   // Include the stdio.h library for input/output
    #include <math.h>    // Include the math.h library for mathematical functions

    int main() {
        double num, power, angle;

        // Prompt the user for a number
        printf("Enter a number: ");
        scanf("%lf", &num); // Read a double value from standard input

        // Calculate the square root
        printf("Square root of %.2f: %.2f\\n", num, sqrt(num)); // Output the square root

        // Prompt the user for the power
        printf("Enter a power: ");
        scanf("%lf", &power); // Read a double value for the power

        // Calculate the power
        printf("%.2f raised to the power of %.2f: %.2f\\n", num, power, pow(num, power)); // Output the result of power calculation

        // Prompt the user for an angle in radians
        printf("Enter an angle in radians: ");
        scanf("%lf", &angle); // Read the angle in radians

        // Calculate trigonometric functions
        printf("Sine of %.2f radians: %.2f\\n", angle, sin(angle)); // Output the sine
        printf("Cosine of %.2f radians: %.2f\\n", angle, cos(angle)); // Output the cosine
        printf("Tangent of %.2f radians: %.2f\\n", angle, tan(angle)); // Output the tangent

        // Output the absolute value
        printf("Absolute value of %.2f: %.2f\\n", num, fabs(num)); // Output the absolute value

        // Calculate and output the natural logarithm
        if (num > 0) {
            printf("Natural logarithm of %.2f: %.2f\\n", num, log(num)); // Output the natural logarithm
        } else {
            printf("Natural logarithm is not defined for non-positive values.\\n");
        }

        return 0; // End of the program
    }
    `
    return(
        <>
        <div className="libraries-div" id="math-h-div">
            <p id="stdio-h" className="headers-of-libraries-right">{t("library")}<span className="head-libraries">&lt;math.h&gt;</span></p>
            <p className="text-of-libraries-right"><span className="libraries-span">&lt;math.h&gt;</span>{t("math.h")}</p>
            <p className="text-of-libraries-right">{t("main-functions")}<span className="libraries-span">&lt;math.h&gt;</span> :</p>
            <ul>
                <li><span className="functions-span">sqrt</span>{t("sqrt-function")}</li>
                <li><span className="functions-span">pow</span>{t("pow-function")}</li>
                <li><span className="functions-span">exp</span>{t("exp-function")}</li>
                <li><span className="functions-span">log</span>{t("log-function")}</li>
                <li><span className="functions-span">log10</span>{t("log10-function")}</li>
                <li><span className="functions-span">sin</span>{t("sin-function")}</li>
                <li><span className="functions-span">cos</span>{t("cos-function")}</li>
                <li><span className="functions-span">tan</span>{t("tan-function")}</li>
                <li><span className="functions-span">fabs</span>{t("fabs-function")}</li>
                <li><span className="functions-span">ceil</span>{t("ceil-function")}</li>
                <li><span className="functions-span">floor</span>{t("floor-function")}</li>
            </ul>
            <p className="text-of-libraries-right example-code">{t("example-code")}</p>
            <p className="text-of-libraries-right">{t("example-code-math.h1")}<span className="libraries-span">&lt;math.h&gt;</span>{t("example-code-math.h2")}</p>
            <div id="code">
                <CodeHighlight code={code} />
            </div>
            <p className="text-of-libraries-right example-code">{t("explanation-of-the-code")}</p>
            <ol>
                <li><span className="explanation-span">#include &lt;math.h&gt;</span>{t("1.math.h")}</li>
                <li><span className="explanation-span">double num, power, angle;</span>{t("2.math.h")}</li>
                <li><span className="explanation-span">printf("Enter a number: ");</span>{t("3.math.h")}</li>
                <li><span className="explanation-span">scanf("%lf", &num);</span>{t("4.math.h")}</li>
                <li><span className="explanation-span">sqrt(num)</span>{t("5.math.h")}</li>
                <li><span className="explanation-span">printf("Enter a power: ");</span>{t("6.math.h")}</li>
                <li><span className="explanation-span">pow(num, power)</span>{t("7.math.h")}</li>
                <li><span className="explanation-span">printf("Enter an angle in radians: ");</span>{t("8.math.h")}</li>
                <li><span className="explanation-span">sin(angle)</span>, <span className="explanation-span">cos(angle)</span>, <span className="explanation-span">tan(angle)</span>{t("9.math.h")}</li>
                <li><span className="explanation-span">fabs(num)</span>{t("10.math.h")}</li>
                <li><span className="explanation-span">log(num)</span>{t("11.math.h")}</li>
                <li><span className="explanation-span">return 0;</span>{t("return-0-explanation")}</li>
            </ol>
        </div>
        </>
    )
}
export default Mathh
