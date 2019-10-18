import React, { Component } from "react";
import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "proteins",
          imageUrl:
            "https://sc01.alicdn.com/kf/UTB8C3eYxhHEXKJk43Jeq6yeeXXaL/FITNESS-SUPPLEMENT-FOR-SALE-SPORT-SUPPLEMENTS-FOR.jpg_350x350.jpg",
          id: 1,
          linkUrl: "proteins"
        },
        {
          title: "fat burners",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCTVe4hFTom5Ud8K2YORVhocxgNQFBTGe1HM3fg31YIuu55FpXg",
          id: 2,
          linkUrl: ""
        },
        {
          title: "vitamins",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCTVe4hFTom5Ud8K2YORVhocxgNQFBTGe1HM3fg31YIuu55FpXg",
          id: 3,
          linkUrl: ""
        },
        {
          title: "hardcore products",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCTVe4hFTom5Ud8K2YORVhocxgNQFBTGe1HM3fg31YIuu55FpXg",
          id: 4,
          linkUrl: ""
        },
        {
          title: "mind boosters",
          imageUrl:
            "https://www.irishtimes.com/polopoly_fs/1.2731040.1469520981!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
