import DM from '@/components/UI/Logos/DM'
import SpheraAcademy from '@/components/UI/Logos/SpheraAcademy'
import TTU from '@/components/UI/Logos/TTU'

export const logoConverter = (company: string) => {
  switch (company) {
    case 'Sphera Academy':
      return <SpheraAcademy width={64} height={64} />
    case 'DM':
      return <DM width={64} height={64} />
    case 'TTU':
      return <TTU width={64} height={64} />
    default:
      return <div />
  }
}
