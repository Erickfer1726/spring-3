import React from "react";
import "Home.css";
import Product from "Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://res.cloudinary.com/damb1cmmd/image/upload/v1633315726/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363_ccj7gd.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: Cómo la innovación constante crea empresas radicalmente exitosas."
            price={15}
            rating={5}
            image="https://res.cloudinary.com/damb1cmmd/image/upload/v1633315768/51Zymoq7UnL._SX325_BO1_204_203_200__ih5ks6.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Batidora de pie para harina, elegante batidora de cocina con batidor K, gancho para masa y batidor, vaso de vidrio de 5 litros"
            price={250}
            rating={4}
            image="https://res.cloudinary.com/damb1cmmd/image/upload/v1633315816/81O_GNdkzKL._AC_SX450__rkhlmi.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Monitor Samsung curvo 49 pulgadas"
            price={199.99}
            rating={3}
            image="https://res.cloudinary.com/damb1cmmd/image/upload/v1633316179/D_NQ_NP_740604-MCO33037364646_112019-O_fniu4v.jpg"
          />
          <Product
            id="23445930"
            title="Amazonas Echo (3rd generacion) | Smart speaker con Alexa,ic"
            price={99.99}
            rating={5}
            image="https://res.cloudinary.com/damb1cmmd/image/upload/v1633315896/P6LTG_SQ1_0000000071_CHARCOAL_SLf_hgiuev.jpg"
          />
          <Product
            id="3254354345"
            title="Nueva Apple iPad Pro (14-pulgadas, Wi-Fi, 128GB) - Silver (4th Generacion)"
            price={598.99}
            rating={4}
            image="https://res.cloudinary.com/damb1cmmd/image/upload/v1633316282/apple_ipad-pro-spring21_hero_04202021_big.jpg.large_j3d2fd.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Monitor asus 27 pulgadas gaming 4K"
            price={550.00}
            rating={4}
            image="https://res.cloudinary.com/damb1cmmd/image/upload/v1633316370/descargar_lt9xgu.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;