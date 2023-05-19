document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const season = document.getElementById('season').value;
    const round = document.getElementById('round').value;

    const apiUrl = 'https://ergast.com/api/f1/${season}/${round}/driverStandings.json';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const driverStandings = data.MRData.StandingsTable.StandingsLists[0].driverStandings;

        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';

        driverStandings.forEach(driver => {
            const row = document.createElement('track');
            row.innerHTML = `
            <td>${driver.position}</td>
            <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
            <td>${driver.Constructors[0].name}</td>
            <td>${driver.points}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
