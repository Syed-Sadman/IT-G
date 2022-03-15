const lineData = {
  labels: ["IOS", "MAC", "WIN", "LINUX"],
  datasets: [
    {
      data: [21, 48, 32, 9],
      backgroundColor: ["#e64c65", "#11a8ab", "#4fc4f6", "#fcb150"],
      borderColor: ["#e64c65", "#11a8ab", "#4fc4f6", "#fcb150"],
      borderWidth: 0.1,
    },
  ],
};

// const labDat=[{name:lineData.labels},
// {datt:lineData.datasets[0]}]

const datas = [
  ...lineData.labels.map((value, index) => {
    return { label: value, data: lineData.datasets[0].data[index] };
  }),
];
console.log(datas);
