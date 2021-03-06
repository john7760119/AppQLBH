import React, { Component } from "react";
import {
  View, Text, TouchableOpacity, Dimensions
} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import Header from "./Header";
const { height } = Dimensions.get("window");
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    }
  }
  openMenu(){
    const {open}=this.props;
    open();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFF" }}>
        <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}
          >
            <Home />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            title="Contact"
            badgeText="2"
            onPress={() => this.setState({ selectedTab: 'contact' })}
          >
            <Contact />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="Cart"
            badgeText="3"
            onPress={() => this.setState({ selectedTab: 'cart' })}
          >
            <Cart />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="Search"
            badgeText="4"
            onPress={() => this.setState({ selectedTab: 'search' })}
          >
            <Search />
          </TabNavigator.Item>

        </TabNavigator>
      </View>
    )
  }
}
export default Shop;
