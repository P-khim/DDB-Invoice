"use client"
import { useEffect, useState } from "react"

export default function InvoiceInfo() {
  const today = new Date().toISOString().slice(0, 10) // YYYY-MM-DD
  const [name, setName] = useState("")
  const [date, setDate] = useState(today)
  const [invoiceNo, setInvoiceNo] = useState("")

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10) // YYYY-MM-DD
    const todayKey = `invoice-counter-${today}`

    // Get the last counter from localStorage
    const lastCounter = parseInt(localStorage.getItem(todayKey) || "0", 10)

    // Increment for new invoice
    const newCounter = lastCounter + 1

    // Save back to localStorage
    localStorage.setItem(todayKey, newCounter.toString())

    // Format as 3 digits: 1 -> 001, 12 -> 012
    const counterStr = String(newCounter).padStart(3, "0")

    // Set invoice number
    const todayFormatted = today.replace(/-/g, "") // 20260208
    setInvoiceNo(`INV-${todayFormatted}-${counterStr}`)
  }, []) // Run once on mount

  // Format date for display (YYYY-MM-DD -> DD/MM/YYYY)
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
