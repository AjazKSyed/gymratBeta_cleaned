import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Image, Text, View } from 'react-native';

export default class MischeifCalls extends Component {
  state = {
    data: []
  };

  componentDidMount () {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const json = await response.json();
    this.setState({data: json.results});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.NameInformation}
          ItemSeparatorComponent={
            () => <View style={styles.seaprator}/>
          }
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          keyExtractor={(x,i) => i.toString()}
          renderItem={({item}) => {
            return(
              <React.Fragment>
                <View style={styles.tile}>
                  <View style={styles.Items}>
                    <Image
                      style={styles.profilePicture}
                      source={{uri: `${item.picture.large}`}}
                    >
                    </Image>

                    <View style={styles.TextItems}>
                      <Text style={styles.h2}>
                        {`${item.name.first} ${item.name.last}`}
                      </Text>
                      <Text style={styles.h3}>
                      Some type of message
                      </Text>
                    </View>
                  </View>
                </View>
              </React.Fragment>
            );
          }
        }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  NameInformation: {
    paddingBottom: 30,

  },
  seaprator:{ height: 5, backgroundColor: '#F0F0F0' },
  tile: {
    flexDirection: 'row',
    paddingTop: 20,

  },
  Items: {

    flexDirection: 'row',
    width: 428,
    height: 122,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#8898AA',
    shadowOpacity: 0.05,
    shadowRadius: 10,

  },
  TextItems: {
    flexWrap:'wrap',


    flexDirection: 'column',
    textAlignVertical: 'center',
    paddingTop: 15,
  },

  profilePicture: {
    marginHorizontal: 20,

    height: 82,
    width: 82,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#525F7F',
  },

  h2: {
    flexShrink: 1,
    flexWrap:'wrap',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#525F7F',
  },
  h3: {
    flexShrink: 1,
    textAlign: 'left',
    paddingTop: 5,
    fontWeight: '300',
    fontSize: 15,
    color: '#838387',
  },

});