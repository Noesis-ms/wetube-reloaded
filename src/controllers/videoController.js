export const trending = (req, res) => res.render("home", { pageTitle: "home" });
export const see = (req, res) => {
  return res.render("watch", { pageTitle: "watch" });
};
export const edit = (req, res) => {
  return res.render("eidt", { pageTitle: "eidt" });
};
export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const deleteVideo = (req, res) => {
  return res.send("DeleteVideo");
};
