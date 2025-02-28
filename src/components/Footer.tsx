export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center flex justify-center items-center gap-4">
            <div className="col-span-1 col-start-2">
                Designed and developed by Felix Hallerbach.
            </div>
            <div className="col-span-1 col-start-3">
                <p>&copy; {new Date().getFullYear()} Felix Hallerbach. All Rights reserved.</p>
            </div>
        </footer>
    );
}