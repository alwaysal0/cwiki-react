import React from "react";
import { useEffect } from "react";
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css';
import 'prismjs/components/prism-c.min.js'

function CodeHighlight ({code}) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const style = {
        marginTop: '30px',
        fontSize: '18px',
        borderRadius: '15px',
        padding: '10px',
        boxShadow: 'inset 0 0 10px #00589c70',
        backgroundColor: 'rgb(242, 242, 242)',
      };
    
    return(
        <pre style={style}>
            <code className="language-c">{code}</code>
        </pre>
    );
};

export default CodeHighlight
