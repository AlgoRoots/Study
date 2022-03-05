import { useEffect, useState } from "react";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(1);
  const onChange = (event) => {
    setPrice(event.target.value);
    setAmount(1);
    setShowResult(false);
  };
  const onWriting = (event) => {
    setAmount(event.target.value);
  };
  const exchange = (event) => {
    event.preventDefault();
    setShowResult(true);
    if (amount === "0") {
      return;
    }
    setAmount(amount);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            <option>Select Coin!</option>
            {coins.map((coin, id) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) {coin.quotes.USD.price}
              </option>
            ))}
          </select>{" "}
          <br />
          <br />
          <h3>How many coins can I get with this money?</h3>
          <form onSubmit={exchange}>
            $
            <input
              onChange={onWriting}
              value={amount}
              type="number"
              placeholder="type amount"
            />
            <button>click for check!</button>
          </form>{" "}
          <br />
          <h3> {showResult ? `You can get ${amount / price}` : ""}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
