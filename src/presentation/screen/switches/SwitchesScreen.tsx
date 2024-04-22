import {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';
// import {Switch} from 'react-native';

export const SwitchesScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView>
      <CustomView styles={{marginTop: 50, paddingHorizontal: 10}}>
        <Card>
          <CustomSwitch
            value={state.isActive}
            toggleSwitch={value => setState({...state, isActive: value})}
            text="¿Esta activo?"
          />
          <Separator />
  
          <CustomSwitch
            value={state.isHungry}
            toggleSwitch={value => setState({...state, isHungry: value})}
            text="¿TIenen hambre?"
          />
          <Separator />
  
          <CustomSwitch
            value={state.isHappy}
            toggleSwitch={value => setState({...state, isHappy: value})}
            text="¿Es feliz?"
          />
        </Card>
      </CustomView>
    </CustomView>
    );
};
