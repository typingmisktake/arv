export default function Display({ profiles }) {
  return (
    <div>
      <h2 className="mb-3 text-xl text-center">Profiles</h2>
      <table className="w-full text-center border-collapse table-auto">
        <thead className="">
          <tr className="">
            <th className="px-4 py-2 border">Id</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Address</th>
          </tr>
        </thead>
        <tbody className="">
          {profiles.map((profile) => {
            return (
              <tr className="">
                <td className="px-4 py-2 border">{profile.id}</td>
                <td className="px-4 py-2 border">{profile.name}</td>
                <td className="px-4 py-2 border">{profile.address}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="">
          <tr className="border bg-sky-500">
            <td colSpan="3" className="px-4 py-2">
              Total: {profiles.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
