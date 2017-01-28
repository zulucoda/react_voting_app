// @flow


const ProductList = React.createClass({
  getInitialState: function () {
    return {
      products: [],
      sortDirection: 'asc'
    };
  },
  updateState: function (sortOrder) {

    this.setState({sortDirection: (sortOrder) ? sortOrder : 'asc'});

    const products = (this.state.sortDirection === 'asc') ? Data.sort((a, b) => {
      return b.votes - a.votes;
    }) : Data.sort((a, b) => {
        return b.votes + a.votes;
    });

    this.setState({ products: products });
  }, componentDidMount: function () {
    this.updateState();
  },

  handleProductUpVote: function (productId) {
    console.log(productId + ' was up voted.');
    Data.forEach((item) => {
      if (item.id === productId){
        item.votes +=1;
        return;
      }
    });
    this.updateState();
  },

  handleProductDownVote: function (productId) {
    Data.forEach((item) => {
      if(item.id === productId) {
        item.downVotes +=1;
        return;
      }
    });
    this.updateState();
  },

  handleProductSortUp: function () {
    this.updateState('asc');
  },

  handleProductSortDown: function () {
    this.updateState('desc');
  },

  render : function () {
    const products = this.state.products.map((product) => {
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
            downVotes={product.downVotes}
            onVote={this.handleProductUpVote}
            onDownVote={this.handleProductDownVote}
            onSort={this.handleProductSort}
          />
        </div>
      );
    });

    return (
      <div className="ui items">
        <div>
          <a onClick={this.handleProductSortUp}>
            <i className="small caret up icon"></i> sort asc
          </a>

          <a onClick={this.handleProductSortDown}>
            <i className="small caret down icon"></i> sort desc
          </a>
        </div>
        {products}
      </div>
    );
  }

});

const Product = React.createClass({

  handleUpVote: function() {
    this.props.onVote(this.props.id);
  },

  handleDownVote: function () {
    this.props.onDownVote(this.props.id);
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
            <a>
              <i onClick={this.handleDownVote} className="large caret down icon"></i>
              {this.props.downVotes}
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