const Universities = Object.freeze({
  Moscow: {
    MIPT: {text: "МФТИ", callback: "university:mipt"},
    MSTU: {text: "МГТУ", callback: "university:mstu"}
  },
  Nizhny: {
    NNSU: {text: "ННГУ", callback: "university:nnsu"},
    NSTU: {text: "НГТУ", callback: "university:nstu"}
  }
});

module.exports = Universities;
