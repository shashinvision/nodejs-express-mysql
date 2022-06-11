const db = require("../services/db");
const helper = require("../helper");
const config = require("../configs/config");

const model = {
  getQuotes: async (page) => {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
      "SELECT id, quote, author FROM quote LIMIT ?,?",
      [offset, config.listPerPage]
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
      data,
      meta,
    };
  },
  busqueda: async (word) => {
    const result = await db.query(
      "SELECT id, quote, author FROM quote WHERE quote LIKE ?",
      ["%" + word + "%"]
    );
    const data = helper.emptyOrRows(result);

    return {
      data,
    };
  },
  detalleQuote: async (id) => {
    const result = await db.query(
      "SELECT id, quote, author FROM quote WHERE ID= ?",
      [id]
    );
    const data = helper.emptyOrRows(result);

    return {
      data,
    };
  },
  getAll : async () => {
    const result = await db.query(
      "SELECT id, quote, author FROM quote "
    );
    const data = helper.emptyOrRows(result);

    return {
      data,
    };
  },
  insertQuote: async (quote) => {
    const result = await db.query(
      "INSERT INTO quote (quote, author) VALUES (?, ?)",
      [quote.quote, quote.author]
    );

    let message = "Error in creating quote";

    if (result.affectedRows) {
      message = "Quote created successfully";
    }

    return { message };
  },
};

module.exports = model;
