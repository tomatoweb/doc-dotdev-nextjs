'use client'
import { toast, Toaster } from 'sonner'  // npm install sonner
import { createPost } from "@/actions/actions"
import { useRef } from "react"

const Form = () => {

	const ref = useRef(null)

	return (
		<>
			<Toaster />

			{/* IMPORTANT !
        Server Actions need next.config.mjs experimental allowedOrigins:              
              const nextConfig = {
                experimental: {
                  serverActions: {
                    allowedOrigins: ['doc.dotdev.be'],
                  },
                },
              };
      */}

			<form
				ref={ref}
				action={ async (formData) => {
					ref.current?.reset()
					const error = await createPost(formData)
					if (error) {
						toast.error('Server action error:' + error, { className: "bg-red-200", duration: 10000 });
					} else {
						toast.success('Post created!', { className: "bg-blue-500", duration: 10000 })
					}
				}}
				className="flex flex-col gap-y-2 w-[300px]"
			>
				<input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
				<textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
				<button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
			</form>
		</>
	)
}

export default Form