import React from "react";

function Works() {
  const works = [
     {
      image: "/images/work2.jpeg",
      title: "तक्रार पेटी/सूचना बॉक्स",
    },
    {
      image: "/images/work3.jpeg",
      title: "व्यायामशाळा",
    },
    {
      image: "/images/work4.jpeg",
      title: "स्वच्छतागृह",
    },
    {
      image: "/images/work5.png",
      title: "CCTV कॅमेरे",
    },
    {
      image: "/images/work6.png",
      title: "हनुमान मंदिर",
    },
{
      image: "/images/work7.png",
      title: "वृक्ष लागवड",
    },
{
      image: "/images/work8.jpeg",
      title: "लोकसहभाग मधून स्वच्छता ही सेवा कार्यक्रम",
    },

  ];

  return (
    <section className="works-page">

      {/* PAGE HEADER */}

      <div className="works-header">
        <p>ग्रामपंचायत काचकोली</p>

        <h1>केलेली कामे</h1>

        <div className="works-line"></div>
      </div>


      {/* WORKS */}

      <div className="works-container">

        {works.map((work, index) => (
          <div className="work-card" key={index}>

            {/* IMAGE */}

            <div className="work-image-wrapper">

              <img
                src={work.image}
                alt={work.title}
                className="work-image"
              />

            </div>


            {/* TITLE BELOW IMAGE */}

            <div className="work-info">

              <h2>
                {work.title}
              </h2>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Works;