import { useState, useCallback, useMemo } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  github?: string;
  details?: string[];
};

const Work = () => {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "PharmX AI – Healthcare Intelligence System",
        category: "Healthcare Analytics Platform",
        tools:
          "Python, Scikit‑learn, TensorFlow, NLP (TF‑IDF), Plotly; end‑to‑end ML/NLP pipelines",
        image: "/images/PharmX.png",
        github:
          "https://github.com/ujjwalvermaaa/PharmX-AI-Healthcare-Intelligence-System",
        details: [
          "End‑to‑end multi‑model healthcare analytics: disease prediction, hospital severity, outbreak risk and medicine demand.",
          "Built ML/NLP pipelines with Scikit‑learn and TensorFlow; consistent training–inference preprocessing.",
          "Streamlit app with Plotly for interactive, real‑time predictions and insights.",
        ],
      },
      {
        title: "FinTime – Customer Behaviour Analytics",
        category: "Financial Analytics",
        tools:
          "Python, SQL, Power BI; feature engineering, churn and revenue insights, KPI dashboards",
        image: "/images/Fintime.png",
        github:
          "https://github.com/ujjwalvermaaa/FinTime-Customer-Financial-Behavior-Analytics",
        details: [
          "Analyzed customer transactions to identify revenue trends, churn behavior and financial health.",
          "Data cleaning, EDA and feature engineering in Python and SQL to build analytical tables.",
          "Four‑page Power BI dashboard: revenue, segmentation, churn analysis, and insights; 90‑day churn logic and revenue‑at‑risk in DAX.",
        ],
      },
      {
        title: "RetainX – Customer Retention & Churn Analytics",
        category: "Customer Analytics Platform",
        tools:
          "Python, SQL (PostgreSQL), Power BI, Excel; Pandas, NumPy, Matplotlib, Seaborn, DAX",
        image: "/images/RetainX.png",
        github:
          "https://github.com/ujjwalvermaaa/RetainX-Customer-Churn-Retention-Analytics-Platform",
        details: [
          "End‑to‑end churn analytics from raw ingestion to executive dashboards.",
          "Customer segmentation and feature engineering in SQL to identify churn drivers and high‑value risk.",
          "EDA and validation in Python with business reporting in Excel for data quality and accuracy.",
          "Power BI dashboards with KPIs, churn trends, revenue‑at‑risk and geographic insights.",
        ],
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              key={projects.length}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>
                          0{projects.findIndex((p) => p.title === project.title) + 1}
                        </h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {Array.isArray(project.details) && (
                          <div className="carousel-description">
                            <ul>
                              {project.details.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.github && (
                          <div className="carousel-links">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="github-link"
                              data-cursor="disable"
                            >
                              GitHub <MdArrowOutward />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Image removed as requested; keeping details and links only */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
