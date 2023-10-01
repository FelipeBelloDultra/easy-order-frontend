import { useOrderPdfViewer } from "~/hooks/use-order-pdf-viewer";

import { Link } from "~/components/core";

import * as S from "./styles";

export function PdfViewer() {
  const { selectedOrder } = useOrderPdfViewer();

  console.log({ selectedOrder });

  return (
    <>
      {!Object.keys(selectedOrder).length ? (
        <S.EmptyPdfDataContainer>
          <h1>Nenhum pedido selecionado</h1>

          <Link to="/dashboard/orders">
            Clique aqui para e selecionei um pedido
          </Link>
        </S.EmptyPdfDataContainer>
      ) : (
        <h1>Hello, world</h1>
      )}
    </>
  );
}
