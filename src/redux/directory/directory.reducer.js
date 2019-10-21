const INITIAL_STATE = {
  sections: [
    {
      title: "proteins",
      imageUrl:
        "https://sc01.alicdn.com/kf/UTB8C3eYxhHEXKJk43Jeq6yeeXXaL/FITNESS-SUPPLEMENT-FOR-SALE-SPORT-SUPPLEMENTS-FOR.jpg_350x350.jpg",
      id: 1,
      linkUrl: "shop/proteins"
    },
    {
      title: "creatine",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCTVe4hFTom5Ud8K2YORVhocxgNQFBTGe1HM3fg31YIuu55FpXg",
      id: 2,
      linkUrl: "shop/creatine"
    },
    {
      title: "amino acids",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCTVe4hFTom5Ud8K2YORVhocxgNQFBTGe1HM3fg31YIuu55FpXg",
      id: 3,
      linkUrl: "shop/amino"
    },
    {
      title: "fatty acids",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCTVe4hFTom5Ud8K2YORVhocxgNQFBTGe1HM3fg31YIuu55FpXg",
      id: 4,
      linkUrl: "shop/fatty_acids"
    },
    {
      title: "carbohydrates",
      imageUrl:
        "https://www.irishtimes.com/polopoly_fs/1.2731040.1469520981!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
      id: 5,
      linkUrl: "shop/carbs"
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
