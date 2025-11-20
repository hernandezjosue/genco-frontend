export function Services() {
  const services = [
    {
      number: "01",
      title: "Estrategia Operacional",
      description:
        "Desarrollamos estrategias integrales que optimizan procesos y maximizan la eficiencia operacional en toda la organización.",
    },
    {
      number: "02",
      title: "Transformación Digital",
      description:
        "Implementamos soluciones tecnológicas que modernizan operaciones y crean ventajas competitivas sostenibles.",
    },
    {
      number: "03",
      title: "Cadena de Suministro",
      description:
        "Optimizamos redes de suministro globales para mejorar la resiliencia, reducir costos y aumentar la agilidad.",
    },
    {
      number: "04",
      title: "Gestión del Cambio",
      description:
        "Facilitamos transformaciones organizacionales exitosas mediante metodologías probadas y liderazgo estratégico.",
    },
  ]

  return (
    <section id="servicios" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance mb-6">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Soluciones especializadas diseñadas para impulsar el crecimiento y la transformación sostenible de su
            organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service) => (
            <div key={service.number} className="group">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-serif text-primary/20 group-hover:text-primary/40 transition-colors">
                  {service.number}
                </span>
                <div className="space-y-4 pt-2">
                  <h3 className="text-2xl font-serif">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
