// @flow


const ProductList = React.createClass({
  handleProductUpVote: (productId) => {
    console.log(productId + ' was up voted.');
  },

  render : function () {
    const products = Data.map((product) => {
      return (
        <div className='ui items'>
          <Product
            key={'product-'+product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitter_avatar_url={product.submitter_avatar_url}
            product_image_url={product.product_image_url}
            onVote={this.handleProductUpVote}
          />
        </div>
      );
    });

    return (
      <div className="ui items">
        {products}
      </div>
    );
  }

});

const Product = React.createClass({

  handleUpVote: function() {
    this.props.onVote(this.props.id);
  },

  render: function () {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.product_image_url} alt=""/>
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon">
              </i>
              {this.props.votes}
            </a>
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={this.props.submitter_avatar_url} alt=""/>
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