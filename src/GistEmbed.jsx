import React, { useEffect, useState } from "react";
import hljs from "highlight.js"; // highlight.js для подсветки синтаксиса
import "highlight.js/styles/github.css"; // Стиль подсветки синтаксиса (можно изменить)

const GistEmbed = ({ gistId }) => {
  const [gistContent, setGistContent] = useState(null);

  useEffect(() => {
    // Функция загрузки данных Gist с помощью GitHub API
    const fetchGist = async () => {
      try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        const data = await response.json();
        const fileContent = data.files[Object.keys(data.files)[0]].content; // Получаем содержимое первого файла
        setGistContent(fileContent); // Устанавливаем содержимое
      } catch (error) {
        console.error("Ошибка загрузки Gist:", error);
      }
    };

    fetchGist();
  }, [gistId]);

  useEffect(() => {
    // Подсветка синтаксиса после загрузки Gist
    if (gistContent) {
      hljs.highlightAll();
    }
  }, [gistContent]);

  return (
    <div>
      {gistContent ? (
        <pre>
          <code className="language-javascript">{gistContent}</code>
        </pre>
      ) : (
        <p>Загрузка Gist...</p>
      )}
    </div>
  );
};

export default GistEmbed;