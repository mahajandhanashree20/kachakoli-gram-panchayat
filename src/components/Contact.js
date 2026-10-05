import React from "react";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* LEFT - MAP */}
        <div className="contact-map">
          <iframe
            title="ग्रामपंचायत काचकोली नकाशा"
            src="https://www.google.com/maps?q=Kachkoli,Murbad,Maharashtra&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


        {/* RIGHT - CONTACT DETAILS */}
        <div className="contact-details">

          <div className="contact-item">
            <span className="contact-icon address-icon">📍</span>

            <p>
              <strong>पत्ता :</strong>{" "}
              ग्रामपंचायत काचकोली, गाव : काचकोली,
              ता. मुरबाड, जि. ठाणे, महाराष्ट्र-421401
            </p>
          </div>


          <div className="contact-item">
            <span className="contact-icon officer-icon">👤</span>

            <p>
              <strong>ग्रामपंचायत अधिकारी :</strong>{" "}
              श्री. भगवान देहू निरगुडा
            </p>
          </div>


          <div className="contact-item">
            <span className="contact-icon sarpanch-icon">👤</span>

            <p>
              <strong>सरपंच :</strong>{" "}
              सौ. वैशाली कल्पेश पष्टे
            </p>
          </div>


          <div className="contact-item">
            <span className="contact-icon deputy-icon">👥</span>

            <p>
              <strong>उपसरपंच :</strong>{" "}
              श्री. तानाजी चिंतामण भालेराव
            </p>
          </div>


          <div className="contact-item">
            <span className="contact-icon email-icon">✉</span>

            <p>
              <strong>ईमेल :</strong>{" "}
              <a href="mailto:YOUR_EMAIL@gmail.com">
                gpkachkoli123@gmail.com
              </a>
            </p>
          </div>


          <div className="contact-item">
            <span className="contact-icon website-icon">🌐</span>

            <p>
              <strong>वेबसाइट :</strong>{" "}
              <a href="/" target="_blank" rel="noreferrer">
                ग्रामपंचायत काचकोली
              </a>
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;