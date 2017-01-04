/**
 * Using ListView and Networking
 */

import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
let img = require('./img/tree.png');



class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Reading Data',
      ]),
      dataSourceTop: ds.cloneWithRows([
         'Reading Data',
      ])
    };

    fetch('http://api.douban.com/v2/movie/in_theaters')
      .then((response) => response.json())
      .then((responseJson) => {
        let movies = responseJson.subjects;
        let results = [];
        for (i in movies){
            let movie = movies[i];
            results.push(movie.title + ' (' + movie.rating.average + ')')
        }
        this.setState({
          dataSource: ds.cloneWithRows(results)
        })
      })
      .catch((error) => {
        console.error(error);
      });

    fetch('http://api.douban.com/v2/movie/top250')
      .then((response) => response.json())
      .then((responseJson) => {
        let movies = responseJson.subjects;
        let results = [];
        for (i in movies){
            let movie = movies[i];
            results.push(movie.title + ' (' + movie.rating.average + ')')
        }
        this.setState({
          dataSourceTop: ds.cloneWithRows(results)
        })
      })
      .catch((error) => {
        console.error(error);
      });

  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Text>In Theaters</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <Text>Top</Text>
        <ListView
          dataSource={this.state.dataSourceTop}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);
