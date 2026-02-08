"use client"
import { useState } from "react"
import InvoiceHeader from "@/components/InvoiceHeader"
import InvoiceInfo from "@/components/InvoiceInfo"
import ProcedureTable from "@/components/ProcedureTable"
import InvoiceFooter from "@/components/InvoiceFooter"

export default function Page() {
  const [procedures, setProcedures] = useState([])
  const [note, setNote] = useState("Please keep this invoice for your records.")

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow">
      <InvoiceHeader />
      <InvoiceInfo />
      <ProcedureTable procedures={procedures} setProcedures={setProcedures} />
      <InvoiceFooter procedures={procedures} note={note} setNote={setNote} />
    </div>
  )
}
