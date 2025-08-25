import { useState } from 'react';

function App() {
  return (
    <div>
      <Container />
    </div>
  );
}
function Container() {
  const [topTitle, setTopTitle] = useState('');
  const [bottomTitle, setBottomTitle] = useState('');
  return (
    <div className="container">
      <Header />
      <Content
        topTitle={topTitle}
        setTopTitle={setTopTitle}
        bottomTitle={bottomTitle}
        setBottomTitle={setBottomTitle}
      />
      <Button />
      <MemeImage topTitle={topTitle} bottomTitle={bottomTitle} />
    </div>
  );
}
function Header() {
  return <h1 className="header">Meme Generator</h1>;
}
function Content({ topTitle, setTopTitle, setBottomTitle, bottomTitle }) {
  return (
    <div className="content">
      <div>
        <Label text="Top Text" />
        <input
          className="input-field"
          placeholder="One does not simply"
          type="text"
          value={topTitle}
          onChange={(e) => setTopTitle(e.target.value)}
          style={{ width: '200px' }}
        />
      </div>
      <div>
        <Label text="Buttom Text" />
        <input
          className="input-field"
          placeholder="Walk into Mordor"
          type="text"
          value={bottomTitle}
          onChange={(e) => setBottomTitle(e.target.value)}
          style={{ width: '200px' }}
        />
      </div>
    </div>
  );
}
function Label({ text }) {
  return <label>{text}</label>;
}

function Button() {
  return <button className="button">Get a new meme image</button>;
}
function MemeImage({ topTitle, bottomTitle }) {
  return (
    <div className="meme-image">
      <div className="meme-text">
        <div>
          <h2>{topTitle}</h2>
        </div>
        <div>
          <h2>{bottomTitle}</h2>
        </div>
      </div>
    </div>
  );
}
export default App;
