'use strict';
//extending From react Component
var Carbon = function () {
    React.Component.call(this);
    this.state = {
        factors: []
    };
    this.componentWillMount = function () {
        var self = this;
        fetch('https://api.carbonintensity.org.uk/intensity/factors')
            .then(function (data) {
                return data.json()
            })
            .then(function (data) {
                console.log(data)
                self.setState({
                    factors: data.data['0']
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    };
    this.render = function(){
        console.log(this.state.factors);
        var self = this;
        return React.createElement('div', {className: 'container'}, 
        React.createElement('h1', {className: 'display-1'}, 'carbon footprint'),
        Object.keys(self.state.factors).map(function(e,i){
              return React.createElement('div', {key: i, className: 'card'},
              React.createElement('img', {className: 'card-img-top'}),
              React.createElement('div', {className: 'card-body'}, 
              React.createElement('h5', {className: 'card-title'}, e),
              React.createElement('p', {className: 'card-text'}, self.state.factors[e]),
              React.createElement('a', {className:'btn btn-primary', href: `http://www.duckduckgo.com/${e}`}, e)
              
              )
              
              )
        })
        
        )
        ;
    }
};

//init the class

Carbon.prototype = Object.create(React.Component.prototype);
Carbon.prototype.constructor = Carbon;










//mounting before rendering the component

ReactDOM.render(React.createElement(Carbon), document.getElementById('root'));


