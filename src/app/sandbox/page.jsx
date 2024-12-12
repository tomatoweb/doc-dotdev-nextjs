
const getData = async () => {

  const res = await fetch("http://localhost:3000/api/users")

  if (!res.ok) {
    throw new Error('Failed to fetch permissions data')
  }
   
  return res.json()
}

const SandboxApi = async () => {

  const data = await getData()

  return (
    <main className="flex flex-col p-4 bg-gray-800">
      <ul>
        {
          data.map(d => (
            <li key={d.id}>{d.title}</li>
          ))
        }
      </ul>
    </main>
  )
}

export default SandboxApi