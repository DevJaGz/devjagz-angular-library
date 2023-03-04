export function uniqId(prefix: string = ''): string {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return prefix + Math.random().toString(36).slice(2, 9);
}
