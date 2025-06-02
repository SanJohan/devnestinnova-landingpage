const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide 
        bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-bold">
        Devnest Innova
      </h1>
      <p className="mt-10 text-lg text-center text-muted-foreground max-w-4xl md:text-xl">
        Transformamos ideas en soluciones tecnológicas innovadoras. Aplicaciones, software a medida y webs que impulsan tu negocio!
      </p>
      <div className="flex flex-col gap-y-5 justify-center my-10 sm:flex-row">
        <a
          href="#"
          className="bg-gradient-to-r from-primary to-secondary py-3 px-4 mx-3 rounded-md hover:opacity-90 hover:scale-105
            transition-transform duration-300"
        >
          Contactanos
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border text-primary hover:bg-primary/20 hover:opacity-90 hover:scale-105
            transition-transform duration-300">
          Nuestros Servicios
        </a>
      </div>
      
    </div>
  );
};

export default HeroSection;