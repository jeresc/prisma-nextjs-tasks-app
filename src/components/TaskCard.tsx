'use client'
import React from 'react'
import { Task } from '@prisma/client'
import { useRouter } from 'next/navigation'

interface Props {
  task: Task
}

export function TaskCard({ task }: Props) {
  const router = useRouter()

  return (
    <div
      className="bg-gray-900 p-3 rounded-md hover:bg-gray-800 cursor-pointer duration-200"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <h3 className="font-bold text-xl">{task.title}</h3>
      <p className="text-slate-300">{task?.description}</p>
    </div>
  )
}
