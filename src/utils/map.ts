export async function map<T> (pyObjects: any[] = [], callback: (...args: any[]) => Promise<T>): Promise<T[]> {
  const results: T[] = [];
  for await (const pyObject of pyObjects) {
    const response: T = await callback(pyObject);
    results.push(response);
  }
  return results;
}