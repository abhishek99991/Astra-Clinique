import React from "react";
import serviceHeroimg from "../images/service-hero.png";
import {
  FaUserNurse,
  FaBandAid,
  FaHeartbeat,
  FaUserAlt,
  FaFlask,
  FaSyringe,
} from "react-icons/fa";
import { FaRegClipboard, FaMicroscope, FaRegMessage } from "react-icons/fa6";
import dressChange from "../images/dressing-changes.png";
import { FaBriefcaseMedical, FaUserDoctor } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <section className="gap service-hero-bg">
        <div className="container">
          <div className="flex al-center space-bw">
            <div className="col-50 service-banner-text">
              <div className="service-excellence">Medical Excellence</div>
              <h1 className="mb-15">
                Comprehensive Care <br />{" "}
                <span>
                  Botanically <br /> Inspired
                </span>
              </h1>
              <p className="mb-15">
                Our sanctuary combines advanced clinical expertise with an
                environment designed for serenity. Explore our specialized
                services ranging from nursing care to advanced diagnostics.
              </p>
              <div className="flex al-center main-sec-buttons main-service">
                <button>Browse Services</button>
                <button>Meet Clinicians</button>
              </div>
            </div>
            <div className="col-50 hero-right-img">
              <img src={serviceHeroimg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-directory gap">
        <div className="container">
          <div className="flex space-bw">
            {/* LEFT SIDEBAR */}
            <div className="service-sidebar col-20">
              <div className="sidebar-title mb-15">
                <h3>Service Directory</h3>
                <p>THE BOTANICAL SANCTUARY</p>
              </div>

              <ul className="service-menu">
                <li className="active">
                  <FaUserNurse size={16} />
                  General Nursing
                </li>

                <li>
                  <FaBandAid size={16} />
                  Wound Care
                </li>

                <li>
                  <FaHeartbeat size={16} />
                  Digestive Health
                </li>

                <li>
                  <FaUserAlt size={16} />
                  Elderly Care
                </li>

                <li>
                  <FaFlask size={16} />
                  Lab Tests
                </li>

                <li>
                  <FaSyringe size={16} />
                  Specialists
                </li>
              </ul>

              <button className="consult-btn">Request Consultation</button>
            </div>

            {/* RIGHT CONTENT */}
            <div className="service-content col-80">
              <div className="service-block mb-15">
                <div className="service-heading flex al-center">
                  <div className="service-icon green">+</div>

                  <h2>General Nursing Care</h2>
                </div>

                <div className="flex space-bw">
                  {/* CARD 1 */}
                  <div className="service-card light-card col-50">
                    <h3>Monitoring & Assessment</h3>

                    <ul>
                      <li>Vital signs monitoring</li>
                      <li>Comprehensive nursing assessment</li>
                      <li>
                        Chronic disease follow-up (Hypertension, Diabetes)
                      </li>
                    </ul>
                  </div>

                  {/* CARD 2 */}
                  <div className="service-card green-card col-50">
                    <h3>Treatment Services</h3>

                    <p>
                      Professional administration of medications via multiple
                      routes.
                    </p>

                    <div className="tag-wrap">
                      <span>IM Injection</span>
                      <span>SC Injection</span>
                      <span>IV Injection</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION */}
              <div className="service-block">
                <div className="service-heading flex al-center">
                  <div className="service-icon purple">✕</div>

                  <h2>Advanced Wound Management</h2>
                </div>

                <div className="flex space-bw">
                  {/* LEFT BIG CARD */}
                  <div className="service-card large-card col-60">
                    <h3>Assessment & Diagnostics</h3>

                    <div className="flex space-bw">
                      <div className="mini-col col-50">
                        <h4>Comprehensive Evaluation</h4>
                        <p>
                          Pressure ulcers, post-traumatic, and diabetic wound
                          assessment.
                        </p>

                        <h4>Circulatory Checks</h4>
                        <p>
                          Ankle-brachial index (ABI) measurement for arterial
                          health.
                        </p>
                      </div>

                      <div className="mini-col col-50">
                        <h4>Neuropathy Evaluation</h4>
                        <p>
                          Sensory neuropathy screening for long-term health
                          management.
                        </p>

                        <h4>Post-Op Care</h4>
                        <p>
                          Expert suturing, suture removal, and staple removal
                          services.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SMALL CARD */}
                  <div className="service-card image-card col-40">
                    <h3>Dressing Changes</h3>

                    <ul>
                      <li>Simple dressings</li>
                      <li>PICC line maintenance</li>
                      <li>Surgical drain management</li>
                    </ul>

                    <img src={dressChange} alt="" />
                  </div>
                </div>
              </div>

              <div className="bottom-service-section">
                <div className="flex space-bw">
                  {/* Digestive System Care */}
                  <div className="bottom-service-card col-50">
                    <div className="bottom-service-title flex al-center">
                      <FaRegClipboard size={18} />
                      <h3>Digestive System Care</h3>
                    </div>

                    <div className="bottom-inner-card">
                      <ul>
                        <li>
                          Gastrostomy / Colostomy Care
                          <span>✓</span>
                        </li>

                        <li>
                          Ostomy Device Maintenance
                          <span>✓</span>
                        </li>

                        <li>
                          Collection Bag Management
                          <span>✓</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bottom-service-card col-50">
                    <div className="bottom-service-title flex al-center">
                      <FaMicroscope size={18} />
                      <h3>Urinary System Care</h3>
                    </div>

                    <div className="bottom-inner-card">
                      <ul>
                        <li>
                          Bladder Catheterization
                          <span>✓</span>
                        </li>

                        <li>
                          Catheter Insertion / Removal
                          <span>✓</span>
                        </li>
                      </ul>

                      <div className="quote-box">
                        “Compassionate assistance designed to maintain dignity
                        and comfort for every patient.”
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Large Cards */}
                <div className="flex space-bw service-large-wrap">
                  {/* Laboratory Tests */}
                  <div className="large-service-card light-bg col-50">
                    <div className="service-top-icon">
                      <FaMicroscope size={30} />
                    </div>

                    <div>
                      <h2>Laboratory Tests</h2>

                      <p>
                        Rapid, accurate diagnostics including blood, urine, and
                        stool tests performed in our tranquil clinical setting.
                      </p>

                      <a href="#">View List →</a>
                    </div>
                  </div>

                  {/* Telemedicine */}
                  <div className="large-service-card green-bg col-50">
                    <div className="service-top-icon">
                      <FaRegMessage size={30} />
                    </div>

                    <div>
                      <h2>Telemedicine</h2>

                      <p>
                        Virtual consultations that bring Astra’s expert
                        clinicians directly to your sanctuary, ensuring
                        continuity of care from anywhere.
                      </p>

                      <button>Schedule Virtual Visit</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clinical-services">
                <div className="clinical-wrapper">
                  {/* Heading */}
                  <div className="clinical-heading">
                    <h2>Professional Clinical Services</h2>

                    <p>
                      Comprehensive management provided by our board-certified
                      physicians and specialized nurse practitioners.
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex space-bw clinical-content">
                    {/* Left Side */}
                    <div className="clinical-col col-50">
                      <div className="clinical-title flex al-center">
                        <div className="clinical-icon dark">
                          <FaBriefcaseMedical size={15} />
                        </div>

                        <h3>PHYSICIAN SERVICES</h3>
                      </div>

                      <div className="clinical-list">
                        <div className="clinical-item">
                          <h4>Hormone & Chronic Management</h4>

                          <p>
                            Expert titration and follow-up for long-term health
                            optimization.
                          </p>
                        </div>

                        <div className="clinical-item">
                          <h4>Advanced Medical Imaging</h4>

                          <p>
                            Requisitions for MRI, Mammography, X-ray, and
                            Ultrasound diagnostics.
                          </p>
                        </div>

                        <div className="clinical-item">
                          <h4>Pharmacy & Renewals</h4>

                          <p>
                            Seamless prescription management and medication
                            renewals.
                          </p>
                        </div>

                        <div className="clinical-item">
                          <h4>General Healthcare</h4>

                          <p>
                            Contraception, pregnancy care, STI screenings, and
                            allergy management.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="clinical-col col-50 right-border">
                      <div className="clinical-title flex al-center">
                        <div className="clinical-icon green">
                          <FaUserDoctor size={15} />
                        </div>

                        <h3>SPECIALIZED NP SERVICES</h3>
                      </div>

                      {/* Highlight Card */}
                      <div className="minor-card">
                        <h4>Minor Emergencies</h4>

                        <p>
                          Rapid response for acute non-life-threatening health
                          concerns.
                        </p>
                      </div>

                      <div className="clinical-list">
                        <div className="clinical-item">
                          <h4>Disease Programs</h4>

                          <p>
                            Structured programs for holistic chronic disease
                            management.
                          </p>
                        </div>

                        <div className="clinical-item">
                          <h4>Specialist Referrals</h4>

                          <p>
                            Curated network of specialists for targeted expert
                            care.
                          </p>
                        </div>

                        <div className="clinical-item">
                          <h4>Acute Interventions</h4>

                          <p>
                            Including antibiotic prescriptions and immediate
                            radiology referrals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="geriatric-section gap">
                <div className="geriatric-overlay">
                  <div className="geriatric-content">
                    {/* Custom Icon */}
                    <div className="geriatric-icon">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="14" cy="4" r="2" />
                        <path d="m9.5 9 3.5-2 3.5 6H20" />
                        <path d="M10.5 11.5 8 21" />
                        <path d="M16 21V15l-3.5-3" />
                        <path d="M7 21h2" />
                        <path d="M19 21h2" />
                        <path d="M19 12v9" />
                      </svg>
                    </div>

                    <h1 className="geriatric-title">
                      Care for Elderly <br /> Patients
                    </h1>

                    <p className="geriatric-description">
                      Specialized attention for our seniors, including
                      comprehensive fall risk assessments and delirium
                      evaluations to ensure safety and quality of life.
                    </p>

                    <button className="geriatric-btn">
                      Learn About Geriatric Care
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
