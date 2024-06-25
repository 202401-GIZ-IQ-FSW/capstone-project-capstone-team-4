import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Section } from './components/section';
import Introduction from './components/Introduction';
import TeamMembers from './components/TeamMembers';
import MissionVision from './components/MissionVision';
import CompanyHistory from './components/CompanyHistory';
import ContactInformation from './components/ContactInformation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <TeamMembers />
      <MissionVision />
      <CompanyHistory />
      <ContactInformation />
      <Footer />

      <Section title="TEAM Members">
        {/* Cards here */}
        </Section>

        <Section title="Mission" description="complete" />
        <Section title="ggggg"  description="jjjj" />
    </div>
  );
}


export default App;

