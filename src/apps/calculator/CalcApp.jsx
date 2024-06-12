/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";

function CalcApp() {
  const [billQty, setBillQty] = useState(0);
  const [ownTip, setOwnTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBillQty(0);
    setOwnTip(0);
    setFriendTip(0);
  }

  return (
    <div className="tmp-cont">
      <div className="calc-container">
        <BillInput billQty={billQty} onSetBill={setBillQty} />
        <SelectTipPercentage
          tipPercentage={ownTip}
          onSetTipPercentage={setOwnTip}
        >
          <p className="paragraph">How did you like the service?</p>
        </SelectTipPercentage>
        <SelectTipPercentage
          tipPercentage={friendTip}
          onSetTipPercentage={setFriendTip}
        >
          <p className="paragraph">How did your friend like the service?</p>
        </SelectTipPercentage>
        {billQty > 0 && (
          <>
            <MessageFeedback
              billQty={billQty}
              ownTip={ownTip}
              friendTip={friendTip}
            />
            <ResetButton onReset={handleReset} />
          </>
        )}
      </div>
    </div>
  );
}

function BillInput({ billQty, onSetBill }) {
  return (
    <div className="row">
      <p className="paragraph">How much was the bill?</p>
      <input
        type="text"
        id="bill"
        className="input-calc"
        value={billQty}
        onChange={(ev) => onSetBill(+ev.target.value)}
      />
    </div>
  );
}

// Select Control Element
function SelectTipPercentage({ tipPercentage, onSetTipPercentage, children }) {
  return (
    <div className="row">
      {children}
      <select
        className="select-tip"
        value={tipPercentage}
        onChange={(ev) => onSetTipPercentage(+ev.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function MessageFeedback({ billQty, ownTip, friendTip }) {
  const tipsTotal = ((ownTip + friendTip) / 2 / 100) * billQty;
  const total = billQty + tipsTotal;

  return (
    <p className="feed">
      You pay ${total} (${billQty} + ${tipsTotal} tip)
    </p>
  );
}

function ResetButton({ onReset }) {
  return (
    <button className="btn" onClick={onReset}>
      Reset
    </button>
  );
}

export default CalcApp;
