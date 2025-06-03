//import { features } from "../constants";

const AboutUs = () => {
  return (
    <section id="aboutus" className="pt-20  bg-bacgkround py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Nosotros</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              En Devnest Innova, somos un equipo apasionado por la tecnología y la innovación, con sede en el corazón de Colombia. Nacimos con la misión de ayudar a empresas como la tuya a alcanzar su máximo potencial a través de soluciones digitales de vanguardia.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nuestros valores fundamentales son la excelencia, la transparencia y la colaboración. Creemos en construir relaciones a largo plazo con nuestros clientes, trabajando juntos para convertir sus visiones en realidades tecnológicas exitosas.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-accent-foreground p-2 bg-primary/10 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Innovación Constante</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-accent-foreground p-2 bg-secondary/10 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-secondary"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                </svg>
                <span>Calidad Garantizada</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl backdrop-blur-lg bg-blue-background border-b border-navbar-border p-2 hover:scale-105 transition-transform">
            <img className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1596496050860-b48b170fc584" 
            alt="Equipo diverso de desarrolladores colombianos trabajando en computadoras en una oficina moderna y luminosa" />
          </div>

        </div> 
      </div>
    </section>
  );
};

export default AboutUs;