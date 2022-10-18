import { Text, TextProps } from './Themed';
 
/**
 * This function is used to style the text usimg space-mono font family
 */
export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
