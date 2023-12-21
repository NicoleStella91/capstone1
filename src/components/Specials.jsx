import specials from "../specialsdata"
import SimpleLink from "./SimpleLink";

function Specials() {
  const specialsElement = specials.map((special) => (
    <article key={special.id} className="special--card">
      <img src={special.img} alt={special.name} className="special--img"/>
      <section className="special--title">
        <h4>{special.name}</h4>
        <span>${special.price}</span>
      </section>
      <p className="special--desc">{special.description}</p>
      <SimpleLink link="Order online" />
    </article>
  ));

  return (
    <>
      <header className="specials--header">
        <h2>Specials</h2>
        <button>Order Online</button>
      </header>
      <section className="specials--section">{specialsElement}</section>
    </>
  );
}

export default Specials;
