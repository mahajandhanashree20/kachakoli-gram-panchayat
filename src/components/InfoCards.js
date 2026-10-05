import React from "react";

function InfoCards() {
  const information = [
    {
      icon: "🌍",
      number: "७१९ ",
      title: "क्षेत्रफळ (हेक्टर)",
      className: "area-card",
    },
    {
      icon: "👥",
      number: "८६९",
      title: "लोकसंख्या (2011 नुसार)",
      className: "population-card",
    },
    {
      icon: "🏠",
      number: "१७५",
      title: "कुटुंबे",
      className: "family-card",
    },
  ];

  return (
    <section className="info-section">

      <div className="info-container">

        {information.map((item, index) => (
          <div
            className={`info-card ${item.className}`}
            key={index}
          >

            <div className="info-icon">
              {item.icon}
            </div>

            <h2 className="info-number">
              {item.number}
            </h2>

            <p className="info-title">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default InfoCards;