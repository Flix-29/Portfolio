export default function Footer() {
    return (
        <footer className="dark:bg-gray-800 bg-gray-300 py-6 text-center grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-4">
            <div className="">
                Designed and developed by Felix Hallerbach.
            </div>
            <div className="">
                <p>&copy; {new Date().getFullYear()} Felix Hallerbach. All Rights reserved.</p>
            </div>
        </footer>
    );
}