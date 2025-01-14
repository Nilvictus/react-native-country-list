import React from 'react';
import {
  View, TextInput, Image, SectionList, Text, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import styles from './countrySelectionStyles';
import { searchIcon, countrySelectionTick, countries } from './Constants';
import BackIcon from "./assets/images/BackIcon/back_black";

/**
 * Item view
 * @param {*} params
 */
const ItemView = (params) => {  
  let text = `${params.item.name} (+${params.item.callingCode})`;
  let selected = null;
  if (params.selected != null && params.selected.callingCode === params.item.callingCode) {
    selected = <Image source={countrySelectionTick} style={styles.selectionTick} />;
  }
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.itemTextContainer} onPress={() => params.action(params.item)}>
        <Image source={{ uri: params.item.flag }} style={styles.flag} />
        <Text numberOfLines={1} style={styles.itemText}>{text}</Text>
        <View style={styles.selectionView}>
          { selected }
        </View>
      </TouchableOpacity>
      <View style={styles.itemSeparator} />
    </View>
  );
};

/**
 * Section header view
 * @param {*} params
 */
const SectionHeader = params => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionHeader}>{params.title}</Text>
  </View>
);

/**
 * Country selection screen
 */
export default class CountrySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }

  componentWillMount() {
    this.generateSectionData(countries);
  }

  /**
   * Change search text action
   */
  onChangeSearchText = (text) => {
    const filtered = countries.filter(country => country.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    this.generateSectionData(filtered);
  }

  /**
   * Generate section data from country list
   */
  generateSectionData(countryList) {
    const sections = [];    
    const sectionHeaders = countryList.map(data => data.name.charAt(0));
    const uniqueHeaders = Array.from(new Set(sectionHeaders));

    uniqueHeaders.forEach((item) => {
      const filtered = countryList.filter(country => country.name.charAt(0) === item);
      sections.push({ title: item, data: filtered });
    });
    this.setState({ sections });
  }

  render() {
    const { selected, action } = this.props;
    const { sections } = this.state;

    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? null : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      enabled={Platform.OS === "ios" ? true : false}>
        
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.iconBackButton} onPress={this.props.onPressBack}>
          <BackIcon />
          </TouchableOpacity>
          <View style={styles.searchView}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput
              style={styles.textInput}
              placeholder= 'Search'
              placeholderTextColor="#2d2926"
              enablesReturnKeyAutomatically
              clearButtonMode="while-editing"
              onChangeText={text => this.onChangeSearchText(text)}
            />
          </View>
        </View>
        <SectionList
          renderItem={({ item, index, section }) => (
            <ItemView
              item={item}
              index={index}
              section={section}
              action={(item) => action(item)}
              selected={selected}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (<SectionHeader title={title} />)}
          sections={sections}
          keyExtractor={(item, index) => item + index}
        />

      </KeyboardAvoidingView>
    );
  }
}
