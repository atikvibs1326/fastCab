import { StyleSheet } from 'react-native';
import { Fonts, SF, SH, SW } from '../../utils';

export default customStyles = (colors) => StyleSheet.create({
  SpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeView: {
    width: '100%'
  },
  SptextStyle: {
    color: '#299D35',
    fontSize: SF(45),
    fontFamily: Fonts.Poppins_Medium
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SH(17),
    position: 'relative',
  },
  ModalView: {
    width: '100%',
    backgroundColor: "#FFFFFF",
    borderRadius: SH(15),
    paddingVertical: SH(20),
    paddingHorizontal: SW(20),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalbuttonClose: {
    alignItems: "flex-end",
    position: 'absolute',
    right: SW(20),
    top: SH(20)
  },
});