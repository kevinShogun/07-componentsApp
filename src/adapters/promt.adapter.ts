import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  description?: string;
  promptButton?: PromptButton[];
  promptOptions?: PromptOptions;
}

type PromptButton = {
  text: string;
  onPress: (message?: string) => void;
  style?: 'cancel' | 'default' | 'destructive' | undefined;
};

type PromptOptions = {
  type?:
    | 'default'
    | 'plain-text'
    | 'secure-text'
    | 'login-password'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  cancelable?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

export const showPrompt = ({
  title,
  description,
  promptButton,
  promptOptions,
}: Options) => {
  prompt(
    // 'Enter password',
    // 'Enter your password to claim your $1.5B in lottery winnings',
    // [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {
    //     text: 'OK',
    //     onPress: password => console.log('OK Pressed, password: ' + password),
    //   },
    // ],
    // {
    //   type: 'secure-text',
    //   cancelable: false,
    //   defaultValue: 'test',
    //   placeholder: 'placeholder',
    // },
    title,
    description,
    promptButton,
    promptOptions,
  );
};
