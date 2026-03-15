function Footer() {
  return (
    <footer id="apropos" className="bg-white text-gray-700 border-t border-gray-200 px-4 py-10 md:px-8" role="contentinfo">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between max-w-6xl mx-auto">
        <div className="md:w-1/3">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-[var(--primary-green)] p-1.5 text-white shrink-0">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M19.1667 2.22222H15.5556V0.833333C15.5556 0.371528 15.184 0 14.7222 0H5.27778C4.81597 0 4.44444 0.371528 4.44444 0.833333V2.22222H0.833333C0.371528 2.22222 0 2.59375 0 3.05556V5C0 6.23958 0.78125 7.51389 2.14931 8.49653C3.24306 9.28472 4.57292 9.78472 5.96875 9.94444C7.05903 11.7535 8.33333 12.5 8.33333 12.5V15H6.66667C5.44097 15 4.44444 15.7188 4.44444 16.9444V17.3611C4.44444 17.5903 4.63194 17.7778 4.86111 17.7778H15.1389C15.3681 17.7778 15.5556 17.5903 15.5556 17.3611V16.9444C15.5556 15.7188 14.559 15 13.3333 15H11.6667V12.5C11.6667 12.5 12.941 11.7535 14.0313 9.94444C15.4306 9.78472 16.7604 9.28472 17.8507 8.49653C19.2153 7.51389 20 6.23958 20 5V3.05556C20 2.59375 19.6285 2.22222 19.1667 2.22222ZM3.44792 6.69444C2.60069 6.08333 2.22222 5.40278 2.22222 5V4.44444H4.45139C4.48611 5.57639 4.65278 6.56944 4.89583 7.4375C4.37153 7.25694 3.88194 7.00694 3.44792 6.69444ZM17.7778 5C17.7778 5.55903 17.1632 6.25347 16.5521 6.69444C16.1181 7.00694 15.625 7.25694 15.1007 7.4375C15.3438 6.56944 15.5104 5.57639 15.5451 4.44444H17.7778V5Z"
                />
              </svg>
            </div>
            <p className="flex font-bold text-lg">
              <span className="text-red-500">You</span>
              <span className="text-gray-900">can</span>
              <span className="text-green-600">win</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Plateforme de jeux digitaux pour engager vos communautés autour du
              football. Un service d&apos;Agency Africa.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <a href="#" className="footer-social-link" aria-label="Facebook">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#E2E8F0" />
                <path d="M19.7231 17L20.1675 14.1044H17.3891V12.2253C17.3891 11.4331 17.7772 10.6609 19.0216 10.6609H20.2847V8.19563C20.2847 8.19563 19.1384 8 18.0425 8C15.7544 8 14.2587 9.38688 14.2587 11.8975V14.1044H11.7153V17H14.2587V24H17.3891V17H19.7231Z" fill="#475569" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="X (Twitter)">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#E2E8F0" />
                <path d="M20.1625 9.5H22.3687L17.55 15.0062L23.2187 22.5H18.7812L15.3031 17.9563L11.3281 22.5H9.11874L14.2719 16.6094L8.83749 9.5H13.3875L16.5281 13.6531L20.1625 9.5ZM19.3875 21.1812H20.6094L12.7219 10.75H11.4094L19.3875 21.1812Z" fill="#475569" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#E2E8F0" />
                <path d="M16.0031 12.4063C14.0156 12.4063 12.4125 14.0095 12.4125 15.997C12.4125 17.9845 14.0156 19.5876 16.0031 19.5876C17.9906 19.5876 19.5937 17.9845 19.5937 15.997C19.5937 14.0095 17.9906 12.4063 16.0031 12.4063ZM16.0031 18.3313C14.7187 18.3313 13.6687 17.2845 13.6687 15.997C13.6687 14.7095 14.7156 13.6626 16.0031 13.6626C17.2906 13.6626 18.3375 14.7095 18.3375 15.997C18.3375 17.2845 17.2875 18.3313 16.0031 18.3313ZM20.5781 12.2595C20.5781 12.7251 20.2031 13.097 19.7406 13.097C19.275 13.097 18.9031 12.722 18.9031 12.2595C18.9031 11.797 19.2781 11.422 19.7406 11.422C20.2031 11.422 20.5781 11.797 20.5781 12.2595ZM22.9562 13.1095C22.9031 11.9876 22.6469 10.9938 21.825 10.1751C21.0062 9.35635 20.0125 9.1001 18.8906 9.04385C17.7344 8.97822 14.2687 8.97822 13.1125 9.04385C11.9937 9.09697 11 9.35322 10.1781 10.172C9.35624 10.9907 9.10312 11.9845 9.04687 13.1063C8.98124 14.2626 8.98124 17.7282 9.04687 18.8845C9.09999 20.0063 9.35624 21.0001 10.1781 21.8188C11 22.6376 11.9906 22.8938 13.1125 22.9501C14.2687 23.0157 17.7344 23.0157 18.8906 22.9501C20.0125 22.897 21.0062 22.6407 21.825 21.8188C22.6437 21.0001 22.9 20.0063 22.9562 18.8845C23.0219 17.7282 23.0219 14.2657 22.9562 13.1095ZM21.4625 20.1251C21.2187 20.7376 20.7469 21.2095 20.1312 21.4563C19.2094 21.822 17.0219 21.7376 16.0031 21.7376C14.9844 21.7376 12.7937 21.8188 11.875 21.4563C11.2625 21.2126 10.7906 20.7407 10.5437 20.1251C10.1781 19.2032 10.2625 17.0157 10.2625 15.997C10.2625 14.9782 10.1812 12.7876 10.5437 11.8688C10.7875 11.2563 11.2594 10.7845 11.875 10.5376C12.7969 10.172 14.9844 10.2563 16.0031 10.2563C17.0219 10.2563 19.2125 10.1751 20.1312 10.5376C20.7437 10.7813 21.2156 11.2532 21.4625 11.8688C21.8281 12.7907 21.7437 14.9782 21.7437 15.997C21.7437 17.0157 21.8281 19.2063 21.4625 20.1251Z" fill="#475569" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#E2E8F0" />
                <path d="M12.1337 22.0002H9.23125V12.6533H12.1337V22.0002ZM10.6809 11.3783C9.75281 11.3783 9 10.6096 9 9.68143C9 9.23561 9.1771 8.80806 9.49234 8.49282C9.80757 8.17759 10.2351 8.00049 10.6809 8.00049C11.1267 8.00049 11.5543 8.17759 11.8695 8.49282C12.1848 8.80806 12.3619 9.23561 12.3619 9.68143C12.3619 10.6096 11.6088 11.3783 10.6809 11.3783ZM22.9969 22.0002H20.1006V17.4502C20.1006 16.3658 20.0787 14.9752 18.5916 14.9752C17.0825 14.9752 16.8513 16.1533 16.8513 17.3721V22.0002H13.9519V12.6533H16.7356V13.9283H16.7762C17.1637 13.1939 18.1103 12.4189 19.5225 12.4189C22.46 12.4189 23 14.3533 23 16.8658V22.0002H22.9969Z" fill="#475569" />
              </svg>
            </a>
          </div>
        </div>
        <nav className="flex flex-col gap-2 md:w-1/3" aria-label="Liens rapides" aria-labelledby="footer-liens-titre">
          <h4 className="text-sm font-semibold text-gray-900" id="footer-liens-titre">Liens rapides</h4>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li><a href="#offres" className="text-sm text-gray-600 hover:text-green-600 transition">Nos offres</a></li>
            <li><a href="#jeux" className="text-sm text-gray-600 hover:text-green-600 transition">Nos jeux</a></li>
            <li><a href="#album" className="text-sm text-gray-600 hover:text-green-600 transition">Album 2025</a></li>
            <li><a href="#apropos" className="text-sm text-gray-600 hover:text-green-600 transition">À propos</a></li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-2 md:w-1/3" aria-label="Contact et légal" aria-labelledby="footer-contact-titre">
          <h4 className="text-sm font-semibold text-gray-900" id="footer-contact-titre">Contact & légal</h4>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li className="text-sm">
              <a href="mailto:games@agency.africa" className="text-gray-600 hover:text-green-600 transition">games@agency.africa</a>
            </li>
            <li className="text-sm">
              <a href="#" className="text-gray-600 hover:text-green-600 transition">Mentions légales</a>
            </li>
            <li className="text-sm">
              <a href="#" className="text-gray-600 hover:text-green-600 transition">Protection des données (CNDP)</a>
            </li>
            <li className="text-sm">
              <a href="#" className="text-gray-600 hover:text-green-600 transition">Conditions d&apos;utilisation</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-6 sm:flex-row sm:justify-between max-w-6xl mx-auto">
        <p className="text-sm text-gray-500">© YouCanWin. Tous droits réservés.</p>
        <p className="text-sm text-gray-500">
          Un service de <span className="text-green-600">Agency.Africa</span> — games.agency.africa
        </p>
      </div>
      <div className="mt-4 max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded border border-green-500/50 bg-green-100 px-3 py-1 text-sm text-green-700">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M5.83332 8.38016L7.49998 10.0468L10.8333 6.7135M15.515 3.36683C12.8801 3.50676 10.2973 2.59567 8.33332 0.833496C6.36937 2.59567 3.78656 3.50676 1.15165 3.36683C0.939594 4.18776 0.832627 5.03229 0.833316 5.88016C0.833316 10.5393 4.01998 14.4552 8.33332 15.5652C12.6466 14.4552 15.8333 10.5402 15.8333 5.88016C15.8333 5.01183 15.7225 4.17016 15.515 3.36683Z" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Site conforme CNDP Maroc
        </span>
      </div>
    </footer>
  );
}

export default Footer;
