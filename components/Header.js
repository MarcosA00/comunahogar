import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
        <nav>
          <Link
            href="/"
            className="flex items-center gap-5 justify-between"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6 collapse md:visible" />
            <span className="text-sm font-medium hover:text-md">Inicio</span>
          </Link>
        </nav>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="quienes-somos"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            ¿Quiénes somos?
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Events
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Get Involved
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
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
