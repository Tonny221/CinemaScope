import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between px-16 py-4 bg-emerald-600">
        <nav className="flex gap-4">
            <Link href={'/'}>Home</Link>
            <Link href={'/movies'}>Movies</Link>
        </nav>
        <div>
            something here
        </div>
    </header>
  )
}

export default Header