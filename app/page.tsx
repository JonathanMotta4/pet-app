import { ContactCard } from '@/components/contact-card'
import { HistoryCard } from '@/components/history-card'
import { SpecialtiesCard } from '@/components/specialties-card'
export default function Home() {
  return (
    <div className='flex flex-col gap-y-2 py-2 w-full'>
      <HistoryCard />

    </div>
  )
}
