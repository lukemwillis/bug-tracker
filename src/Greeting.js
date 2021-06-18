import Toggler from './Toggler'

function Greeting() {
  return (
    <Toggler initial={<p>Hello, Grant!</p>} variant={<p>Hello, World!</p>} />
  );
}

export default Greeting;
