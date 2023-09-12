import { number } from "zod"
import { CreateResponses, Faker } from "./types"

const fakeAnswers: string[] = [
  "GlitterGlo Lipstick",
  "QuantumQuench Energy Drink",
  "StellarScent Perfume",
  "PurrfectPillow Pet Bed",
]

const fakeScores: number[] = [3, 2, 1]

const fakeCategories: string[] = ["Math", "Code", "Science"]

const getRandomItem = <T>(items: T[]) => {
  return items[Math.floor(Math.random() * items.length)]
}

export const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

// TODO: Oppgave 1 - Not implemented
export const faker: Faker = {
  id: () => getRandomId(),
  answer: () => getRandomItem(fakeAnswers),
  score: () => getRandomItem(fakeScores),
  category: () => getRandomItem(fakeCategories),
}

// TODO: Oppgave 1 - Not implemented
const createResponses: CreateResponses = ({
  existingResponses,
  count,
  faker,
}) => {
  const responses = new Map(existingResponses)
  if(responses.size === 0 && count === 0) throw new Error("No response added")
  for (let i = 0; i < count; i++) {
    const response = {
      id: faker.id(),
      questionId: "1",
      score: faker.score(),
      category: faker.category(),
      answer: faker.answer()
    }
    responses.set(`response-1${i}`, response)
  }
  return responses
}

// TODO: Oppgave 3 - Not implemented
const calcAverageScore = (responses: Map<string, Response>) => {
  return 0
}

export { createResponses }
