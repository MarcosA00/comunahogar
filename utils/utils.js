const endTime = new Date(2024, 8, 29, 12, 0 , 0).getTime()

export const timeLeft = () => {
  const now = new Date

  const remainingTime = endTime - now.getTime()

  const secons = Math.floor((remainingTime / 1000) % 60)
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60)
  const hours = Math.floor((remainingTime / (1000 * 60 *60)) % 24)
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))

  return { secons, minutes, hours, days }
}
