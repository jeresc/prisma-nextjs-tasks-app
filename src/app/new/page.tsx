'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function NewForm() {
  const { handleSubmit, register } = useForm()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const res = await axios.post('/api/tasks', data)
    console.log(res.data)
    router.push('/')
  })

  return (
    <section className="h-screen flex justify-center items-center">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-xs">
          Write your title:
        </label>
        <input
          id="title"
          type="text"
          placeholder="Write a title"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none
          focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black mb-2"
          {...register('title')}
        />
        <label htmlFor="description" className="font-bold text-xs">
          Write your description:
        </label>
        <textarea
          id="description"
          placeholder="Write a description"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none
          focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black"
          {...register('description')}
        ></textarea>
        <button
          className="bg-cyan-500 px-3 py-1 rounded-md shadow-md shadow-cyan-500/50
          active:translate-y-[1px] active:scale-[0.98] duration-300 font-bold"
        >
          Create
        </button>
      </form>
    </section>
  )
}

export default NewForm
