const Display = ({ applications }) => {
  return applications.map((application, index) => {
    return (
      <table
        aria-describedby="Applications"
        className="w-full mb-5 text-center text-white border border-collapse table-auto border-slate-900"
        key={index}
      >
        <thead>
          <tr className="text-white border bg-slate-800">
            <th className="px-2 py-1 border border-slate-900">Sr no</th>
            <th className="px-2 py-1 border border-slate-900">Name</th>
            <th className="px-2 py-1 border border-slate-900">DOB</th>
            <th className="px-2 py-1 border border-slate-900">
              Place of birth
            </th>
            <th className="px-2 py-1 border border-slate-900">
              First Language
            </th>
            <th className="px-2 py-1 border border-slate-900">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-white border bg-slate-500">
            <td className="px-2 py-1 border border-slate-900" rowSpan="5">
              {index + 1}
            </td>
            <td className="px-2 py-1 border border-slate-900">
              {Object.values(application.name).join(" ")}
            </td>
            <td className="px-2 py-1 border border-slate-900">
              {application.dateOfBirth.toLocaleDateString()}
            </td>
            <td className="px-2 py-1 border border-slate-900">
              {application.placeOfBirth}
            </td>
            <td className="px-2 py-1 border border-slate-900">
              {application.firstLanguage}
            </td>
            <td className="px-2 py-1 border border-slate-900">
              {Object.values(application.address).join(" ")}
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="p-2">
              <table className="w-full text-center border border-collapse table-auto">
                <caption className="px-2 py-1 font-bold border bg-slate-800 border-slate-900">
                  Father
                </caption>
                <thead>
                  <tr className="px-2 py-1 border border-slate-900">
                    <th className="px-2 py-1 border border-slate-900">Name</th>
                    <th className="px-2 py-1 border border-slate-900">Email</th>
                    <th className="px-2 py-1 border border-slate-900">Phone</th>
                    <th className="px-2 py-1 border border-slate-900">
                      Education
                    </th>
                    <th className="px-2 py-1 border border-slate-900">
                      Qualification
                    </th>
                    <th className="px-2 py-1 border border-slate-900">
                      Profession
                    </th>
                    <th className="px-2 py-1 border border-slate-900">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="px-2 py-1 border border-slate-900">
                    <td className="px-2 py-1 border border-slate-900">
                      {Object.values(application.father.name).join(" ")}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.email}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.phone}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.education.join(", ")}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.qualification}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.profession}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.designation}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="p-2">
              <table className="w-full text-center border border-collapse table-auto">
                <caption className="px-2 py-1 font-bold border bg-slate-800 border-slate-900">
                  Mother
                </caption>
                <thead>
                  <tr className="px-2 py-1 border border-slate-900">
                    <th className="px-2 py-1 border border-slate-900">Name</th>
                    <th className="px-2 py-1 border border-slate-900">Email</th>
                    <th className="px-2 py-1 border border-slate-900">Phone</th>
                    <th className="px-2 py-1 border border-slate-900">
                      Education
                    </th>
                    <th className="px-2 py-1 border border-slate-900">
                      Qualification
                    </th>
                    <th className="px-2 py-1 border border-slate-900">
                      Profession
                    </th>
                    <th className="px-2 py-1 border border-slate-900">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="px-2 py-1 border border-slate-900">
                    <td className="px-2 py-1 border border-slate-900">
                      {Object.values(application.mother.name).join(" ")}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.email}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.father.phone}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.mother.education.join(", ")}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.mother.qualification}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.mother.profession}
                    </td>
                    <td className="px-2 py-1 border border-slate-900">
                      {application.mother.designation}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan="5">
              <div className="grid grid-cols-2 gap-2">
                <table className="w-full text-center border border-collapse table-auto">
                  <caption className="px-2 py-1 font-bold border bg-slate-800 border-slate-900">
                    Emergency Contact
                  </caption>
                  <thead>
                    <tr className="border">
                      <th className="px-2 py-1 border border-slate-900">
                        Phone
                      </th>
                      <th className="px-2 py-1 border border-slate-900">
                        Relation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 border border-slate-900">
                        {application.emergencyContact.phone}
                      </td>
                      <td className="px-2 py-1 border border-slate-900">
                        {application.emergencyContact.relation}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full text-center border border-collapse table-auto">
                  <caption className="px-2 py-1 font-bold border bg-slate-800 border-slate-900">
                    References
                  </caption>
                  <thead>
                    <tr className="">
                      <th className="px-2 py-1 border border-slate-900">
                        Phone
                      </th>
                      <th className="px-2 py-1 border border-slate-900">
                        Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key="index">
                      <td className="px-2 py-1 border border-slate-900">
                        {application.reference.phone}
                      </td>
                      <td className="px-2 py-1 border border-slate-900">
                        {application.reference.address}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });
};

export default Display;
