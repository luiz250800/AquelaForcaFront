import React from "react";
import { MainDiv, MessageDiv, MessageText, MessageTitle } from "./Styled";

const LandingPage = () => {
  return (
    <MainDiv>
      <MessageDiv>
        <MessageTitle> Mensagem de Impacto </MessageTitle>
        <MessageText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare
          venenatis tortor, vitae hendrerit augue pharetra vel. Curabitur in
          mauris id purus accumsan viverra id id erat. Ut non nibh a nisl
          faucibus egestas. Aliquam erat volutpat. Suspendisse elementum sapien
          nec tortor vehicula, id rutrum arcu sodales. Etiam elementum odio sed
          justo suscipit luctus. Aliquam ultricies velit volutpat erat
          vestibulum, porta molestie nibh sollicitudin. Proin sit amet
          scelerisque risus. Nunc sed venenatis massa. Donec in pulvinar ex, vel
          suscipit lectus. Integer a lacus eget nisl interdum tempor sit amet
          sit amet libero.
        </MessageText>
      </MessageDiv>
    </MainDiv>
  );
};

export default LandingPage;
