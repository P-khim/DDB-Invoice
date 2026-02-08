import { useState } from "react";

export default function InvoiceFooter({ procedures, note, setNote }) {
  const [deposit, setDeposit] = useState(0);

  const grandTotal = procedures.reduce((sum, row) => {
    return sum + (row.price - (row.price * row.discount) / 100);
  }, 0);

  const total = grandTotal - deposit;

  return (
    <div>
      <div className="text-right text-xl font-bold mb-4">
        Grand Total: ${grandTotal.toFixed(2)}
      </div>

      <div className="text-right text-xl font-bold mb-4">
        Deposit:{" "}
        {/* Editable on screen */}
        <span className="print:hidden">
          $
          <input
            type="number"
            className="border rounded p-1 w-24 ml-2 text-right"
            value={deposit}
            onChange={e => setDeposit(parseFloat(e.target.value) || 0)}
          />
        </span>

        {/* Shows for printing */}
        <span className="hidden print:inline">${deposit.toFixed(2)}</span>
      </div>

      <div className="text-right text-xl font-bold mb-4">
        Total: ${total.toFixed(2)}
      </div>

      <label className="block mb-1">Note</label>
      <textarea
        className="border p-2 w-full"
        rows="3"
        value={note}
        onChange={e => setNote(e.target.value)}
      />
    </div>
  );
}
