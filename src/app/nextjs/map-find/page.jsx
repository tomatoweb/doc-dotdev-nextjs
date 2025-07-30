import CodeBlock from '@/app/components/CodeBlock'

const text = `// src/app/api/users.js

// Fake users for demo/dev
export const users = [
  {
    id: 1,
    username: 'johndoe',
    password: 'admin',
    name: 'John Doe',
    email: 'john.doe@info.info',
    picture: 'avatar.png'
  },
  {
    id: 2,
    username: 'jacksparrow',
    password: 'guest',
    name: 'Jack Sparrow',
    email: 'jack.sparrow@biz.biz',
    picture: 'jacksparrow.png'
  },
]`;

const text1 =`import { users } from '@/app/api/users'

const Sandbox = () => {

    const user = users.find(u => u.username === 'johndoe' && u.password ===  'admin')
    
    const { password: _, ...rest } = user

    console.log(_)
    console.log(rest)

    return (
      <main className="flex flex-col p-4 bg-gray-900">    
        {users.map((u) => (
          <span key={u.id}>{u.name}</span>
          )      
        )}   
      </main>
    )
}

export default Sandbox`;

const FindMap = () => {
  return (
    <>
      <CodeBlock text={text} />
      <CodeBlock text={text1} />
    </>
  )
}

export default FindMap