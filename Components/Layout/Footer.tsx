import Clock from "@/Components/ui/Clock";

export default function Footer() {
    return (
        <footer className="max-w-5xl flex justify-between items-center my-12">
            <div className="text-sm text-(--text-primary)">
                Developed by <a href="https://ilotus.dev" target="_blank" rel="noopener noreferrer" className="underline">ilotus</a>
            </div>
            <div>
                <Clock />
            </div>
        </footer>
    );
}