import React from 'react';
import { Link } from 'react-router-dom';

const Company = (props) => {
  const { work } = props.location.state
  // console.log('work: ', work);
  
  return (
    <div className="page-wrapper company-page">
      <h1>{work.title}</h1>
      <img src={work.img} alt="company image filler"></img>
      <div className="company-info">
        <blockquote>
          <h2>{work.description}</h2>
        </blockquote>
        <h3>Implementation</h3>
        <p>Sesame snaps jelly sweet. Cookie jujubes ice cream macaroon oat cake biscuit marshmallow gingerbread. Pastry powder tart macaroon. Gingerbread jujubes oat cake chupa chups lemon drops candy cheesecake donut sweet. Chocolate cake cheesecake jujubes powder. Lollipop chocolate pie fruitcake cake. Candy canes candy marzipan marshmallow oat cake lollipop sugar plum.</p>
        <h3>Design Process</h3>
        <p>Donut tiramisu ice cream. Bonbon soufflé carrot cake halvah marshmallow cheesecake cookie croissant danish. Tiramisu icing apple pie sugar plum sugar plum jujubes tiramisu lollipop brownie. Cookie icing lollipop cake cotton candy jelly. Sweet roll powder candy bear claw cotton candy pastry cake jelly pie. Topping chupa chups jujubes bear claw. Sweet macaroon donut sugar plum sweet roll. Sweet cookie pudding tiramisu soufflé. Dessert liquorice cake dessert. Tootsie roll gummies donut. Macaroon gummies tiramisu bear claw sugar plum sesame snaps dragée candy. Jujubes tootsie roll tart gingerbread soufflé pie. Topping dessert macaroon pudding biscuit powder gummies macaroon muffin.</p>
        <h3>Branding</h3>
        <p>Wafer chocolate bar brownie. Topping pudding candy canes. Fruitcake candy canes toffee oat cake cookie soufflé bonbon lollipop. Cake tootsie roll chupa chups liquorice danish jelly jelly beans tiramisu. Marzipan pie cotton candy marshmallow liquorice chocolate cake marshmallow. Marzipan cake carrot cake carrot cake pudding powder gummi bears wafer powder. Gingerbread sweet roll bear claw bonbon chupa chups tootsie roll bear claw wafer. Lollipop chocolate bar wafer bear claw cheesecake biscuit cotton candy pastry. Fruitcake pastry candy marzipan pudding carrot cake gummi bears biscuit chupa chups. Lollipop cupcake pastry icing wafer candy dragée. Muffin donut gummies pastry cupcake soufflé tiramisu danish. Carrot cake jujubes croissant jelly beans jelly beans gingerbread marshmallow dragée topping. Oat cake wafer chocolate wafer.</p>
      </div>
      <Link to="/works" className="cta-button">Back</Link>
    </div>
  );
}

export default Company;