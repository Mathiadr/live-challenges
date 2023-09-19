import { createResponses, faker } from "@/features/responses/createResponse";
import ResponseItem from "./ResponseItem";
import { CreateResponses } from "@/features/responses/types";
import { ReactNode } from "react";

export default function Responses({children}: {children: ReactNode}) {
    const responses = Array.from(createResponses({count: 10, faker}).values())
    console.log(responses)
  return (
    <div className="relative mx-auto mt-4 max-w-2xl overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Answer
            </th>
            <th scope="col" className="px-6 py-3">
              Score
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Question
            </th>
          </tr>
        </thead>
        <tbody>
            {responses.map(response => <ResponseItem key={response.id} {...response}/>)}
            {children}
        </tbody>
      </table>
    </div>
  )
}