option = {
  title: {
    left: "center",
    text: "#2521~#2700",
  },
  dataset: [
    {
      dimensions: ["number", "frequent"],
      source: [
        ["2527", 1],
        ["2528", 1],
        ["2531", 1],
        ["2532", 1],
        ["2538", 1],
        ["2539", 1],
        ["2540", 1],
        ["2542", 1],
        ["2543", 1],
        ["2545", 1],
        ["2546", 1],
        ["2550", 1],
        ["2554", 1],
        ["2555", 1],
        ["2558", 1],
        ["2561", 1],
        ["2563", 1],
        ["2564", 1],
        ["2566", 1],
        ["2569", 1],
        ["2573", 1],
        ["2576", 1],
        ["2580", 1],
        ["2581", 1],
        ["2582", 1],
        ["2585", 1],
        ["2587", 1],
        ["2592", 1],
        ["2597", 1],
        ["2600", 1],
      ],
    },
    {
      transform: {
        type: "sort",
        config: { dimension: "frequent", order: "desc" },
      },
    },
  ],
  xAxis: {
    type: "category",
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: "bar",
    encode: { x: "number", y: "frequent" },
    datasetIndex: 1,
  },
};