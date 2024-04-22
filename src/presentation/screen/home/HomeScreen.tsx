import {Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ScrollView} from 'react-native';
import {Title} from '../../components/ui/Title';
import {
  animationMenuItems,
  menuItems,
  uiMenuItems,
} from '../../CONSTANTS/menuItems';
import {MenuItem} from '../../components/ui/MenuItem';
import {CustomView} from '../../components/ui/CustomView';

export const HomeScreen = () => {

  return (
    <CustomView margin>
      <ScrollView>
        <Title text="Opciones del Menu" />

        {animationMenuItems.map((m, index) => (
          <MenuItem
            {...m}
            key={m.name}
            isFirst={index === 0}
            isLast={index === animationMenuItems.length - 1}
          />
        ))}

        <View style={{marginTop: 30}} />
        {uiMenuItems.map((m, index) => (
          <MenuItem
            {...m}
            key={m.name}
            isFirst={index === 0}
            isLast={index === uiMenuItems.length - 1}
          />
        ))}

        <View style={{marginTop: 30}} />
        {menuItems.map((m, index) => (
          <MenuItem
            {...m}
            key={m.name}
            isFirst={index === 0}
            isLast={index === menuItems.length - 1}
          />
        ))}
      </ScrollView>
    </CustomView>
  );
};
