import React, {useState} from "react";
import "./DotFont.css"

function HomePage() {
    const [showBooks, setShowBooks] = useState(false);
    const [showMovies, setShowMovies] = useState(false);
    const [fontColor, setFontColor] = useState("aqua");

    const colorList = [
      "aqua",
      "cornflowerblue",
      "yellowgreen",
      "tomato",
      "whitesmoke",
      "deeppink",
    ];

    const changeFontColor = () => {
        const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
        console.log("dsfsfsdfsfsa",randomColor);
        setFontColor(randomColor);
    };

    const toggleBookList = () => {
        setShowBooks(!showBooks);
    };

    const toggleMovieList = () => {
        setShowMovies(!showMovies);
    };

    const bookList = [
      {
        title: "Fatigue Society",
        url: "https://product.kyobobook.co.kr/detail/S000000569813",
      },
      {
        title: "Ta eis heauton",
        url: "https://product.kyobobook.co.kr/detail/S000214395953",
      },
      {
        title: "NOTES SUR LE CINEMATOGRAPHE",
        url: "https://product.kyobobook.co.kr/detail/S000000570613",
      },
      {
        title: "Contradiction",
        url: "https://product.kyobobook.co.kr/detail/S000001632467",
      },
    ];

    const movieList = [
      {
        title: "Big Fish",
        url: "https://pedia.watcha.com/ko-KR/contents/mqW9aeW",
      },
      {
        title: "Swing girls",
        url: "https://pedia.watcha.com/ko-KR/contents/m15GeNO",
      },
      {
        title: "Flow",
        url: "https://pedia.watcha.com/ko-KR/contents/m5mYe7z",
      },
      {
        title: "Everything Everywhere All at Once",
        url: "https://pedia.watcha.com/ko-KR/contents/mO079w7",
      },
      {
        title:"Extracurricular",
        url:"https://pedia.watcha.com/ko-KR/contents/tEm9mkr",
      },
      {
        title: "Merry Christmas, Mr. Lawrence",
        url: "https://pedia.watcha.com/ko-KR/contents/m5ZXQeO",
      },
      {
        title: "Howl's Moving Castle",
        url: "https://pedia.watcha.com/ko-KR/contents/mJOV1RW",
      },
      {
        title: "Perfect Days",
        url: "https://pedia.watcha.com/ko-KR/contents/mOgjjzA",
      },
      {
        title: "Svaha: The Sixth Finger",
        url: "https://pedia.watcha.com/ko-KR/contents/mOAZGJQ",
      },
      {
        title: " your name.",
        url: "https://pedia.watcha.com/ko-KR/contents/mOo0PkN",
      },
      {
        title: "Spirited Away",
        url: "https://pedia.watcha.com/ko-KR/contents/my5YGwO",
      },
      {
        title: "Princess Mononoke",
        url: "https://pedia.watcha.com/ko-KR/contents/mnWJ1n5",
      },
    ];

    return (
      <div className="home-container" style={{ color: fontColor }}>
        <h1
          className="dot-font"
          onClick={changeFontColor}
          style={{ cursor: "pointer" }}
        >
          LEE YUN JU
        </h1>
        <h1 className="dot-font">
          <a
            href="https://blog.naver.com/013churrr"
            className="typing-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://blog.naver.com/013churrr
          </a>
        </h1>
        <h1 className="dot-font">
          <a
            href="https://youtube.com/@churrr-e2q?si=HH9mqtByyz1tMGz6"
            className="typing-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://youtube.com/013churrr
          </a>
        </h1>
        <h1 className="dot-font">
          <a
            href="https://github.com/glowju013"
            className="typing-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/glowju013
          </a>
        </h1>
        <h2
          className="dot-font"
          onClick={toggleBookList}
          style={{ cursor: "pointer" }}
        >
          📚 Recently I read... {showBooks ? "▲" : "▼"}
        </h2>
        {showBooks && (
          <ul
            className="dot-font"
            style={{ listStyle: "none", paddingLeft: 0 }}
          >
            {bookList.map((book, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dot-font"
                  style={{ textDecoration: "none"}}
                >
                  {book.title}
                </a>
              </li>
            ))}
          </ul>
        )}
        <h2
          className="dot-font"
          onClick={toggleMovieList}
          style={{ cursor: "pointer" }}
        >
          🎥 My favorite... {showMovies ? "▲" : "▼"}
        </h2>
        {showMovies && (
          <ul
            className="dot-font"
            style={{ listStyle: "none", paddingLeft: 0 }}
          >
            {movieList.map((movie, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                <a
                  href={movie.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dot-font"
                  style={{ textDecoration: "none"}}
                >
                  {movie.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default HomePage;