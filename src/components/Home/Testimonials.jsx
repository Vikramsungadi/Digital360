export function Testimonials() {
  const testimonials = [
    {
      feedback:
        "Digital360 transformed our business with their amazing SEO strategies!",
    },
    {
      feedback: "Highly recommend their team for effective PPC campaigns!",
    },
    {
      feedback:
        "Their customer service is top-notch, always quick and helpful.",
    },
    {
      feedback: "A pleasure to work with. The results speak for themselves.",
    },
    {
      name: "Alice Green",
      feedback:
        "Innovative solutions that helped us stay ahead in the competitive market.",
    },
    {
      feedback:
        "Extremely satisfied with the results. Will work with them again!",
    },
    {
      name: "Michael Johnson",
      feedback:
        "A game-changer for our digital marketing strategies. Highly recommend.",
    },
    {
      feedback: "Professional, reliable, and always on time. A great partner.",
    },
    {
      feedback:
        "Their team really listens to our needs and delivers exactly what we want.",
    },
  ];

  return (
    <div className="py-16 max-md:pb-0">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg border ${
                index > 3 ? "max-md:hidden" : ""
              }`}
            >
              <p className="italic text-gray-600">
                &quot;{testimonial.feedback}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
