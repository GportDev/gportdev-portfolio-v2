import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='mx-auto flex min-h-[70vh] max-w-[1200px] flex-col items-center justify-center px-4 pt-24 text-center'>
      <p className='font-mono text-sm text-green'>
        <span className='text-faint'>~ $</span> cd ./this-page
      </p>
      <h1 className='mt-4 text-6xl font-bold sm:text-8xl'>404</h1>
      <p className='mt-4 text-muted'>
        No such file or directory. Even pilots miss a runway sometimes.
      </p>
      <Link
        href='/'
        className='press mt-10 rounded-xl bg-green px-5 py-3 font-semibold text-ink hover:bg-green-light'
      >
        Back to home
      </Link>
    </main>
  )
}
