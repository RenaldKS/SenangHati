export default function Maps() {
  return (
    <>
      <section
        id="location"
        className="flex flex-col md:flex-row justify-center gap-8 px-6 py-12 mx-auto items-center max-w-7xl relative container "
      >
        <div>
          <h1 className="font-bold text-3xl px-2">Our Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.384426106504!2d105.29300657590507!3d-5.358170653635742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5b5eb8c2a43%3A0x89c112d2893d68a3!2sKontrakan%20Senang%20Hati!5e0!3m2!1sid!2sid!4v1775992758341!5m2!1sid!2sid"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
