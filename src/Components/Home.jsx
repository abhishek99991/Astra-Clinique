import React from "react";
import heroImage from "../images/hero-right-img.png";
import { FiClock, FiBriefcase, FiHeart, FiShield } from "react-icons/fi";
import { FiSearch, FiFeather } from "react-icons/fi";
import ourRequestImg from "../../src/images/our-request.png";
import { FiDroplet } from "react-icons/fi";
import { GiMedicines, GiBandageRoll } from "react-icons/gi";

import { FaStethoscope } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="gap hero-bg-img">
        <div className="container">
          <div className="flex al-center space-bw">
            <div className="col-50">
              <h1 className="mb-15">
                Astra: delivering the <br /> right care, at the <br /> right
                time, to change <br />
                lives.
              </h1>
              <p className="mb-15">
                Fast, professional, and accessible nursing care for the adult
                population of Mirabel.
              </p>
              <div className="flex al-center main-sec-buttons">
                <button>Book Now</button>
                <button>View Service</button>
              </div>
            </div>
            <div className="col-50 hero-right-img">
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="why-section-top gap">
        <div className="container flex space-bw">
          <div className="col-40 why-left-top">
            <h2 className="mb-15">Why we’re here</h2>

            <p className="mb-15">
              Do you have a health concern? We’re here to help. Are you
              experiencing discomfort, symptoms… You shouldn’t have to suffer or
              wait weeks…
            </p>

            <p className="mb-15">
              Astra offers you a fast, human, and professional solution right in
              the heart of Mirabel.
            </p>
          </div>

          <div className="col-60 why-right-top flex al-center space-bw">
            <div className="info-card col-50 mb-15">
              <div className="icon mb-10">
                <FiClock size={18} color="#4E6147" />
              </div>

              <h4 className="mb-10">Fast appointments</h4>

              <p>Get an appointment quickly for your urgent needs.</p>
            </div>

            <div className="info-card col-50 mb-15">
              <div className="icon mb-10">
                <FiBriefcase size={18} color="#4E6147" />
              </div>

              <h4 className="mb-10">A wide range of services</h4>

              <p>From ear irrigation to comprehensive blood tests.</p>
            </div>

            <div className="info-card col-50 mb-15">
              <div className="icon mb-10">
                <FiHeart size={18} color="#4E6147" />
              </div>

              <h4 className="mb-10">A human approach</h4>

              <p>Attentive listening and personalized care.</p>
            </div>

            <div className="info-card col-50 mb-15">
              <div className="icon mb-10">
                <FiShield size={18} color="#4E6147" />
              </div>

              <h4 className="mb-10">A safe environment</h4>

              <p>Rigorous clinical standards for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section gap">
        <div className="container">
          <h2 className="text-center work-section-heading">
            How does it work?
            <span></span>
          </h2>

          <div className="work-grid flex al-center space-bw">
            <div className="work-card col-33 text-center">
              <div className="work-icon green mb-15">
                <FiSearch size={22} />
              </div>

              <h3 className="mb-10">1. Quick assessment</h3>

              <p>
                We listen, observe, and understand your specific health needs
                right away.
              </p>
            </div>

            <div className="work-card col-33 text-center">
              <div className="work-icon purple mb-15">
                <FiBriefcase size={22} />
              </div>

              <h3 className="mb-10">2. Tailored professional care</h3>

              <p>
                Ear irrigation, injections, wound care, blood tests Delivered
                with precision.
              </p>
            </div>

            <div className="work-card col-33 text-center">
              <div className="work-icon green mb-15">
                <FiFeather size={22} />
              </div>

              <h3 className="mb-10">3. Follow-up & advice</h3>

              <p>
                You leave feeling relieved, informed, and confident about your
                health journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gap our-request-bg">
        <div className="container">
          <h2 className="mb-10">Our most requested services</h2>
          <p>Expert nursing care tailored to your needs.</p>

          <div className="flex al-center space-bw our-first-row mb-15">
            <div className="col-60 flex al-center space-bw">
              <div className="col-50 our-req-img">
                <img src={ourRequestImg} alt="" />
              </div>
              <div className="col-50 audition-top">
                <div className="req-audition">Audition</div>
                <h4>Ear irrigation</h4>
                <p className="mb-15">
                  Gentle and effective removal of earwax buildup for immediate
                  relief and improved hearing.
                </p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="col-40 service-card-right">
              <div className="service-icon-right mb-15">
                <FiDroplet size={16} />
              </div>

              <div className="service-content-right">
                <h3 className="mb-10">Blood tests</h3>

                <p className="mb-15">
                  Prélèvements sanguins rapides avec acheminement rapide au
                  laboratoire.
                </p>

                <span>Result in 24–48h</span>
              </div>
            </div>
          </div>

          <div className="flex al-center space-bw">
            <div className="care-card col-33">
              <div className="care-icon">
                <GiMedicines size={20} />
              </div>

              <h3>Intramuscular injections</h3>

              <p>Administration professionnelle de médicaments et vaccins.</p>
            </div>

            <div className="care-card col-33 differ-color">
              <div className="care-icon">
                <GiBandageRoll size={20} />
              </div>

              <h3>Wound care and dressings</h3>

              <p>
                Traitements spécialisés pour une guérison optimale et
                sécuritaire.
              </p>
            </div>

            <div className="care-card col-33">
              <div className="care-icon">
                <FaStethoscope size={20} />
              </div>

              <h3>Nursing assessments</h3>

              <p>Evaluation complète de votre état de santé par une experte.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
