function fetchData(season, round) {
    const url = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`;

    return axios.get(url)
    .then(response => response.data.MRData.StandingsTable.StandingsList[0].DriverStandings)
    .catch(error => {
        console.log('Error:', error);
        return [];
    });
}

function generateRandomRacers() {
    const racers = [];

    for (let i = 1; i<=7; i++) {
        const racer = {
            position: i,
            name: `Racer ${i}`,
            nationality: `Nationality ${i}`,
            sponsor: `Sponsor ${i}`,
            points: Math.floor(Math.random() * 100)
        };

        racers.push(racer);
    }
    return racers;
}

function createTableRows(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach(entry => {
        const row = document.createElement('tr');

        const positionCell = document.createElement('td');
        positionCell.textContent = entry.position;
        row.appendChild(positionCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = `${entry.Driver.givenName} ${entry.Driver.familyName}`;
        row.appendChild(nameCell);

        const nationalityCell = document.createElement('td');
        nationalityCell.textContent = entry.Driver.nationality;
        row.appendChild(nationalityCell);

        const sponsorCell = document.createElement('td');
        sponsorCell.textContent = entry.Constructors[0].name;
        row.appendChild(sponsorCell);

        const pointsCell = document.createElement('td');
        pointsCell.textContent = entry.points;
        row.appendChild(pointsCell);

        tableBody.appendChild(row)
    });
}

document.getElementById('get-standings-button').addEventListener('click', function (event) {
    event.preventDefault();

    const season = document.getElementById('season').value;
    const round = document.getElementById('round').value;

    const racers = [
        {position: 1, name: "Yuqing Shao", nationality: "Chinese", sponsor: "Camry", points: 80},
        {position: 2, name: "Cheukying Li", nationality: "Hongkongese", sponsor: "Odyssey", points: 70},
        {position: 3, name: "Nhu Tien", nationality: "Vietnamese", sponsor: "Altima", points: 60},
        {position: 4, name: "Kim Jongsoo", nationality: "Korean", sponsor: "Corolla", points: 55},
        {position: 5, name: "Haruto Shizaki", nationality: "Japanese", sponsor: "Mercedes", points: 50},
        {position: 6, name: "Tasha Lam", nationality: "Singaporean", sponsor: "Ferrari", points: 45},
        {position: 7, name: "Shuhua Chang", nationality: "Taiwanese", sponsor: "Renault", points: 40},
    ];

    fetchData(season, round)
        .then((data) => createTableRows(data));

});
