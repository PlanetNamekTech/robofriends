import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import './app.css';
import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    //Don't need arrow function since it is native to react
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
             <h1>Loading</h1> :
          (
                <div className="tc">
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots= { filteredRobots } />
                    </Scroll>
                </div>
          );  
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(App);