import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst Intern</h4>
                <h5>mFilterIt</h5>
              </div>
              <h3>Jan 2026 – Present</h3>
            </div>
            <p>
              Enhanced ad detection and evaluation for cricket broadcasts using
              ADAO; automated validation and scalable Python workflows for
              data processing and reporting; performed social media web scraping
              for brand presence analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Finn Fintech</h5>
              </div>
              <h3>Sep 2025 – Nov 2025</h3>
            </div>
            <p>
              Analyzed customer financial and loan datasets with SQL and Python to
              evaluate sales trends, profitability, and risk metrics; built Power BI
              dashboards to expose KPIs and support credit assessment decisions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Saiesha E‑Vehicles</h5>
              </div>
              <h3>Jun 2025 – Jul 2025</h3>
            </div>
            <p>
              Cleaned and transformed FY 2024–25 sales ledger data using Python
              and Excel, conducted EDA to ensure data quality, and developed
              interactive Power BI dashboards tracking revenue, trends and KPIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
