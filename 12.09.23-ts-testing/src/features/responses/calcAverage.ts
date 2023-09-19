import { Response } from "./types"

  
export function calcAverageScore(responses: Map<String, Response>) {
  const averages = new Map()
  const arrayResponses = Array.from(responses.values())
  for (const response of arrayResponses) {
    if(averages.has(response.category)){
      averages.get(response.category).sum += response.score
      averages.get(response.category).count++
      averages.get(response.category).average = (averages.get(response.category).sum/averages.get(response.category).count)
    } else {
      averages.set(response.category,{ sum: response.score, count: 1, averages: response.score})
    }
    
    
  }
  
  const test = ["one", {sum: 1}]
  console.log(test["one"])
  return averages
}

export function calcAverageScoreByKey(responses: Map<String, Response>, key: String) {
  return
}
