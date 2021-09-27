import React from "react";
import Title from './Title';
import ShoppingList from './ShoppingList';
import styles from "./App.module.css";

/* this time it is a class, because it can use STATE*/
class App extends React.Component {
    constructor(props)
    {
        /* You should call super(props) before any other statement.
           Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
        */
        super(props);

        this.state = {
            items: [
                { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
                { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
                { id: 3, value: 'Bread', qty: 3, unit: 'x' },
                { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
            ]
        };

    }

    //aby nebyl potřeba tn zápis nahoře, napíšem to takto = () => {}
    addAnything = (food, qty) => {

        //jeste existuje .includes / pomaha nam zjistit jestli je .value uz jednou pouzita, obycejnym for by to neslo
            const searchResult =this.state.items.findIndex((element, index, array) => {
                if(element.value === food){
                    return true;
                }else {
                    return false;
                }
            });

             if((searchResult) !== -1) {
                 let items = [...this.state.items];

                 items[searchResult].qty += 7;

                 this.setState({items: items });
             }else {
                 this.setState({
                     items:
                         [...this.state.items,
                             {
                                 id: this.state.items.length + 1,
                                 value: food,
                                 qty: qty,
                                 unit: 'pcs'
                             }
                         ]
                 });
             }
         }

    deleteProduct = ( id ) => {
        //nejdriv zkopirujeme state do array VŽDYCKY - tntokrat bez toho ktere se = id
        let items = this.state.items.filter(item => item.id !== id);
        this.setState({ items: items });

/*      pomoci findIndex fce
        let items = [...this.state.items];

        let idToDelete = this.state.items.findIndex(item => item.id === id);

        if(idToDelete !== -1){
            let items = [...this.state.items];
            items.splice(idToDelete, 1);
            this.setState({ items: items });
        }*/
    }

    render()
    {
        const { applicationDescription, applicationName } = this.props;
        return <div className={ styles.shoppingList }>
            <Title
                applicationDescription={ applicationDescription }
                applicationName={ applicationName }
            />
            <ShoppingList items={ this.state.items }  deleteProduct = { this.deleteProduct }/>

            <button onClick={ () => this.addAnything("Carrots", 5) }>Carrots</button>
            <button onClick={ () => this.addAnything("Yogurth",2) }>Yogurth</button>
            <button onClick={ () => this.addAnything("Beer", 1) }>Beer</button>
            <button onClick={ () => this.addAnything("Strawberries", 6) }>Strawberries</button>
        </div>
    }
}


export default App;

/*onClick={() => console.log('clicked me') }
 takto zapsana funkce se provede az po kliknuti, kdyby tam bylo jen console.log vypise se to hned pri prekladu z JSX

setTimeout(() => {
           //this.setState({ items: [] });

           //přidání mrkve -> musíme to přidat jako ARRAY ne jako objekt, proto dáme [...this.state.items, {nový prvek}]
           //...this.state.items = list itemsů které tam chceš (už tam i jsou) a po kterých se má přidat ten nový
           this.setState({ items: [...this.state.items, {id:5 , value: 'carrots', qty: 5}] });
       }, 2000);

  POZOR!!!
    kdyby bylo addSomeCarrots() {}
    musime tu napsat toto jinak neví co je THIS, takže mu doplníme ten objekt
this.addSomeCarrots = this.addSomeCarrots.bind(this);


 addAnother = (number) => {
        let items = [...this.state.items];

        let item = {...items[number]};

        item.qty++;

        items[number] = item;

        this.setState({items});
    }
 */