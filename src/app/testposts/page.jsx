
export default function FormClient() {
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div>
        <div>Contact Us</div>
      </div>
      <div>
        <form action="/api/add-post" className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="title"
              name="title"
              type="title"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              content
            </label>
            <input
              id="content"
              name="content"
              type="content"
              required
              className="w-full"
            />
          </div>
          <button type="submit" className="w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}