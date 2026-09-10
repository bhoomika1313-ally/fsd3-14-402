// database 

let teams = [
    {
        id1:1,
        tname: "team a",
        tl: 'b rajput',
        email:  'xyz@gmail.com',
        members: 6,
    },
    {
        id2:2,
        tname: "team b",
        tl: 'c rajput',
        email:  '  pqr@gmail.com',
        members: 6,
    }
];

let nextiD = 3;
export const getAllTeams = () => teams; 

export const getTeamsByID = (id) => teams.find(team=> team.id === id);

export const addTeam = (team) => {
    const newTeam = {id: nextiD++, ...team};
    teams.push(newTeam);
    return newTeam;
}

export const updateTeam = (id, updatedTeam) => {
    const team = teams.findIndex(team => team.id === id);      
    if(team) return null;
    Object.assign(team, updatedTeam);
    return team;   
};

export const deleteTeam = (id) => {
    const teamIndex = teams.findIndex(team => team.id === id);
    if(teamIndex === -1) return false;
    teams.slice(index, 1);
    return true;    
}; 

