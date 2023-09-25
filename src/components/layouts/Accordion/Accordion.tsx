import { ReactNode, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

import * as S from "./styles";

type AccordionProps = {
  startOpen?: boolean;
  component: ReactNode;
  header: ReactNode;
};

export function Accordion({
  startOpen = false,
  header,
  component,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(startOpen);

  function handleToggleAccordionState() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <S.AccordionContainer>
      <S.AccordionHeader onClick={handleToggleAccordionState} $isOpen={isOpen}>
        {header}

        <button>
          <CaretDown size={18} />
        </button>
      </S.AccordionHeader>

      <S.AccordionComponent $isOpen={isOpen}>
        <div>{component}</div>
      </S.AccordionComponent>
    </S.AccordionContainer>
  );
}
