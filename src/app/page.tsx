import { TaskCard } from '@/components'
import { prisma } from '@/libs/prisma'
import Link from 'next/link'

async function loadTasks() {
  return await prisma.task.findMany()
}

export const dynamic = 'force-dynamic'

async function HomePage() {
  const tasks = await loadTasks()

  return (
    <section>
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
