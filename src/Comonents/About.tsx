import styled from "styled-components";

const WrapperContainer = styled.div`
  .section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #2e7d32;
    opacity: 1;
    transition: opacity 0.6s ease;
  }

  .section h2.visible {
    opacity: 1;
  }

  .section h2::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #2e7d32, #6a1b9a);
    margin: 1rem auto;
  }
  .team-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }

  .team-member {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .team-member:hover {
    transform: translateY(-5px);
  }

  .team-member:nth-child(1) {
    border-top: 4px solid #2e7d32;
  }

  .team-member:nth-child(2) {
    border-top: 4px solid #6a1b9a;
  }

  .team-member:nth-child(3) {
    border-top: 4px solid #2e7d32;
  }

  .team-member h3 {
    color: #2e7d32;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  .team-member p {
    color: #6a1b9a;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const About: React.FC = () => {
  return (
    <WrapperContainer>
      <section id="team" className="section">
        <h2>Group Members: </h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>S.N.M Harshana Prabhath</h3>
            <p>ICT/20/930</p>
            <p>Software Technology</p>
          </div>
          <div className="team-member">
            <h3>W.D Duleeka Mevan</h3>
            <p>ICT/20/888</p>
            <p>Software Technology</p>
          </div>
          <div className="team-member">
            <h3>R.G.C.K.B Thilakarathna</h3>
            <p>ICT/20/948</p>
            <p>Software Technology</p>
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default About;
