import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

interface Task {
  title: string
  description: string
}

interface Params {
  params: {
    taskId: string
  }
}

export async function GET(
  request: Request,
  { params: { taskId } }: Params
) {
  const task = await prisma.task.findUnique({ where: { id: Number(taskId) } })
  return NextResponse.json({
    result: task,
  })
}

export async function PUT(
  request: Request,
  { params: { taskId } }: Params
) {
  const { title, description }: Task = await request.json()
  const task = await prisma.task.update({
    where: { id: Number(taskId) },
    data: { title, description },
  })

  return NextResponse.json({
    result: task,
  })
}

export async function DELETE(
  request: Request,
  { params: { taskId } }: Params
) {
  await prisma.task.delete({ where: { id: Number(taskId) } })
  return NextResponse.json({
    result: `Task ${taskId} deleted`,
  })
}
