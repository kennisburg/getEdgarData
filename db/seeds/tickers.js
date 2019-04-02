
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickers').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickers').insert([
        {ticker: 'glw', name: 'corning', exchange: 'nyse'},
        {ticker: 'tsla', name: 'tesla', exchange: 'nyse'},
        {ticker: 'aapl', name: 'apple', exchange: 'nyse'},
        {ticker: 'msft', name: 'microsoft', exchange: 'nyse'},
        {ticker: 'amzn', name: 'amazon', exchange: 'nyse'},
      ]);
    });
};
