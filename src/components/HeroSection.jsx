const HeroSection = () => {
  return (
    <section className=" mx-auto px-6 md:min-h-[calc(100vh-7rem)] flex flex-col items-center pt-6 lg:pt-20 bg-gradient-to-br from-background via-slate-900 to-purple-900/30 ">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-20 w-20 md:h-28 md:w-28 text-primary stroke-[1.5]"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" x2="2" y1="8" y2="22"></line><line x1="17.5" x2="9" y1="15" y2="15"></line>
        </svg>
      </div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide 
        bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-bold">
        Devnest Innova
      </h1>
      <p className="mt-10 text-lg text-center text-muted-foreground max-w-4xl md:text-xl">
        Transformamos ideas en soluciones tecnológicas innovadoras. Aplicaciones, software a medida y webs que impulsan tu negocio!
      </p>
      <div className="flex flex-col gap-y-5 justify-center my-10 sm:flex-row">
        <a
          href="#contact"
          className="text-primary-foreground bg-gradient-to-r from-primary to-secondary py-3 px-4 mx-3 rounded-md hover:opacity-90 hover:scale-105
            transition-transform duration-300 text-center"
        >
          Contactanos
        </a>
        <a href="#ourservices" className="py-3 px-4 mx-3 rounded-md border text-primary bg-bacgkround hover:bg-primary/20 hover:opacity-90 hover:scale-105
            transition-transform duration-300 text-center">
          Nuestros Servicios
        </a>
      </div>
      
    </section>
  );
};

export default HeroSection;