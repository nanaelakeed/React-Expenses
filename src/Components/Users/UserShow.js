import React from "react";
import Card from "../Card";

const UserShow = (props) => {
  return(
      <Card className="expense-item">
          <div className={"expense-item__description"}>
              <h2>{props.name}</h2>
              <div className={"expense-item__price"}>
                  <h2>{props.age} Years old</h2>
              </div>
          </div>
      </Card>
  );
}

export default UserShow;