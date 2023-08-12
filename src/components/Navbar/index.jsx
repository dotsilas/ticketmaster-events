const Navbar = () => {
  const words = [
    "Hola",
    "Mundo",
    "Esto es React"
  ]

  const list = words.map(word => <li>{word}</li>);

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}

export default Navbar;