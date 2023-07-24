
import Image from 'next/image'
import { Navbar, Calendar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Calendar/>
    </main>
  )
}
