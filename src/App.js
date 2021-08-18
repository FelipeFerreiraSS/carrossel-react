import './App.css';

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="logo"/>
      </div>
      <div className="carrossel">
        <div className="item">
          <div className="image">
            <img src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg" alt="shoe"/>
          </div>
          <div className="info">
            <span className="name">Super Shoes 1</span>
            <span className="oldPrice">U$ 599,00</span>
            <span className="price">U$ 199,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
