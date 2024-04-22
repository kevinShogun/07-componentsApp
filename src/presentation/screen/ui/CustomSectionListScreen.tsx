import {SectionList, Text, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {houses} from '../../CONSTANTS/sectionList';
import {Subtitle} from '../../components/ui/Subtitle';
import {Separator} from '../../components/ui/Separator';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const CustomSectionListScreen = () => {
  const {height} = useWindowDimensions();
  const {top} = useSafeAreaInsets();
  const {colors, currentTheme} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text="Lista de personajes" safe />
      <Card>
        <SectionList
          sections={houses}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Text style={{marginVertical: 3, color: colors.text}}>{item}</Text>
          )}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section}) => (
            <Subtitle text={section.title} bgColor={colors.cardBackground} />
          )}
          stickySectionHeadersEnabled
          SectionSeparatorComponent={Separator}
          ListHeaderComponent={() => <Title text="Personajes" />}
          ListFooterComponent={() => (
            <Title text={`Sectiones: ${houses.length}`} />
          )}
          style={{
            height: height - top - 120,
          }}
        />
      </Card>
    </CustomView>
  );
};
function useWindowDimension() {
  throw new Error('Function not implemented.');
}
