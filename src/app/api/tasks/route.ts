import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET() {
  const tasks = await prisma.task.findMany()
  return NextResponse.json({
    result: tasks,
  })
}

interface Task {
  title: string
  description: string
}

export async function POST(request: Request) {
  const { title, description }: Task = await request.json()
  const task = await prisma.task.create({ data: { title, description } })
  return NextResponse.json({ result: task })
}
