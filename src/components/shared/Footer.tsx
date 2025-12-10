export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden pt-12 pb-10 ">
      {/* Background Layer */}

      <div>
        <div className="border-b">
          <div className="py-5">
            <h4 className="text-center">Use Full Links</h4>
            <div className="text-center flex gap-2 md:gap-5 justify-center items-center py-5">
              <a
                target="_blank"
                href="https://www.w3schools.com/"
                className="text-sm"
              >
                W3 School
              </a>
              <a target="_blank" href="https://developer.mozilla.org/en-US/">
                MDN
              </a>
              <a
                target="_blank"
                href="https://stackoverflow.com/"
                className="text-sm"
              >
                Stack Overflow
              </a>
              <a
                target="_blank"
                href="https://www.wikipedia.org/"
                className="text-sm"
              >
                Wikipedia
              </a>
              <a
                target="_blank"
                href="https://bn.quora.com/"
                className="text-sm"
              >
                Quora
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
          <div className="text-sm text-gray-400">
            © {currentYear} Md. Raju Molla All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
