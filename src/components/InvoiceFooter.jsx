export default function InvoiceFooter({ procedures, note, setNote }) {

  const total = procedures.reduce((sum, row) => {
    return sum + (row.price - (row.price * row.discount) / 100)
  }, 0)

  return (
    <div>
      <div className="text-right text-xl font-bold mb-4">
        Total: ${total.toFixed(2)}
      </div>

      <label>Note</label>
      <textarea
        className="border p-2 w-full"
        rows="3"
        value={note}
        onChange={e => setNote(e.target.value)}
      />
    </div>
  )
}
