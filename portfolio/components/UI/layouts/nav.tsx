import Link from "next/link";
function Nav() {

  const links = [
    {
      id:1,
      name: "about",
      link: "/about"
    },
    {
      id:2,
      name: "works",
      link: "/works"
    },
    {
      id:3,
      name: "contact",
      link: "/contact"
    },
  ]

  return (
    <>
       <nav className="flex justify-between px-[50px] py-8 uppercase items-center bg-gray-500">
        <h4 className="font-extrabold text-2xl">ted</h4>
        <div>
          <ul className="flex gap-5 font-semibold">
            {
              links.map(goto => (
                <li key={goto.id}>
                  <Link href={goto.link} title={goto.name} >{goto.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
       </nav> 
    </>
  )
}

export default Nav;