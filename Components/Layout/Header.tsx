

const Header = () => {
    return (
        <section className="max-w-6xl w-full flex flex-col space-y-4 justify-center md:my-16 my-8">
            <div>
                <h3 className="text-(--text-secondary) border border-(--border) rounded-full p-2 text-sm inline">#Open source alternatives</h3>
            </div>
            <div>
                <h1 className="text-(--text-primary) text-2xl md:text-5xl font-bold py-8 max-w-3xl leading-tight">Beyond Google: Better <span className="font-extrabold text-(--accent)">tools</span>, more privacy.</h1>
            </div>
            <div>
                <p className="text-(--text-secondary) text-sm md:text-md font-light">Take back control of your data without sacrificing productivity. Discover the best independent alternatives.</p>
            </div>
        </section>
    )
}

export default Header
