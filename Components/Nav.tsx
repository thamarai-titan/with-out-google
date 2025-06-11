export function Nav(){
    return (
        <nav className="flex justify-between items-center p-5 font-mono border-b-[1px] border-[#333333]">
            <div className="font-medium border-x-[0.1px] text-white">
                with-out-google
            </div>
            <button className="font-light p-2 bg-[#2b2b2b] text-[#F7F7F7] text-sm rounded hover:bg-[#D65A31] hover:text-white hover:translate-x-0.5 border-[#646363] border-[0.1px]">ADD MORE</button>
        </nav>
    )
}