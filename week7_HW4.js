function fetchData(season, round) {
    const url = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`;

    return axios.get(url)
    .then(response => response.data.MRData.StandingsTable.StandingsList[0].DriverStandings)
    .catch(error => {
        console.log('Error:', error);
        return [];
    });
}

function createTableRows(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach(entry => {
        const row = document.createElement('tr');

        const positionCell = document.createElement('td');
        positionCell.textContent = entry.positionText;
        row.appendChild(positionCell);

        const driverCell = document.createElement('td');
        driverCell.textContent = `${entry.Driver.givenName} ${entry.Driver.familyName}`;
        row.appendChild(driverCell);

        const constructorCell = document.createElement('td');
        constructorCell.textContent = entry.Constructors[0].name;
        row.appendChild(constructorCell);

        const pointsCell = document.createElement('td');
        pointsCell.textContent = entry.points;
        row.appendChild(pointsCell);

        tableBody.appendChild(row)
    });
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const season = document.getElementById('season').value;
    const round = document.getElementById('round').value;

    fetchData(season, round)
        .then(data => createTableRows(data));
});
