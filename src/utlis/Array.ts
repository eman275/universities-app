import { UniversityInterface } from "../@types";

// Function to insert data into objects
export default function insertImageData(
  objects: UniversityInterface[] | undefined,
  strings: string[],
  key: string
): UniversityInterface[] {
  const commonLength = Math.min(objects?.length || 0, strings.length);

  return Array.from({ length: commonLength }, (_, index) => {
    const newObject: any = { ...(objects && objects[index]) };
    newObject[key] = strings[index];

    // Handle the 'domains' property type explicitly
    newObject.domains = (newObject.domains as string[]) || [];

    return newObject;
  });
}
