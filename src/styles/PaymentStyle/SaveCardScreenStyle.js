import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, heightPercent, widthPercent } from '../../utils';

// export default StyleSheet.create({
  export default Creditcard = (Colors) => StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.sp_Theme,
  },
  bgcolorset: {
    backgroundColor: Colors.BGScreen
  },
  smaili: {
    width: SH(110),
    height: SH(110),
  },
  setstyleinputtext: {
    backgroundColor: Colors.LighColorFour,
    paddingLeft: SH(15),
    paddingRight: SH(15),
    borderRadius: 7,
    paddingTop: SH(5),
    paddingBottom: SH(5),
  },
  setstyleinputtexttwo: {
    backgroundColor:Colors.LighColorFour,
    paddingLeft: SH(15),
    paddingRight: SH(15),
    borderRadius: 7,
    paddingTop: SH(5),
    paddingBottom: SH(5),
    width: '48%',
    marginRight: SH(15),
    marginTop: SH(18),
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
  },
  inputstyle: {
    padding: 0,
    color: 'black',
    width: '100%',
    fontFamily: Fonts.NunitoSans_SemiBold,
  },
  inputstyleData: {
    width: SW(100),
    shadowColor: 'transparent'
  },

  textstyle: {
    color: 'black',
    fontFamily: Fonts.NunitoSans_SemiBold,
  },
  flexrowsetcemera: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexrowsetinput: {
    flexDirection: 'row',
  },
  setbuttonstyle: {
    marginTop: SH(26),
  },
  setwidthimage: {
    height: SH(240),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Creditcards: {
    height: SH(240),
    flexDirection: 'row',
    justifyContent: 'center',
    width: SW(420),
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    backgroundColor:'white',
    marginBottom: SH(30),
    paddingTop: SH(30),
    justifyContent: 'center',
    height: '100%',
  },
  setbuttonstylesavecard: {
    borderRadius: SW(100),
  },
  setbuttontextstyle: {
    color: 'white'
  }
});