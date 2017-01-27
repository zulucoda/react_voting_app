// @flow


const ProductList = React.createClass({

  render : function () {

    return (
      <div className='ui items'>
        <Product />
      </div>
    );

  }

});

const Product = React.createClass({

  render: function () {
    return (
      <div className="item">
        <div className="image">
          <img src="images/products/image-aqua.png" alt=""/>
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a href="">Fort Knight</a>
            <p>Authentic renaissances actors, delivered in just two weeks.</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src="images/avatars/daniel.jpg" alt=""/>
          </div>
        </div>
      </div>
    );
  }

});


ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);