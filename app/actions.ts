'use server'

import { redirect } from 'next/navigation'

export async function refreshHistory(path: string) {
  redirect(path)
}
