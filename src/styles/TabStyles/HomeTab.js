import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent, heightPercent } from '../../utils';
let screenWidth = Dimensions.get('window').width;
const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// export default StyleSheet.create({
export default HomeTabStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
  },
  mapviewstyle: {
    flex: 1,
  },
  mapstyleset: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  setimahmapstyle: {
    height: SH(50),
    width: SW(50),
  },

  SearchbarWrap: {
    // position: 'absolute',
    top: SH(10),
    backgroundColor: Colors.bgWhite,
    // width: widthPercent(60),
    justifyContent: 'center',
    left: SH(80),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    // height: SH(48),
    // overflow: 'hidden',
    borderRadius: SH(7),
    zIndex: 9999
  },
  Searchbar: {
    // height: SH(40),
    description: {
      fontWeight: 'bold',
    },
    predefinedPlacesDescription: {
      color: Colors.descrptintextcolor,
    },
    textInputContainer: {
      backgroundColor: Colors.black_text_color,
      top: SH(50),
      width: screenWidth - SH(50),
      borderWidth: 0,
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: SH(40),
      color: Colors.textinpt5d5d5d,
      fontSize: SF(16),
      borderWidth: 0,
    },
    listView: {
      backgroundColor: Colors.listViewrbg,
    },
  },

  positonabsolute: {
    position: 'absolute',
    bottom: SH(0),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    overflow: 'hidden'
  },
  AutoCompleteWrap: {
    width: '100%',
    height: '100%',
  },
  ProfileViewWrap: {
    position: 'absolute',
    top: SH(10),
    left: SH(7),
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: widthPercent(65),
    height: 'auto'
  },
  ProfileView: {
    width: SW(48),
    height: SH(48),
    borderRadius: SH(7),
    backgroundColor: Colors.bgWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    marginRight: SW(10)
  },
  ProfileImage: {
    width: '100%',
    height: '100%',
    borderRadius: SH(7)
  },
  SetImahMapStyle: {
    height: SH(50),
    width: SW(50),
  },
  WhereAreYouBoxWrap: {
    width: '100%',
    position: 'absolute',
    bottom: SH(15),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SH(20)
  },
  WhereAreYouBox: {
    width: '100%',
    backgroundColor: Colors.bgWhite,
    // height: SH(200),
    borderRadius: SH(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    paddingHorizontal: SH(15),
    paddingVertical: SH(30)
  },
  Title: {
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(17),
    color: Colors.black_text_color,
    marginTop: SH(-10),
    marginBottom: SH(-10),
  },
  DescriptionStyle: {
    fontFamily: Fonts.Poppins_Bold,
    textAlign: 'left',
    fontSize: SF(15),
    color: Colors.black_text_color,
    marginBottom: SH(-5),
  },
  PickOtyle: {
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(15),
    color: Colors.gray_text_color,
    marginTop: SH(-10),
  },
  WhereTitle: {
    fontFamily: Fonts.Poppins_Bold,
    textAlign: 'left',
    fontSize: SF(17),
    color: Colors.black_text_color,
    marginBottom: SH(-5),
    fontWeight: '900'
  },
  DestinationIcon: {
    width: SW(20),
    height: SH(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SearchPlaceStyle: {
    shadowColor: 'transparent',
    minWidth: SW(200),
    width: widthPercent(65),
    paddingRight: SH(10),
    borderBottomWidth: SH(1),
    borderBottomColor: Colors.black_text_color,
    paddingTop: SH(0),
    color:Colors.gray_text_color,
    paddingBottom: SH(0),
    marginBottom: SH(5),
    position:'relative',
    right:SH(15)
  },
  WhereAreYouTitle: {
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(16),
    color: Colors.gray_text_color,
    paddingBottom:SH(10)
  }
});