const certificates = [
  {
    image: "/certificates/c2.jpeg",
  },
  {
    image: "/certificates/c3.jpeg",
  },
  {
    image: "/certificates/c4.jpeg",
  },
  {
    image: "/certificates/c5.jpeg",
  },
  {
    image: "/certificates/c6.jpeg",
  },
  {
    image: "/certificates/c1.jpeg",
  },
];

function Certificates() {
  return (
    <section id="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img
              src={cert.image}
              alt={`Certificate ${index + 1}`}
              className="cert-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
