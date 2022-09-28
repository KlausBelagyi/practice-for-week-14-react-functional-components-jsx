import bulbasaurImage from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src={bulbasaurImage}
        style={{ height: "55%", width: "auto", borderRadius: "50%" }}
        alt="favPokemon"
      />
      <h2>
        Bulbasaur's type is{" "}
        <span className="pokeType">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="pokeMove">{pokeCharacteristics.move}</span>{" "}
      </h2>
    </div>
  );
}

export default Showcase;
