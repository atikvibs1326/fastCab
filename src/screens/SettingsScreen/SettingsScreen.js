import React, { useState, useMemo } from "react";
import { View, Text, KeyboardAvoidingView, Switch } from "react-native";
import IconF from 'react-native-vector-icons/AntDesign';
import { SettingStyle, Style, LanguageStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { DropDown, Spacing } from '../../components';
import { SH, SF } from '../../utils';
import { ScrollView } from 'react-native-virtualized-view';

const SettingStylesScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { Colors } = useTheme();
  const SettingStyles = useMemo(() => SettingStyle(Colors), [Colors]);

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
    {
      setValue(value);
      setIsFocus(false);
    }
  };
  const DataofDropdown = [
    { label: 'English', value: 'en' },
    { label: 'Arabic', value: 'ara' },
    { label: 'Spanish', value: 'Spa' },
    { label: 'French', value: 'Fr' },
  ];
  const { t, i18n } = useTranslation();
  const [Language, setLanguage] = useState('en');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('en');

  return (
    <>
      <View style={[Style.MinViewScreen]}>
        <ScrollView nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.contentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={SettingStyles.KeyBordTopViewStyle}>
              <View style={SettingStyles.MinFlexView}>
                <View style={SettingStyles.Togglrswitchflex}>
                  <View>
                    <Spacing space={SH(15)} />
                    <Text style={SettingStyles.CellularDataText}>{t("Location_Track")}</Text>
                  </View>
                </View>
                <View style={SettingStyles.TogglesWotchview}>
                  <Text style={SettingStyles.DownlodToggleswitchText}>
                    {t("Enalble_Location")}
                  </Text>
                  <View>
                    <Switch
                      trackColor={{ false: Colors.gr, true: Colors.theme_background_brink_pink }}
                      thumbColor={isEnabled ? Colors.light_gray_text_color : Colors.argent_color}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>
                <Spacing space={SH(10)} />
                <Text style={SettingStyles.CellularDataText}>{t("Location_text")}</Text>
                <View style={SettingStyles.RightiConMinview}>
                  <View>
                    <Text style={SettingStyles.StandardRecommeDtext}>{t("Location_Tracking")}</Text>
                    <Text style={SettingStyles.DownloadFasterText}>{t("Enables_Recommended")}</Text>
                  </View>
                  <View>
                    <IconF
                      size={SF(30)}
                      name="check"
                      style={SettingStyles.ChekIconStyle}
                    />
                  </View>
                </View>
                <View style={SettingStyles.RightiConMinview}>
                  <View>
                    <Spacing space={SH(0)} />
                    <Text style={SettingStyles.StandardRecommeDtext}>{t("Location_Features")}</Text>
                    <Text style={SettingStyles.DownloadFasterText}>{t("Hours_Years")}</Text>
                  </View>
                </View>
                <Text style={LanguageStyles.Settingtext}>{t("Select_Your_Language")}</Text>
                <View style={isFocus ? LanguageStyles.LeadsDropdownbox : LanguageStyles.LeadsDropdownboxOpen}>
                  <DropDown
                    data={DataofDropdown}
                    dropdownStyle={LanguageStyles.LeadDropdown}
                    onChange={item => {
                      changeLanguage(item.value)
                    }}
                    search
                    searchPlaceholder="Search bar"
                    selectedTextStyle={LanguageStyles.selectedTextStyleLead}
                    IconStyle={LanguageStyles.IconStyle}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    labelField="label"
                    valueField="value"
                    renderLeftIcon={() => (
                      <Icon color="black" name={isFocus ? 'arrowup' : 'arrowdown'} size={SF(20)} />
                    )}
                  />
                </View>
                <Spacing space={SH(25)} />
                <View style={SettingStyles.RightiConMinview}>
                  <View style={SettingStyles.BodyTextWidth}>
                    <Text style={SettingStyles.StandardRecommeDtext}>{t("Synce_Changes")}</Text>
                  </View>
                  <View>
                    <IconF
                      size={SF(30)}
                      name="check"
                      style={SettingStyles.ChekIconStyle}
                    />
                  </View>
                </View>
                <Spacing space={SH(15)} />
                <Text style={SettingStyles.CellularDataText}>{t("Video_Qualitytext")}</Text>
                <View style={SettingStyles.RightiConMinviewtwo}>
                  <View>
                    <Text style={SettingStyles.StandardRecommeDtext}>{t("Standard_Qualitytext")}</Text>
                    <Text style={SettingStyles.DownloadFasterText}>{t("Downnloads_Qualitytext")}</Text>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};
export default SettingStylesScreen;
