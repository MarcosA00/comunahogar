import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: '/quienes-somos', text: '¿Quiénes somos?' },
  { path: '/recursos', text: 'Recursos' },
  { path: '/blog', text: 'Blog' },
  { path: '/galeria', text: 'Galería' },
  { path: '/contacto', text: 'Contacto' }
]

export default function Header() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14">
        <nav className="flex bg-opacity-30 p-2 m-2 gap-2 rounded">
          <Link
            href="/"
            className="flex items-center gap-5 justify-between"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6 collapse md:visible" />
            <span className="text-sm font-medium hover:text-md">Inicio</span>
          </Link>

          <div className="flex flex-1"></div>

      {
        navItems.map( navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ) )
      }
        </nav>
      </header>
    </>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
