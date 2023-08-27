'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function NewFormPage({ params }: { params: { taskId: string } }) {
  const { handleSubmit, register, setValue } = useForm()
  const router = useRouter()

  useEffect(() => {
    if (params.taskId) {
      axios.get(`/api/tasks/${params.taskId}`).then((res) => {
        setValue('title', res.data.result.title)
        setValue('description', res.data.result.description)
      })
    }
  }, [params.taskId, setValue])

  const goHome = () => {
    router.push('/')
    router.refresh()
  }

  const onSubmit = handleSubmit(async (data) => {
    if (params.taskId) await axios.put(`/api/tasks/${params.taskId}`, data)
    else await axios.post('/api/tasks', data)
    goHome()
  })

  return (
    <section className="h-[calc(100vh-72px)] flex justify-center items-center">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <h1 className="font-bold text-3xl">
          {params.taskId ? 'Edit' : 'Create'} Task
        </h1>
        <label htmlFor="title" className="font-bold text-sm">
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
        <label htmlFor="description" className="font-bold text-sm">
          Write your description:
        </label>
        <textarea
          id="description"
          placeholder="Write a description"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none
          focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-black mb-2"
          {...register('description')}
        ></textarea>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-cyan-500 px-3 py-1 rounded-md shadow-md shadow-cyan-500/50
          active:translate-y-[1px] active:scale-[0.98] duration-300 font-bold w-full"
          >
            {params.taskId ? 'Edit' : 'Create'}
          </button>
          {params.taskId && (
            <button
              type="button"
              className="bg-red-500 px-3 py-1 rounded-md shadow-md shadow-red-500/50
          active:translate-y-[1px] active:scale-[0.98] duration-300 font-bold w-full"
              onClick={async () => {
                if (confirm('Are you sure you want to delete this task?')) {
                  await axios.delete(`/api/tasks/${params.taskId}`)
                  goHome()
                }
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </section>
  )
}

export default NewFormPage
