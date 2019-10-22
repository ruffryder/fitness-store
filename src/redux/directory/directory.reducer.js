const INITIAL_STATE = {
  sections: [
    {
      title: "proteins",
      imageUrl:
        "https://flexfitnessclubs.com/wp-content/uploads/2017/07/protein-pic.png",
      id: 1,
      linkUrl: "shop/proteins"
    },
    {
      title: "creatine",
      imageUrl:
        "https://images.askmen.com/1080x540/2018/01/12-023559-best_creatine_supplements.jpg",
      id: 2,
      linkUrl: "shop/creatine"
    },
    {
      title: "amino acids",
      imageUrl:
        "https://www.bodybuilding.com/fun/images/2015/10-best-tasting-amino-acid-supplements-desktop-830x467.jpg",
      id: 3,
      linkUrl: "shop/bcaa"
    },
    {
      title: "fatty acids",
      imageUrl:
        "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-aigfqdtqrhuhbs3kpr5s4v7lm5-20180203131300.Medi.jpeg",
      id: 4,
      linkUrl: "shop/omega"
    },
    {
      title: "carbohydrates",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1851/4671/collections/carb_grande.JPG?v=1563420829",
      id: 5,
      linkUrl: "shop/carbohydrates"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
