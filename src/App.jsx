import ProductPage from "./pages/ProductPage";
function App({ products }) {
  return (
    <div>
      <ProductPage products={products} />
    </div>
  );
}

export default App;