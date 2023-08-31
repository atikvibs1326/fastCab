import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, colors, heightPercent, widthPercent } from '../../utils';

// export default StyleSheet.create({
export default Payment = (Colors) => StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.sp_Theme,
  },
  bgcolorset: {
    backgroundColor: Colors.BGScreen
  },
  minviewsigninscreen: {
    width:'90%',
    marginHorizontal:'5%',   
    marginTop: SH(-30),
  },
  minstyleviewphotograpgy: {
    flexDirection:'row',
    justifyContent:'center',
    height:'100%',   
    alignItems:'center',
    backgroundColor:'white'
},
paymentsuccesfullimg: {
    width: SW(200),
    height: SH(200),
},
imagecebter: {
  flexDirection:'row',
  justifyContent:'center',
  alignItems: 'center'
},
textcenterpayment: {
  textAlign:'center',
  fontSize: SF(25),
  lineHeight:30,
  fontWeight:'700',
  fontFamily:Fonts.NunitoSans_SemiBold,
},
textcenterpaymenttwo: {
  textAlign:'center',
  fontSize: SF(16),
  paddingHorizontal: SH(5),
  lineHeight:20,
  color: Colors.TextGreyColor,
  borderBottomColor:Colors.TextGreyColor,
  borderBottomWidth:1,
  paddingVertical: SH(20),
  fontWeight:'600',
  fontFamily:Fonts.NunitoSans_SemiBold,
},
burgeritemname: {
  fontSize: SF(18),
  paddingLeft: SH(5),
  lineHeight:20,
  color: Colors.TextBlackColor,
  paddingBottom: SH(20),
  fontWeight:'700',
  fontFamily:Fonts.NunitoSans_SemiBold,
  paddingTop: SH(30),
},
textcenterview: {
  flexDirection:'row',
  justifyContent:'center',
},
flexrowcoffitext: {
  flexDirection:'row',
  justifyContent:'space-between',
  borderBottomWidth:1,
  paddingBottom: SH(10),
  marginBottom: SH(10),
  borderBottomColor: Colors.gray_text_color,
},
flexrowcoffitexttwo: {
  flexDirection:'row',
  justifyContent:'space-between',
  paddingBottom: SH(10),
  marginBottom: SH(10),
},
totalamountpaid: {
  textAlign:'center',
  fontSize: SF(12),
  color: Colors.gray_text_color,
  lineHeight:30,
  fontWeight:'600',
  fontFamily:Fonts.NunitoSans_SemiBold,
},
proicetextset: {
  textAlign:'center',
  fontSize: SF(12),
  color: Colors.TextBlackColor,
  lineHeight:30,
  fontWeight:'600',
  fontFamily:Fonts.NunitoSans_SemiBold,
}
});