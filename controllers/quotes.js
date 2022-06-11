const model = require("../model/quotes");

function getMultiple(page = 1) {
  return model.getQuotes(page);
}

function getBusqueda(word) {
  return model.busqueda(word);
}

function getQuote(id = 1) {
  return model.detalleQuote(id);
}

function getAllQuotes (){
  return model.getAll()
}

function validateCreate(quote) {
  let messages = [];

  console.log(quote);

  if (!quote) {
    messages.push("No object is provided");
  }

  if (!quote.quote) {
    messages.push("Quote is empty");
  }

  if (!quote.author) {
    messages.push("Quote author is empty");
  }

  if (quote.quote && quote.quote.length > 255) {
    messages.push("Quote cannot be longer than 255 characters");
  }

  if (quote.author && quote.author.length > 255) {
    messages.push("Author name cannot be longer than 255 characters");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

function create(quote) {
  validateCreate(quote);
  return model.insertQuote(quote);
}

module.exports = {
  getMultiple,
  create,
  getBusqueda,
  getQuote,
  getAllQuotes
};
