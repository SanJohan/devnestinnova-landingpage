
const Footer = () => {
  return (
    <div id="footer" className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-20  text-center">
        <div className="flex justify-center items-center space-x-3 mb-6">
          <span class="text-xl font-semibold font-heading gradient-text">Devnest Innova</span>
        </div>
        <p class="text-muted-foreground text-sm mb-6">Innovación y tecnología para un futuro digital brillante.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/devnest_innova/?igsh=YXk2N292cmxjaDRp#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=573103825418&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </a>
          <a href="https://www.linkedin.com/in/jorge-alexander-urrea-calderon-33477b308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.facebook.com/devnestinnova" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>

        </div>
        <p class="text-xs text-muted-foreground/70">
            © 2025 Devnest Innova. Todos los derechos reservados. 
            <br/>
            Hecho con ❤️ en Colombia.
        </p>      
      </div>
    </div>
  );
};

export default Footer;