import {useState} from 'react'

function Toggler({ initial, variant }) {
  const [isVariant, setIsVariant] = useState(false);
  return (
    <>
      {isVariant ? variant : initial }
      <button onClick={() => setIsVariant(!isVariant)}>toggle</button>
    </>
  );
}

export default Toggler;
