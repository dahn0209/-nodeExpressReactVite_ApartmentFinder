export default function Listing({ id, title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}