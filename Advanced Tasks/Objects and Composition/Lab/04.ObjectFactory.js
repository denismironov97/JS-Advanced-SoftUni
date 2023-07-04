function factory(library, orders) {
  for (const currOrderData of orders) {
    const { template, parts } = currOrderData;

    parts.forEach((p) => {
      library[p](template);
    });
  }
}

const library = {
  print: function (objData) {
    console.log(`${objData.name} is printing a page`);
  },
  scan: function (objData) {
    console.log(`${objData.name} is scanning a document`);
  },
  play: function (objData) {
    if (!objData.hasOwnProperty(track)) {
    } else if (!objData.hasOwnProperty(artist)) {
    } else if (
      !objData.hasOwnProperty(track) &&
      !objData.hasOwnProperty(artist)
    ) {
      console.log(`${objData.name} is playing 'track' by artist`);
    } else {
      console.log(
        `${objData.name} is playing '${objData.track}' by ${objData.artist}`
      );
    }
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);
