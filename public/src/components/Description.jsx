import React from "react";
import ProductMaker from "./ProductMaker.jsx";
import Stars from "./Stars.jsx";
import Ratings from "./Ratings.jsx";
import QuestionsAnswered from "./QuestionsAnswered.jsx";
import InStock from "./InStock.jsx";
import FlagAndDeals from "./FlagAndDeals.jsx";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.descriptionCleaner = this.descriptionCleaner.bind(this);
    this.goToProductMaker = this.goToProductMaker.bind(this);
  }

  descriptionCleaner(desc) {
    let cleanedDesc = "";
    let cleanLines = [];
    let curChar = 0;
    for (let i = 0; i < desc.length; i++) {
      if (desc[i] === "+" && desc[i + 1] === "+") {
        cleanedDesc = desc.slice(curChar, i) + "\n";
        cleanLines.push(cleanedDesc);
        cleanedDesc = "";
        curChar = i + 2;
      }
      if (i === desc.length - 1) {
        cleanedDesc = desc.slice(curChar, i + 1);
        cleanLines.push(cleanedDesc);
      }
    }
    return cleanLines;
  }

  goToProductMaker() {
    alert(
      `This would have redirected you to all of ${this.state.currentProduct.productMaker}'s products`
    );
  }

  render() {
    return (
      <div id="productDescriptionContainerS">
        <div id="titleOfProductContainerS">
          <div id="titleOfProductS">
            {this.props.currentProduct.productName}
          </div>
        </div>
        <div id="productMakerContainerS">
          <ProductMaker
            currentProduct={this.props.currentProduct}
            goToProductMaker={this.props.goToProductMaker}
          />
        </div>
        <span id="starsRatingsQuestionsContainerS">
          <Stars currentProduct={this.props.currentProduct} />
          <Ratings currentProduct={this.props.currentProduct} />
          <span id="theLineS">|</span>
          <QuestionsAnswered currentProduct={this.props.currentProduct} />
        </span>
        <span id="productPriceContainerS">
          <span id="theWordPriceS">Price: </span>
          <span id="productPriceS">
            ${this.props.currentProduct.productPrice}
          </span>
        </span>
        <FlagAndDeals />
        <div id="grayLineDividerS"></div>
        <InStock />
        <div id="productDescriptionLineContainerS">
          <ul>
            {this.descriptionCleaner(this.props.currentProduct.productDesc).map(
              (line, id) => (
                <li key={id} className="productDescriptionLineS">
                  {line}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Description;
