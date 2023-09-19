import ResponseItem from "@/components/ResponseItem";
import Responses from "@/components/Responses";
import { createResponses, faker } from "@/features/responses/createResponse";

export default function ResponsePage(){
    const responses = Array.from(createResponses({count: 10, faker}).values())

    //return <Responses />
    return (
        <Responses>
            {responses.map((response) => (
            <ResponseItem key={response.id} {...response} />
            ))}
        </Responses>
    );
}