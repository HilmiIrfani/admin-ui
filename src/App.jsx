import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row justify-between items-center">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <hr />

        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src="https://www.placehold.co/200x200"
              alt="Gambar Galeri"
              className="h-48 w-48 object-cover mx-auto"
            />
          ))}
        </div>

        <hr />

        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-200 p-6 rounded">
            <p className="font-semibold">Basic</p>
            <p>Rp 50.000</p>
          </div>
          <div className="bg-blue-200 p-6 rounded hadow-lg scale-105">
            <p className="font-semibold">Pro</p>
            <p>Rp 100.000</p>
          </div>
          <div className="bg-gray-200 p-6 rounded">
            <p className="font-semibold">Premium</p>
            <p>Rp 200.000</p>
          </div>
        </div>

        <hr />

        {/* LATIHAN 4 - RESPONSIVE GRID LAYOUT */}
        <div className="p-4">
          <p className="font-semibold mb-2">LATIHAN 4</p>

          <div className="grid grid-cols-12 gap-2 min-h-screen">
            {/* Header */}
            <div className="bg-gray-300 p-4 col-span-12">Header</div>

            {/* Sidebar */}
            <div className="bg-gray-300 p-4 col-span-12 md:col-span-3">Sidebar</div>

            {/* Content */}
            <div className="bg-white border p-4 col-span-12 md:col-span-9">Content</div>

            {/* Footer */}
            <div className="bg-gray-300 p-4 col-span-12">Footer</div>
          </div>
        </div>


        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border flex items-center gap-4">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 object-cover"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">
              Deskripsi produk singkat...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
