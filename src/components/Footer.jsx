

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-bold mb-2">Kontakta oss</h1>
        <p className="mb-4">Email: info@nyhetssida.se | Telefon: 012-3456789</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
        <p className="mt-4 text-gray-500">&copy; 2025 Nyhetssida. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}

export default Footer;