import { Fonts, SH, SW,SF, widthPercent } from '../../utils';
import { StyleSheet } from 'react-native';


export default SwiperStyle = (Colors) => StyleSheet.create({
  ButtonCircle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width:widthPercent(90),
    marginHorizontal:SH(10)
  },
  TitleStyles: {
    color: Colors.theme_background_topaz,
    fontSize: SF(25),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    paddingHorizontal:SH(15),
    position: 'absolute',
    top: SH(100),   
    width: '100%',
  },
  Textstyle: {
    paddingHorizontal:SH(10),
    color: Colors.theme_background_topaz,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: SF(16),
    position: 'absolute',
    bottom: SH(120),
    width: '100%'
  },
  ScrollViewStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_text_color,
  },
  AnimationViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  NextTextStyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    color: Colors.theme_background_topaz,
  },
  ActiveDotStyles: {
    width: SW(14),
    height: SH(16),
    borderRadius: 100,
    backgroundColor: Colors.theme_background_topaz,
  },
  iconbgcolorview: {
    width: SW(30),
    height: SH(20),
    borderRadius: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: SH(10),
    right: SH(10),
  }
});