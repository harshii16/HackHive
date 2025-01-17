import React from 'react';
import TeamForm from '../components/TeamForm';

const CreateTeamFormPage = () => {
  const handleCreateTeam = (formData) => {
    // 
    console.log('Creating team:', formData);
  };

  return (
    <div>
      <h2>Create Team</h2>
      <TeamForm onCreateTeam={handleCreateTeam} />
    </div>
  );
};

export default CreateTeamFormPage;