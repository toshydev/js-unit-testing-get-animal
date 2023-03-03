export function getAnimal(animal) {
  return animal === undefined
    ? "I do not like animals at all!"
    : animal === "dogs"
    ? `I like ${animal}!`
    : animal === "cats"
    ? `I totally love ${animal}!`
    : `I love ${animal}!`;
}