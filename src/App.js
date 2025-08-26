// import { useState } from 'react';
//
// function App() {
//   const [meme, setMeme] = useState('');
//   const KEY = 'e02689e09a1d4a98883b2d907ea2c4f2';
//   function getMeme() {
//     fetch(`https://api.humorapi.com/memes/random?api-key=${KEY}`)
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }
//
//   return (
//     <div>
//       <Container meme={meme} getMeme={getMeme} />
//     </div>
//   );
// }
// function Container({ meme, getMeme }) {
//   const [topTitle, setTopTitle] = useState('');
//   const [bottomTitle, setBottomTitle] = useState('');
//   return (
//     <div className="container">
//       <Header />
//       <Content
//         topTitle={topTitle}
//         setTopTitle={setTopTitle}
//         bottomTitle={bottomTitle}
//         setBottomTitle={setBottomTitle}
//       />
//       <Button getMeme={getMeme} />
//       <MemeImage topTitle={topTitle} bottomTitle={bottomTitle} meme={meme} />
//     </div>
//   );
// }
// function Header() {
//   return <h1 className="header">Meme Generator</h1>;
// }
// function Content({ topTitle, setTopTitle, setBottomTitle, bottomTitle }) {
//   return (
//     <div className="content">
//       <div>
//         <Label text="Top Text" />
//         <input
//           className="input-field"
//           placeholder="One does not simply"
//           type="text"
//           value={topTitle}
//           onChange={(e) => setTopTitle(e.target.value)}
//           style={{ width: '200px' }}
//         />
//       </div>
//       <div>
//         <Label text="Bottom Text" />
//         <input
//           className="input-field"
//           placeholder="Walk into Mordor"
//           type="text"
//           value={bottomTitle}
//           onChange={(e) => setBottomTitle(e.target.value)}
//           style={{ width: '200px' }}
//         />
//       </div>
//     </div>
//   );
// }
// function Label({ text }) {
//   return <label>{text}</label>;
// }
//
// function Button({ getMeme }) {
//   return (
//     <button className="button" onClick={getMeme}>
//       Get a new meme image
//     </button>
//   );
// }
// function MemeImage({ topTitle, bottomTitle, meme }) {
//   if (!meme) return null;
//
//   return (
//     <div
//       className="meme-image"
//       style={{
//         position: 'relative',
//         backgroundImage: `url(${meme.url})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         width: '200px',
//         height: '200px',
//         margin: '20px auto',
//         fontWeight: 'bold',
//         textShadow: '2px 2px 5px black',
//       }}
//     >
//       <h2
//         style={{
//           position: 'absolute',
//           top: '10px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//         }}
//       >
//         {topTitle}
//       </h2>
//
//       <h2
//         style={{
//           position: 'absolute',
//           bottom: '10px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//         }}
//       >
//         {bottomTitle}
//       </h2>
//     </div>
//   );
// }
//
// export default App;
import { useEffect, useState } from 'react';
function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState('EUR');
  const [toCur, setToCur] = useState('USD');
  const [converted, setConverted] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (fromCur === toCur) {
      setConverted(amount);
      return;
    }
    setIsLoading(true);
    fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
    )
      .then((res) => res.json())
      .then((data) => setConverted(data.rates[toCur]));
    setIsLoading(false);
  }, [amount, fromCur, toCur]);
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
        disabled={isLoading}
      ></input>
      <select
        value={fromCur}
        onChange={(event) => setFromCur(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(event) => setToCur(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}
export default App;
