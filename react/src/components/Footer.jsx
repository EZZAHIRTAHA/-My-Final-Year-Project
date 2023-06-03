import React from 'react'



const Footer = () => {
  return (
    <footer className="bg-black sticky mx-10  scale-up-center mt-10 border-[1px] mb-2 p-5 rounded-lg">
    <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
            <ul className="text-gray-300">
                <li className="mb-4">
                    <a className=" hover:underline" href="/">Home</a>
                </li>
                <li className="mb-4">
                    <a href="#about" className=" hover:underline">About</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
            <ul className="text-gray-300">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="py-6 px-4 bg-gray-950 md:flex md:items-center rounded-md mb-3 md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center">© 2022 Food Delivery. All Rights Reserved.
        </span>
    </div>
</footer>
  )
}

export default Footer
