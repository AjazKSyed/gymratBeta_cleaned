import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Image, Text, View } from 'react-native';

export default class DiscoveryCalls extends Component {
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
                    <TouchableOpacity style={styles.notificationStyle} activeOpacity={0.5}
                    onPress={()=>{alert("Viwed Profile")}}
                    >
                      <Image
                        source={require('/Users/ajazsyed/Desktop/GymRat/GymRat Beta (cleaned)/gymratBeta_cleaned/assets/go.png')}
                        style={styles.ImageIconStyle}
                      />
                  </TouchableOpacity>
                    <View style={styles.TextItems}>
                      <Text style={styles.h2}>
                        {`${item.name.first}, ${item.dob.age}`}
                      </Text>
                      <View style={styles.info}>
                        <Text style={styles.h3}>
                          {`${item.location.city}`}
                        </Text>
                        </View>

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
  notificationStyle: {
    opacity: 0.5,
  },

  NameInformation: {
    paddingBottom: 30,

  },
  seaprator:{ height: 30, backgroundColor: '#F0F0F0' },
  tile: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',

  },
  Items: {

    flexDirection: 'row',
    width: 344,
    height: 130,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#8898AA',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    borderRadius: 6,

  },
  TextItems: {
    flexWrap:'wrap',


    flexDirection: 'column',
    textAlignVertical: 'center',
    paddingTop: 15,
  },

  info: {
    flexDirection: 'column',

  },

  profilePicture: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    height: 130,
    width: 145,

  },

  h2: {
    marginHorizontal: 20,

    flexShrink: 1,
    flexWrap:'wrap',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#525F7F',
  },
  h3: {
    marginHorizontal: 20,
    overflow: 'hidden',
    flexShrink: 1,
    textAlign: 'left',
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#838387',
  },

});