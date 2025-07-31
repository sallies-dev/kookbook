"use server"
import { auth } from '@/auth'
import RecipeComponent from '@/components/RecipeComponent'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <RecipeComponent session={session} />
    </main>
  )
}

export default page
