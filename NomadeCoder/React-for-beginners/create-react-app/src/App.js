import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const [amount, setAmount] = useState("");
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select>
            {coins.map((coin, id) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) {coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <form onSubmit={onSubmit}>
            <input
              value={amount}
              onChange={onChange}
              type="number"
              placeholder="type amount"
            />
          </form>
          <h3>{amount}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
