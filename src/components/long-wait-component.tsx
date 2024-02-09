export default async function LongWaitComponent() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
    <h1>Carregado!</h1>
  )
}