"use client"
import { groupedProcedures } from "@/data/procedures"

export default function ProcedureTable({ procedures, setProcedures }) {

  const addRow = () => {
    setProcedures([
      ...procedures,
      {
        category: "",
        code: "",
        description: "",
        tooth: "",
        price: 0,
        discount: 0,
      }
    ])
  }

  const updateRow = (i, field, value) => {
    const copy = [...procedures]
    copy[i][field] = value
    setProcedures(copy)
  }

  const selectProcedure = (i, category, proc) => {
    const copy = [...procedures]
    copy[i] = {
      ...copy[i],
      category,
      code: proc.code,
      description: proc.description,
      price: proc.defaultPrice,
    }
    setProcedures(copy)
  }

  const removeRow = i => {
    setProcedures(procedures.filter((_, idx) => idx !== i))
  }

  const afterDiscount = row =>
    row.price - (row.price * row.discount) / 100

  return (
    <div className="mb-6">
      <table className="w-full border text-sm procedure-table">
        <thead className="bg-gray-100">
          <tr>
            <th>Category</th>
            <th>Procedure</th>
            <th>Tooth #</th>
            <th>Price</th>
            <th>Discount %</th>
            <th>After Discount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {procedures.map((row, i) => {
            const category = groupedProcedures.find(
              c => c.category === row.category
            )

            return (
              <tr key={i}>
                {/* Category */}
                <td className="border p-1">
                  <select
                    className="border w-full no-print"
                    value={row.category}
                    onChange={e =>
                      updateRow(i, "category", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    {groupedProcedures.map(c => (
                      <option key={c.category} value={c.category}>
                        {c.category}
                      </option>
                    ))}
                  </select>
                  <div className="print-only">{row.category}</div>
                </td>

                {/* Procedure */}
                <td className="border p-1">
                  <select
                    className="border w-full no-print"
                    value={row.code || ""}
                    onChange={e => {
                      const proc = category?.procedures.find(
                        p => p.code === e.target.value
                      )
                      if (proc) {
                        selectProcedure(i, category.category, proc)
                      }
                    }}
                  >
                    <option key="default-proc" value="">
                      Select
                    </option>

                    {category?.procedures.map(p => (
                      <option key={`${row.category}-${p.code}`} value={p.code}>
                        {p.description}
                      </option>
                    ))}
                  </select>
                  <div className="print-only">{row.description}</div>

                </td>

                {/* Tooth number */}
                <td className="border p-1 text-center">
                  <input
                    className="border w-full no-print text-center"
                    value={row.tooth || ""}
                    onChange={e => updateRow(i, "tooth", e.target.value)}
                  />
                  <div className="print-only">{row.tooth || "-"}</div>
                </td>

                {/* Price */}
                <td className="border p-1 text-right">
                  ${row.price}
                </td>

                {/* Discount */}
                <td className="border p-1">
                  <input
                    type="number"
                    className="border w-full no-print"
                    value={row.discount}
                    onChange={e =>
                      updateRow(i, "discount", +e.target.value)
                    }
                  />
                  <div className="print-only text-right">{row.discount}</div>
                </td>

                {/* After discount */}
                <td className="border p-1 text-right">
                  ${afterDiscount(row).toFixed(2)}
                </td>
                <td className="border p-1 text-center">
                  <button
                    onClick={() => removeRow(i)}
                    className="bg-red-500 text-white px-3 py-1 rounded no-print"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <button
        onClick={addRow}
        className="mt-3 bg-blue-600 text-white px-4 py-2"
      >
        + Add Procedure
      </button>
    </div>
  )
}
