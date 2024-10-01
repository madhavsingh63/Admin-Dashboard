import { FormEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("select");
  const [pinCode, setPinCode] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(address, city, state, country, pinCode);
  };
  const navigate = useNavigate();

  return (
    <div className="shipping">
      <button className="backBtn" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </button>
      <h2>
        Shipping <br /> Address
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          required
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="select">Choose Country</option>
          <option value="india">India</option>
          <option value="nepal">Nepal</option>
          <option value="korea">Korea</option>
          <option value="russia">Russia</option>
        </select>

        <input
          required
          type="text"
          placeholder="Pin Code"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
