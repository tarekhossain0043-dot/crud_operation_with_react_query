import React from "react";
import { studentData, tableHead } from "../assets/assets";

export default function StudentDetails() {
  return (
    <div className="border-t border-slate-200">
      <table>
        <thead className="flex items-center justify-center gap-10 py-5">
          {tableHead.map((thead, index) => (
            <th key={index} className="text-gray-500 text-3 font-medium">
              {thead.label}
            </th>
          ))}
        </thead>
        <tbody>
          {studentData.map((student, index) => {
            return (
              <tr key={index} className="flex items-center">
                <td>{student.img}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.enroll_num}</td>
                <td>{student.admissionData}</td>
                <td>{student.icons}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
