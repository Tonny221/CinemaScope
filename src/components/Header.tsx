import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-center md:justify-between px-16 py-4 bg-primary">
        <nav className="md:flex gap-4 hidden">
            <Link href={'/'} className="text-secondary hover:underline">Home</Link>
            <Link href={'/movies'} className="text-secondary hover:underline">Movies</Link>
        </nav>
        <div className="hidden md:block">
            something here
        </div>
    </header>
  )
}

export default Header