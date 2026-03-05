export default function Listing({ title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}