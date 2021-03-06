# footballdata-api-js

> NodeJS wrapper for the football-data.org JSON API. Not meant to be full-featured at the point.

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)


## Installation

```bash
yarn add footballdata-api-js
```

## Requirements

- NodeJS 6+
- An API key from [football-data.org](https://www.football-data.org/client/register)

## Usage

#### Get Ligue 1 standings using NodeJS

```es6
const FootballDataAPI = require('footballdata-api-js');

(async () => {
  const api = FootballDataAPI.getAPIWrapper('YOUR_API_KEY');

  try {
    const standings = await api.getCompetitionStandings('FL1', {standingType: 'TOTAL'});

    console.log(standings.season);
    console.table(standings.standings[0].table);

  } catch (e) {
    // Do something with this error

  }
})();
```

## License

MIT
