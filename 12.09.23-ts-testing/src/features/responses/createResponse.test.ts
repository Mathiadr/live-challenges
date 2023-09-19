import { createResponses, getRandomId } from "./createResponse"
import { Faker } from "./types"

// TODO: Not implemented
const fakerMock: Faker = {
  id: getRandomId,
  answer: () => "answer",
  score: () => 3,
  category: () => "one",
}

describe.only("Create responses", () => {
  it("should create response", () => {
    const responses = createResponses({ count: 10, faker: fakerMock})
    expect(responses.size).toBe(10)
  })
  it("should have correct data", () => {
    const responses = createResponses({ count: 10, faker: fakerMock})
    const firstResponse = Array.from(responses.values())[0]
    expect(firstResponse.answer).toBe("answer")
    expect(firstResponse.score).toBe(3)
    expect(firstResponse.category).toBe("one")
  })
  it("should add to existing list", () => {
    const firstProduct = {
      id: "response-initial",
      questionId: "1",
      answer: "answer",
      score: 3,
      category: "Initial",
    }
    const products = createResponses({ count: 10, faker: fakerMock})
    products.set(`response-${products.size}`, firstProduct)
    expect(firstProduct.answer).toBe("answer")
    expect(firstProduct.category).toBe("Initial")
    expect(firstProduct.id).toBe("response-initial")
    expect(products.size).toBe(11)
  })
  it("should fail if no responses can be added", () => {
    expect(() => createResponses({count: 0, faker: fakerMock,}),).toThrowError("No response added")
  })
})
