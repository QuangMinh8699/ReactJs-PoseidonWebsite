import React from 'react'
import '../Assets/Css/NewProductsRight.css'

function NewProductsRight() {

  let gamingWorkstationNewProductsData = [
    {
      topic: "gaming workstations",
      products: [
        {
          name: "RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          name: "RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          name: "RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          name: "RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          name: "RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          name: "RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
      ],
    },
  ];

  let newGamingWorkstationNewProductsData = gamingWorkstationNewProductsData.reduce((products, topic) => {
    return products.concat(topic.products);
  }, []);

  let htmlS = newGamingWorkstationNewProductsData.map((products, index) => {
    return `
      <div class='new-products-gaming-workstation-products'>
        <p class='new-products-gaming-workstation-products-name'>${products.name}</p>
        <ul class='new-products-gaming-workstation-products-ul'>
          <li class='new-products-gaming-workstation-products-li'>${products.memory}</li>
          <li class='new-products-gaming-workstation-products-li'>${products.cores}</li>
          <li class='new-products-gaming-workstation-products-li'>${products.coreClock}</li>
          <li class='new-products-gaming-workstation-products-li'>${products.connectivity}</li>
          <li class='new-products-gaming-workstation-products-li'>${products.power}</li>
          <li class='new-products-gaming-workstation-products-li'>${products.price}</li>
        </ul>
      </div>
    `;
  });

  let html = htmlS.join('');

  const gamingWorkstationNewProducts = () => {
    return { __html: html };
  }

  return (
    <>
      <div className="new-products-content-right">
        {/* workstation */}
        <div className="new-products-content-right-gaming-workstation">
          <div className="new-products-content-right-gaming-workstation-header">
            <p className="new-products-content-right-gaming-workstation-title">
              gaming workstation
            </p>
          </div>
          <div className="new-products-content-right-gaming-workstation-content"
            dangerouslySetInnerHTML={gamingWorkstationNewProducts()}
          ></div>
        </div>
        {/* /workstation */}

        {/* laptop */}
        <div className="new-products-content-right-gaming-laptop">
          <div className="new-products-content-right-gaming-workstation-header">
            <p className="new-products-content-right-gaming-workstation-title">
              gaming laptop
            </p>
          </div>
          <div className="new-products-content-right-gaming-workstation-content"
            dangerouslySetInnerHTML={gamingWorkstationNewProducts()}
          ></div>
        </div>
        {/* /laptop */}

      </div>
    </>
  )
}

export default NewProductsRight

// name: "nvidia rtx 3080",
// specifications: [
//   "memory capacity: 10GB GDDR6X",
//   "CUDA® Cores: 8704 CUDA Cores",
//   "Core Clock: 1710 MHz",
//   "Connectivity: DisplayPort 1.4a, HDMI 2.",
//   "Required power: 32W",
// ],