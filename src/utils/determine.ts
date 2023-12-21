export async function determine<T> (pyObject?: any): Promise<T | undefined> {
  const ref = await pyObject;
  if (ref) {
    return await ref.valueOf();
  }
}