const colors = ["NAME1", "NAME2", "NAME3"];
colors[3] = "NAME4";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});