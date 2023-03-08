import { type NextPage } from "next";
import React from "react";

const Impressum: NextPage = () => {
  return (
    <div>
      <h1>Impressum</h1>
      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Domenic Walther
        <br />
        Weinbergweg 5 <br />
        97280 Remlingen
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 0174 - 7196160 <br />
        Email: domenic.walther@gmx.de
      </p>

      <p>
        Quelle:{" "}
        <a href="https://www.e-recht24.de/impressum-generator.html">
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </div>
  );
};

export default Impressum;
