import React from 'react';
import SearchList from './components/SearchList';
import products from './products.json'
import styles from './App.module.css';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    //items z dat nahrajeme do statu
    this.state = {
      items: products.items,
      productSearchString: ""
    }
  }

  onSearch = (event) => {
    //what we write to the keyboard
    console.log(event.target.value);

    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
      //have to make sure it's case-insensitive! ---> .includes has to be on another line or it's not working
      let products = this.state.items.filter((item) => item.name.toLocaleLowerCase()
          .includes(this.state.productSearchString.toLocaleLowerCase()));
    return (
        <div className={ styles.container }>
            <div className={ styles.searchBar }>
              <input placeholder="Vyheurekujte si to" type="text" onChange={ this.onSearch } value={ this.state.productSearchString }/>
            </div>
            <SearchList
                items={ products }
            />
        </div>
    )
  }
}

export default App;