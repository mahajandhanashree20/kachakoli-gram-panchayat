import React from "react";

function Member() {
  return (
    <section className="committee-page">

      {/* Heading */}
      <div className="committee-header">
        <p>ग्रामपंचायत काचकोली</p>

        <h1>कार्यकारणी</h1>

        <div className="committee-line"></div>
      </div>


      {/* All Members */}
      <div className="committee-container">

        {/* Member 1 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member1.jpeg"
              alt="ग्रामपंचायत अधिकारी"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>ग्रामपंचायत अधिकारी</h2>
            <p>श्री. भगवान देहू निरगुडा</p>
          </div>
        </div>


        {/* Member 2 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member2.jpeg"
              alt="सरपंच"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>सरपंच</h2>
            <p>सौ. वैशाली कल्पेश पष्टे</p>
          </div>
        </div>


        {/* Member 3 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member3.jpeg"
              alt="उपसरपंच"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>उपसरपंच</h2>
            <p>श्री. तानाजी चिंतामण भालेराव</p>
          </div>
        </div>


        {/* Member 4 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member4.jpeg"
              alt="सदस्या"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>सदस्या</h2>
            <p>सौ. देवकी जानू निरगुडा</p>
          </div>
        </div>


        {/* Member 5 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member5.jpeg"
              alt="सदस्या"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>सदस्या</h2>
            <p>सौ. अंजना सुभाष मेंगाळ</p>
          </div>
        </div>


        {/* Member 6 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member6.jpeg"
              alt="सदस्या"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>सदस्या</h2>
            <p>कु. पद्मा गणेश भवर</p>
          </div>
        </div>


        {/* Member 7 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member7.jpeg"
              alt="सदस्य"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>सदस्य</h2>
            <p>श्री. गोपाळ आनू निरगुडा</p>
          </div>
        </div>


        {/* Member 8 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member8.jpeg"
              alt="सदस्य"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>सदस्य</h2>
            <p>श्री. सखाराम महादु पुंजारा</p>
          </div>
        </div>


        {/* Member 9 */}
        <div className="member-card">
          <div className="member-image-wrapper">
            <img
              src="/images/member9.jpeg"
              alt="सदस्या"
              className="member-image"
            />
          </div>

          <div className="member-info">
            <h2>सदस्या</h2>
            <p>सौ. ममता गिरीश बांगारा</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Member;