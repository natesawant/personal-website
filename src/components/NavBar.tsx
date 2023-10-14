import Link from "next/link";

export default function NavBar() {
  const navLinks = [
    {
      title: "Home",
      id: "/",
    },
    {
      title: "Projects",
      id: "/projects",
    },
    {
      title: "Contact",
      id: "/contact",
    },
  ];

  return (
    <nav className="w-full flex p-8 justify-between items-center navbar">
      <div className="text-3xl text-primary hover:text-accent-700">
        <Link href="/">swnt.io</Link>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-primary w-24 hover:text-accent-700`}
          >
            <Link href={`${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
