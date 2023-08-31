import { SF, SW, SH, Fonts, Colors } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';

export default PaymentStyle = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.bgwhite
  },
  bgcolorset: {
    backgroundColor: Colors.bg_screen
  },
  minviewsigninscreen: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
    paddingBottom: SH(30),
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  cardtextstyle: {
    fontSize: SF(20),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    borderTopColor: Colors.LighGrey,
    borderTopWidth: SW(0.5),
    paddingTop: SH(30),
    paddingBottom: SH(15),
  },
  cardtextstyletwo: {
    fontSize: SF(20),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    paddingTop: SH(30),
    paddingBottom: SH(15),
  },
  cardtextstylethree: {
    fontSize: SF(20),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    paddingTop: SH(30),
    borderTopColor: Colors.LighGrey,
    borderTopWidth: SW(.3),
    paddingBottom: SH(15),
    marginTop: SH(30),

  },
  flexrowcreditcard: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexrowcreditcardtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(30),
  },
  bottomborder: {
    borderBottomColor: Colors.LighGrey,
    borderBottomWidth: SW(0.3),
    paddingBottom: SH(20)
  },
  creditcardtext: {
    fontSize: SF(15),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    marginLeft: SW(20),
    color: Colors.black_text_color
  },
  youneedstext: {
    fontSize: SF(13),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    marginLeft: SW(20),
    paddingTop: SH(5),
    lineHeight: SH(19),
    color: Colors.gray_text_color
  },
  setflexrowarrowleft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(30),
  },
  setflexrowarrowlefttwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(15),
    borderBottomWidth: SW(0.3),
    borderBottomColor: Colors.LighGrey,
    paddingBottom: SH(25),
  },
  setflexrowarrowleftthree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(30),
  },
  iconsetborderwidth: {
    borderWidth: SW(1),
    border_color: Colors.LighGrey,
    paddingHorizontal: SW(7),
    borderRadius: SW(5),
  },
  setbgimage: {
    width: SW(35),
    height: SH(35),
  },
  settextwidth: {
    width: '75%'
  },
  sodexoimgwidth: {
    width: SW(30),
    height: SH(30),
  },
  paregraphtextstyleset: {
    fontSize: SF(15),
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    paddingTop: SH(5),
    lineHeight: SH(22),
    color: Colors.gray_text_color,
    borderTopWidth: SW(1),
    borderTopColor: Colors.LighGrey,
    paddingTop: SH(20),
  },
  setparegraphviewstyle: {
    marginLeft: SW(70),
    paddingVertical: SH(20),
  },
});
