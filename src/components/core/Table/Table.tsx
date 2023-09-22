import { ReactNode } from "react";

type TableProps = {
  headers: Array<string>;
  body: ReactNode;
};

function Table({ body, headers }: TableProps) {
  return (
    <table className="min-w-full text-left text-sm font-light table-fixed">
      <thead className="border-b font-medium">
        <tr>
          {headers.map((header) => (
            <th key={header.toLowerCase()} scope="col" className="px-6 py-4">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}

export default Table;
