"use client"
import { useEffect, useState } from "react"

export default function InvoiceInfo() {
  const today = new Date().toISOString().slice(0, 10)

  const [name, setName] = useState("")
  const [date, setDate] = useState(today)
  const [invoiceNo, setInvoiceNo] = useState("")

  // ✅ Generate invoice number AFTER hydration
  useEffect(() => {
    setInvoiceNo(`INV-${Date.now()}`)
  }, [])

  // Format date deterministically (YYYY-MM-DD -> DD/MM/YYYY)
  const formattedDate = date ? date.split("-").reverse().join("/") : "-"

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div>
        <label>Patient Name</label>
        <input
          className="border p-2 w-full no-print"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className="print-only font-semibold">{name || "-"}</div>
      </div>

      <div>
        <label>Date</label>
        <input
          type="date"
          className="border p-2 w-full no-print"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div className="print-only">{formattedDate}</div>
      </div>

      <div>
        <label>Invoice No</label>
        <p className="font-semibold mt-2">
          {invoiceNo || "Generating..."}
        </p>
      </div>
    </div>
  )
}
