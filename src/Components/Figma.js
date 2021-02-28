import { useState } from "react";

export default function App() {
  const [headingFontFamily, setHeadingFontFamliy] = useState("inherit");
  const [textStyle, setTextStyle] = useState({
    fontSize: 20,
    fontFamily: "inherit"
  });

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(JSON.stringify(textStyle));
      console.log(JSON.stringify(textStyle));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: headingFontFamily }}>Figma Lite</h1>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel
        risus commodo viverra maecenas. Ac feugiat sed lectus vestibulum mattis
        ullamcorper.
      </p>
      <button
        onClick={() =>
          setTextStyle({ ...textStyle, fontSize: textStyle.fontSize + 8 })
        }
      >
        +
      </button>
      <button
        disabled={textStyle.fontSize < 13 ? true : false}
        onClick={() =>
          setTextStyle({ ...textStyle, fontSize: textStyle.fontSize - 8 })
        }
      >
        -
      </button>
      <h2>Choose the font size!</h2>
      <button onClick={() => setTextStyle({ ...textStyle, fontSize: 15 })}>
        15px
      </button>
      <button onClick={() => setTextStyle({ ...textStyle, fontSize: 20 })}>
        20px
      </button>
      <h2>Choose Font</h2>
      <button
        onClick={() => setTextStyle({ ...textStyle, fontFamily: "monospace" })}
      >
        Monospace
      </button>
      <button
        onClick={() => setTextStyle({ ...textStyle, fontFamily: "serif" })}
      >
        Serif
      </button>
      <button
        onClick={() => setTextStyle({ ...textStyle, fontFamily: "arial" })}
      >
        arial
      </button>
      <h2>Change Heading's font</h2>
      <button onClick={() => setHeadingFontFamliy("monospace")}>
        Monospace
      </button>
      <button onClick={() => setHeadingFontFamliy("serif")}>Serif</button>
      <button onClick={() => setHeadingFontFamliy("arial")}>arial</button>
      <h2>Combo Set</h2>
      <button
        onClick={() => {
          setTextStyle({ ...textStyle, fontFamily: "monospace" });
          setHeadingFontFamliy("monospace");
        }}
      >
        Monospace
      </button>
      <button
        onClick={() => {
          setTextStyle({ ...textStyle, fontFamily: "serif" });
          setHeadingFontFamliy("serif");
        }}
      >
        Serif
      </button>
      <button
        onClick={() => {
          setTextStyle({ ...textStyle, fontFamily: "arial" });
          setHeadingFontFamliy("arial");
        }}
      >
        arial
      </button>
      <br />
      <br />
      <button onClick={copyToClipboard}>Copy to Clipboard!</button>
    </div>
  );
}
