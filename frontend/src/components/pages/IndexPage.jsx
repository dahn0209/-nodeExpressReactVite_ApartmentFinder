function IndexPage() {
  console.log("Index Page loaded");

  fetch("/api/listings")
    .then((res) => res.json())
    .then((data) => console.log("Listings data:", data));

  return (
    <>
      <h1>Index Page Deee</h1>
      <section>
        <p>This is the main index page content.</p>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          eius culpa eos ipsa tenetur totam? Voluptas, ullam? Quis molestias
          corrupti nemo, id laboriosam ullam! Eaque praesentium libero eos
          distinctio sit?
        </div>
      </section>
    </>
  );
}

export default IndexPage;
