import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="mx-auto mt-[74px] min-h-dvh max-w-7xl rounded-lg bg-background p-10 shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Impressum</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
        <p className="">
          Mykhailo Yatsenko
          <br />
          Roedernallee 168
          <br />
          13407 Berlin
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Kontaktinformationen</h2>
        <p className="">
          <strong>E-Mail:</strong> yatsenkomike@gmail.com
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Haftungsausschluss</h2>
        <p className="">
          Der Autor übernimmt keine Gewähr für die Aktualität, Richtigkeit und
          Vollständigkeit der bereitgestellten Informationen auf dieser Website.
          Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller
          oder ideeller Art beziehen, sind ausgeschlossen.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold">Urheberrecht</h2>
        <p className="">
          Die durch den Autor erstellten Inhalte und Werke auf dieser Website
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors.
        </p>
      </section>
    </div>
  );
};

export default Impressum;
