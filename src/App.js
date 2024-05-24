// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { db } from './firebaseConfig';
import { ref, get } from 'firebase/database';
import CoverPage from './components/CoverPage';
import Gallery from './components/Gallery';
import LocationInfo from './components/LocationInfo';
import CeremonyInfo from './components/CeremonyInfo';
import RSVP from './components/RSVP';
import WelcomePage from './components/WelcomePage';
import Separator from './components/Separator'
import './App.css';

const InvitationPage = () => {
  const { invitationId } = useParams();
  const [invitationData, setInvitationData] = useState(null);

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const dbRef = ref(db, `invitations/${invitationId}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setInvitationData(snapshot.val());
        } else {
          console.log("No such invitation!");
        }
      } catch (error) {
        console.error("Error fetching invitation:", error);
      }
    };
    fetchInvitation();
  }, [invitationId]);

  if (!invitationData) return <div>Loading...</div>;

  const photos = [
    {
      src: "/gallery/Nosy Iranja_oct_2022.jpg",
      width: 3,
      height: 4
    },
    {
      src: "/gallery/Barcelona_sept_2020.jpg",
      width: 3,
      height: 4
    },
    {
      src: "/gallery/Patios_may_2023.jpg",
      width: 3,
      height: 4
    },
    {
      src: "/gallery/Brugge_abr_2022.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/gallery/Patio_abr_2023.jpg",
      width: 3,
      height: 4
    },
    {
      src: "/gallery/MadCool_jul_2022.jpg",
      width: 4,
      height: 3
    },
    
]

  return (
    <div className="invitation-page">
      <CoverPage names={invitationData.names} />
      <Gallery images={photos} />
      <Separator title="Córdoba" subtitle="para nosotros es un símbolo, volver a la ciudad dónde nos conocimos, y nos enamoramos. 
      Ahora queremos celebrar nuestra ceremonia y celebración en esta maravillosa ciudad" />
      <CeremonyInfo ceremonyDetails={invitationData.ceremonyDetails} />
      <LocationInfo 
        date={invitationData.date}
        place={invitationData.place}
        mapUrl={invitationData.mapUrl}
      />      
      <RSVP invitationId={invitationId} guestNames={invitationData.names} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/invitation/:invitationId" element={<InvitationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
