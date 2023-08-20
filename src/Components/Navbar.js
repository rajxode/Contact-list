

const Navbar = () => {

    return(
        <div className="bg-indigo-500 h-[50px] flex justify-between md:justify-center items-center px-1">
            <h1 className="text-white text-lg">Contact List</h1>
            <button className="bg-green-300 rounded p-[2px] md:hidden">
                Add Contact
            </button>
        </div>
    )
}

export default Navbar;