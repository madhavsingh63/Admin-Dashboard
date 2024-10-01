import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Products = () => {
  const [inputText, setInputText] = useState<string>("");
  const [length, setLength] = useState<number>(8);
  const [isNumber, setIsNumber] = useState<boolean>(true);
  const [isCharacter, setIsCharacter] = useState<boolean>(false);
  const [isSymbols, setIsSymbols] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const symbol: string = '~`!@#$%^&*()_+=-<>?:":{}[];,./|';

  const getRndInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getRndNumber = () => {
    return getRndInteger(0, 9);
  };

  const getRndCharacter = () => {
    return String.fromCharCode(getRndInteger(65, 91));
  };

  const getRndSymbol = () => {
    let randomNum = getRndInteger(0, symbol.length);
    return symbol.charAt(randomNum);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isNumber && !isCharacter && !isSymbols) {
      return alert("Please select one at least");
    }

    let result: string = inputText || "";
    const loopLength: number = length - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (isNumber) {
        entireString += getRndNumber();
      }
      if (isCharacter) {
        entireString += getRndCharacter();
      }
      if (isSymbols) {
        entireString += getRndSymbol();
      }

      const randomNum: number = Math.floor(Math.random() * entireString.length);

      result += entireString[randomNum];
    }

    setCoupon(result);
  };

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);
  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="couponContainer">
        <h2>Coupon</h2>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Text to include"
              value={inputText}
              maxLength={length}
              onChange={(e) => setInputText(e.target.value)}
            />
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <fieldset className="checkboxContainer">
              <legend>Include</legend>
              <label>
                <input
                  type="checkbox"
                  checked={isNumber}
                  onChange={() => setIsNumber((prev) => !prev)}
                />
                Number
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isCharacter}
                  onChange={() => setIsCharacter((prev) => !prev)}
                />
                Characters
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isSymbols}
                  onChange={() => setIsSymbols((prev) => !prev)}
                />
                Symbols
              </label>
            </fieldset>
            <button>Generate</button>
          </form>

          {coupon && (
            <code onClick={() => copyText(coupon)}>
              {coupon}
              <span>{isCopied ? "Copied" : "Copy"}</span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Products;
