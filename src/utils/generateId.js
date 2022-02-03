export const generateUserId = (arr) => {
  if (!arr.length) return 1
  const ids = arr.map((el) => el.id)
  return Math.max(...ids) + 1
}
