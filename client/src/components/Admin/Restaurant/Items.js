import { React, Fragment } from "react";
import './items.css';
import Item1 from "../../../images/Item1.jpg"

const Items = () => {
    return (
      <Fragment>
        <div className="menu">
          <div className="superItems">
            <button>Pizzas</button>
            <button>Breads</button>
            <button>Desert</button>
          </div>
          <div className="allItems">
            <p className="itemTitle">
              Items 
            </p>
            <div className="items">
              <div className="ItemCard">
                <img src={Item1} alt="" />
                <div className="ItemDescription" id="subCat1">
                  <p className="ItemName">
                    Margeritta Pizza{" "}
                    <span className="veg">
                      <i className="fa-regular fa-circle-stop"></i>
                    </span>
                  </p>
                  <p className="ItemPrice">&#x20B9; 200</p>
                  <p className="ItemDetails">
                    Medium Pizza with Onion and Olive Toppins
                  </p>
                </div>
                <div className="addItem">
                  <button className="addItemToCart">ADD</button>
                </div>
              </div>
              <div className="ItemCard">
                <img src={Item1} alt="" />
                <div className="ItemDescription" id="subCat2">
                  <p className="ItemName">
                    Margeritta Pizza{" "}
                    <span className="nonveg">
                      <i className="fa-regular fa-circle-stop"></i>
                    </span>
                  </p>
                  <p className="ItemPrice">&#x20B9; 200</p>
                  <p className="ItemDetails">
                    Medium Pizza with Onion and Olive Toppins
                  </p>
                </div>
                <div className="addItem">
                  <button className="addItemToCart">ADD</button>
                </div>
              </div>
              <div className="ItemCard">
                <img src={Item1} alt="" />
                <div className="ItemDescription" id="subCat3">
                  <p className="ItemName">
                    Margeritta Pizza{" "}
                    <span className="vegOrnot">
                      <i className="fa-regular fa-circle-stop"></i>
                    </span>
                  </p>
                  <p className="ItemPrice">&#x20B9; 200</p>
                  <p className="ItemDetails">
                    Medium Pizza with Onion and Olive Toppins
                  </p>
                </div>
                <div className="addItem">
                  <button className="addItemToCart">ADD</button>
                </div>
              </div>
              <div className="ItemCard">
                <img src={Item1} alt="" />
                <div className="ItemDescription" id="subCat3">
                  <p className="ItemName">
                    Margeritta Pizza{" "}
                    <span className="vegOrnot">
                      <i className="fa-regular fa-circle-stop"></i>
                    </span>
                  </p>
                  <p className="ItemPrice">&#x20B9; 200</p>
                  <p className="ItemDetails">
                    Medium Pizza with Onion and Olive Toppins
                  </p>
                </div>
                <div className="addItem">
                  <button className="addItemToCart">ADD</button>
                </div>
              </div>
              <div className="ItemCard">
                <img src={Item1} alt="" />
                <div className="ItemDescription" id="subCat3">
                  <p className="ItemName">
                    Margeritta Pizza{" "}
                    <span className="vegOrnot">
                      <i className="fa-regular fa-circle-stop"></i>
                    </span>
                  </p>
                  <p className="ItemPrice">&#x20B9; 200</p>
                  <p className="ItemDetails">
                    Medium Pizza with Onion and Olive Toppins
                  </p>
                </div>
                <div className="addItem">
                  <button className="addItemToCart">ADD</button>
                </div>
              </div>
              <div className="ItemCard">
                <img src={Item1} alt="" />
                <div className="ItemDescription" id="subCat3">
                  <p className="ItemName">
                    Margeritta Pizza{" "}
                    <span className="vegOrnot">
                      <i className="fa-regular fa-circle-stop"></i>
                    </span>
                  </p>
                  <p className="ItemPrice">&#x20B9; 200</p>
                  <p className="ItemDetails">
                    Medium Pizza with Onion and Olive Toppins
                  </p>
                </div>
                <div className="addItem">
                  <button className="addItemToCart">ADD</button>
                </div>
              </div>
              <div className="ItemCard">
                <img src={Item1} alt="" />
                <div className="ItemDescription" id="subCat3">
                  <p className="ItemName">
                    Margeritta Pizza{" "}
                    <span className="vegOrnot">
                      <i className="fa-regular fa-circle-stop"></i>
                    </span>
                  </p>
                  <p className="ItemPrice">&#x20B9; 200</p>
                  <p className="ItemDetails">
                    Medium Pizza with Onion and Olive Toppins
                  </p>
                </div>
                <div className="addItem">
                  <button className="addItemToCart">ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Items;