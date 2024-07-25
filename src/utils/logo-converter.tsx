import DM from '@/components/UI/Logos/DM'
import SpheraAcademy from '@/components/UI/Logos/SpheraAcademy'

export const logoConverter = (company: string) => {
  switch (company) {
    case 'Sphera Academy':
      return <SpheraAcademy width={64} height={64} />
    case 'DM':
      return <DM width={64} height={64} />
    default:
      return <div />
  }
}
