import cm from "../../assets/cm.jpg";
import dm from "../../assets/dm.jpg";
import ppc from "../../assets/ppc.jpg";
import smm from "../../assets/smm.jpg";
export default function Services() {
  const services = [
    {
      title: "SEO Optimization",
      image: dm, // Image for SEO Optimization
      description:
        "Improve your search engine rankings and attract organic traffic.",
    },
    {
      title: "PPC Advertising",
      image: ppc, // Image for PPC Advertising
      description: "Drive traffic and sales with pay-per-click campaigns.",
    },
    {
      title: "Content Marketing",
      image: cm, // Image for Content Marketing
      description: "Engage your audience with high-quality, relevant content.",
    },
    {
      title: "Social Media Marketing",
      image: smm, // Image for Social Media Marketing
      description: "Grow your brand's presence on social platforms.",
    },
  ];

  return (
    <div id="services" className="container mx-auto py-16 px-8 max-md:pb-0">
      <h2 className="text-4xl font-bold text-black text-center mb-8">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white flex md:flex-row flex-col p-3 rounded-lg shadow-sm border hover:border-gray-300 border-gray-200 transition-colors md:border-transparent  text-center"
          >
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="max-h-32 md:max-h-60 size-full aspect-square object-cover mx-auto"
              />
            </div>
            <div className="flex flex-col gap-2 text-left ml-4 mt-4">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
