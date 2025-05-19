export default function TelegramButton() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        <span className="absolute inset-0 rounded-full bg-[rgb(242,101,34)] opacity-40 animate-ping"></span>
        <span className="absolute inset-0 rounded-full bg-[rgb(242,101,34)] opacity-20 animate-ping delay-150"></span>

        <a
          href="https://t.me/hojiakbar_turatov"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[rgb(242,101,34)] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-7 md:h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.993 15.447l-.396 4.222c.568 0 .814-.244 1.115-.537l2.671-2.525 5.538 4.045c1.015.558 1.74.265 1.993-.938L23.99 4.296c.309-1.353-.478-1.88-1.377-1.55L1.615 10.254c-1.305.508-1.29 1.219-.223 1.544l5.884 1.837 13.646-8.593c.643-.397 1.228-.18.745.253l-11.674 10.152z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
