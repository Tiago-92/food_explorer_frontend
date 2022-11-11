import { Container } from './styles';

export function Input({ isTransparent, icon: Icon, ...rest}) {
   return (
      <Container isTransparent={isTransparent}>
         {Icon && <Icon size={19.5} />}
         <input {...rest}
         >
         </input>
      </Container>
   )
}