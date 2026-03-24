function OrderPanel({ cart, setCart }) {

  const total = cart.length * 100;

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="order-panel">
      <h2>Order</h2>

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          {item.name}
          <button onClick={() => removeItem(index)}>❌</button>
        </div>
      ))}

      <hr />

      <h3>Total: ₹{total}</h3>

      <button>Pay</button>
    </div>
  );
}

export default OrderPanel;