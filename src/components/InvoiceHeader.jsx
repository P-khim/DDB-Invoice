export default function InvoiceHeader() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <img src="/logo.png" className="h-40" alt="clinic-logo" />
      <div className="text-center flex-1">
        <h1 className="text-2xl font-bold">Dream Dental Clinic</h1>
        <p>Phone: 015 999 081 / 017 999 381</p>
        <p>Street R8, Building B02-B03 Borey One Park, Songkat Sras Chak, Khan Doun Penh, Phnom Penh, Cambodia</p>
      </div>
    </div>
  )
}
