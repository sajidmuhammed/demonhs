export default function DashboardTable({ columns, data }) {
  return (
    <div className="w-full px-2 md:px-6 overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-full border border-gray-300 text-left text-xs md:text-sm">
          <thead className="bg-gray-100 font-semibold text-gray-700">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-2 md:px-4 py-2 border-b whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-50">
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      className="px-2 md:px-4 py-2 border-b whitespace-nowrap"
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-400"
                >
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
