import React from "react";
import Axios from "axios";
import TitleBar from "../../pageLayout/TitleBar";
import ProductCard from "../../medium/ProductCard";
import { UiContext } from "../../../App";
import { ItemContext, planRoute } from "../../../context/Api";

import Premium from "../../../assets/premium.svg";
import Mini from "../../../assets/mini.svg";
import Access from "../../../assets/access.svg";
import Blue from "../../../assets/blue.svg";
import Yellow from "../../../assets/yellow.svg";
import Loading from "../../major/Loading";

function AccessPlan() {
  const Item = React.useContext(ItemContext);
  const Ui = React.useContext(UiContext);

  // Fetch Data
  React.useEffect(() => {
    Axios.get(planRoute + "/1")
      .then((data) => {
        console.log(data);
        Item.dispatch({ type: "FETCH_SUCCESS", payload: data.data });
      })
      .catch((err) => Item.dispatch({ type: "FETCH_FAILURE", error: err }));
  }, []);

  return Item.state.loading ? (
    <Loading />
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TitleBar
        title="Access Plan"
        actionText="Update Data"
        onActionClick={() => {
          Ui.uiDispatch("showUpdateDataDialog");
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 50 }}>
        {/* {console.log(Plan.state)} */}
        <ProductCard
          type="display"
          title="Total Sum of Component"
          displayData={`N${Item.state.data.total}`}
          imgSrc={Premium}
          bg="rgba(0, 178, 169, 0.1)"
        />
        <ProductCard
          type="display"
          title="Workmanship @12K Per Month"
          displayData={`N${Item.state.data.workmanship}`}
          imgSrc={Mini}
          bg="rgba(255, 102, 52, 0.1)"
        />
        <ProductCard
          type="display"
          title="Commission @10%"
          displayData={`N${Item.state.data.commission_rate}`}
          imgSrc={Access}
          bg="rgba(39, 174, 96, 0.1)"
        />
        <ProductCard
          type="display"
          title="VAT @7.5% of Commission"
          displayData={`N${Item.state.data.vat_rate}`}
          imgSrc={Blue}
          bg="rgba(45, 156, 219, 0.1)"
        />
        <ProductCard
          type="display"
          title="WHT Tax @7.5% of Commission"
          displayData={`N${Item.state.data.wht_rate}`}
          imgSrc={Yellow}
          bg="rgba(234, 171, 0, 0.1)"
        />
      </div>
    </div>
  );
}

export default AccessPlan;
