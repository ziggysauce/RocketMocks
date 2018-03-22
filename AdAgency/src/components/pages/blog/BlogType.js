import React from 'react';
import { Link } from 'react-router-dom';

const BlogType = (props) => (
  <div className="page-wrapper blog-type">
    <h1>{props.match.params.id}</h1>
    <ul className="blog--categories">
      <li><Link to="/blog">All</Link></li>
      <li><Link to="/blog/uiux">UI/UX</Link></li>
      <li><Link to="/blog/development">Development</Link></li>
      <li><Link to="/blog/branding">Branding</Link></li>
      <li><Link to="/blog/illustration">Illustration</Link></li>
      <li><Link to="/blog/animation">Animation</Link></li>
    </ul>
    <div className="blogtype--hero">
      <h2>Blog Title</h2>
    </div>
    <div className="blogtype--content">
      <h3>Blog Header</h3>
      <p>Sesame snaps jelly sweet. Cookie jujubes ice cream macaroon oat cake biscuit marshmallow gingerbread. Pastry powder tart macaroon. Gingerbread jujubes oat cake chupa chups lemon drops candy cheesecake donut sweet. Chocolate cake cheesecake jujubes powder. Lollipop chocolate pie fruitcake cake. Candy canes candy marzipan marshmallow oat cake lollipop sugar plum.</p>
      <h3>Another Blog Header</h3>
      <p>Donut tiramisu ice cream. Bonbon soufflé carrot cake halvah marshmallow cheesecake cookie croissant danish. Tiramisu icing apple pie sugar plum sugar plum jujubes tiramisu lollipop brownie. Cookie icing lollipop cake cotton candy jelly. Sweet roll powder candy bear claw cotton candy pastry cake jelly pie. Topping chupa chups jujubes bear claw. Sweet macaroon donut sugar plum sweet roll. Sweet cookie pudding tiramisu soufflé. Dessert liquorice cake dessert. Tootsie roll gummies donut. Macaroon gummies tiramisu bear claw sugar plum sesame snaps dragée candy. Jujubes tootsie roll tart gingerbread soufflé pie. Topping dessert macaroon pudding biscuit powder gummies macaroon muffin.</p>
      <h3>Last Blog Header</h3>
      <p>Wafer chocolate bar brownie. Topping pudding candy canes. Fruitcake candy canes toffee oat cake cookie soufflé bonbon lollipop. Cake tootsie roll chupa chups liquorice danish jelly jelly beans tiramisu. Marzipan pie cotton candy marshmallow liquorice chocolate cake marshmallow. Marzipan cake carrot cake carrot cake pudding powder gummi bears wafer powder. Gingerbread sweet roll bear claw bonbon chupa chups tootsie roll bear claw wafer. Lollipop chocolate bar wafer bear claw cheesecake biscuit cotton candy pastry. Fruitcake pastry candy marzipan pudding carrot cake gummi bears biscuit chupa chups. Lollipop cupcake pastry icing wafer candy dragée. Muffin donut gummies pastry cupcake soufflé tiramisu danish. Carrot cake jujubes croissant jelly beans jelly beans gingerbread marshmallow dragée topping. Oat cake wafer chocolate wafer.</p>
    </div>
  </div>
);

export default BlogType;