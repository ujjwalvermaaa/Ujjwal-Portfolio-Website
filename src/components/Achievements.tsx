import "./styles/Achievements.css";
import { MdArrowOutward } from "react-icons/md";

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          My <span>Achievements</span>
        </h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="ach-card-header">
              <h3>Complete Data Analyst Bootcamp</h3>
              <h4>From Basics to Advanced — Udemy</h4>
            </div>
            <p>
              Covered data cleaning, EDA, and visualization using Python, SQL and
              Excel; built Power BI dashboards; exposure to Snowflake, AWS and
              Azure; completed multiple real-world projects.
            </p>
            <div className="ach-card-actions">
              <a
                href="https://www.udemy.com/certificate/UC-33d9930c-e4f7-4156-95fb-0e993205028d/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Credential <MdArrowOutward />
              </a>
            </div>
          </div>
          <div className="achievement-card">
            <div className="ach-card-header">
              <h3>The Ultimate Job Ready Data Science Course</h3>
              <h4>CodeWithHarry</h4>
            </div>
            <p>
              End-to-end data science: Python, NumPy, Pandas, visualization,
              SQL and statistics; ML and basic DL; hands-on projects; tools
              like Jupyter and Git; exposure to modern AI (LLMs).
            </p>
            <div className="ach-card-actions">
              <span className="ach-badge">Credential on request</span>
            </div>
          </div>
          <div className="achievement-card">
            <div className="ach-card-header">
              <h3>Complete DS, ML, DL & NLP Bootcamp</h3>
              <h4>Udemy</h4>
            </div>
            <p>
              Full DS workflow: preprocessing, EDA, feature engineering,
              visualization; ML with Scikit-learn; DL (ANN, CNN, RNN, LSTM, GRU,
              Transformers) using TensorFlow/Keras; NLP techniques; projects.
            </p>
            <div className="ach-card-actions">
              <a
                href="https://www.udemy.com/certificate/UC-c47ad375-83fb-4476-8daa-47b82dc6af5e/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Credential <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
